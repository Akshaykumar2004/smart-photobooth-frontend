import React, { useState, useEffect } from 'react';
import { ArrowLeft, Share2, Download, Home, Mail, Printer, Check, AlertCircle, Server } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import ProgressBar from '../ui/ProgressBar';
import { ApiService } from '../../utils/apiService';
import MockPaymentUI from '../payment/MockPaymentUI';

const DeliveryScreen: React.FC = () => {
  const { 
    setStage, 
    photos, 
    userInfo, 
    resetPhotos, 
    photoStripBlob,
    setPhotoStripBlob,
    backendConnected
  } = usePhotoBooth();
  
  const [printing, setPrinting] = useState(false);
  const [printComplete, setPrintComplete] = useState(false);
  const [printError, setPrintError] = useState('');
  const [generatingStrip, setGeneratingStrip] = useState(false);
  const [printStatus, setPrintStatus] = useState('');
  const [autoRedirectTimer, setAutoRedirectTimer] = useState<number | null>(null);
  const [redirectCountdown, setRedirectCountdown] = useState(10);
  const [showReprintPayment, setShowReprintPayment] = useState(false);
  const [reprintPaid, setReprintPaid] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [hasReturnedFromPayment, setHasReturnedFromPayment] = useState(false);
  
  const apiService = ApiService.getInstance();
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  
  useEffect(() => {
    // Generate photo strip when component mounts
    if (photos.length > 0 && !photoStripBlob) {
      generatePhotoStrip();
    }
  }, [photos, photoStripBlob]);

  useEffect(() => {
    // Auto-start printing when strip is ready
    if (photoStripBlob && backendConnected && !printing && !printComplete && !printError) {
      handlePrint();
    }
  }, [photoStripBlob, backendConnected]);

  useEffect(() => {
    // Start auto-redirect timer when print is complete or when returning from payment
    if ((printComplete || hasReturnedFromPayment) && !autoRedirectTimer && !timerPaused) {
      setRedirectCountdown(10); // Reset countdown to 10 seconds
      const timer = setInterval(() => {
        setRedirectCountdown(prev => {
          if (prev <= 1) {
            handleStartOver();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      setAutoRedirectTimer(timer);
    }
    
    // Pause timer when in reprint payment flow or when printing
    if (showReprintPayment && autoRedirectTimer) {
      clearInterval(autoRedirectTimer);
      setAutoRedirectTimer(null);
    }
    
    return () => {
      if (autoRedirectTimer) {
        clearInterval(autoRedirectTimer);
      }
    };
  }, [printComplete, autoRedirectTimer, timerPaused, showReprintPayment, hasReturnedFromPayment]);

  useEffect(() => {
    // Pause timer while printing
    if (printing && autoRedirectTimer) {
      clearInterval(autoRedirectTimer);
      setAutoRedirectTimer(null);
    }
  }, [printing, autoRedirectTimer]);
  
  const generatePhotoStrip = async () => {
    setGeneratingStrip(true);
    try {
      const blob = await apiService.generatePhotoStrip(photos, "Good Times");
      setPhotoStripBlob(blob);
      console.log('Photo strip generated successfully');
    } catch (error) {
      console.error('Failed to generate photo strip:', error);
      setPrintError('Failed to generate photo strip. Please try again.');
    } finally {
      setGeneratingStrip(false);
    }
  };
  
  const handlePrint = async () => {
    if (!backendConnected) {
      setPrintError('Backend server not connected. Please check server status.');
      return;
    }

    if (!photoStripBlob) {
      setPrintError('Photo strip not ready. Please wait for generation to complete.');
      return;
    }

    setPrinting(true);
    setPrintError('');
    setPrintStatus('Sending print job to backend...');
    
    try {
      console.log(`Sending print request for 2 copies`);
      const result = await apiService.printPhotoStrip(2);
      
      if (result.error) {
        setPrintError(result.error);
        setPrintStatus('');
      } else {
        setPrintComplete(true);
        setPrintStatus(result.status || 'Print job sent successfully!');
        setHasReturnedFromPayment(true); // Trigger timer restart after print success
        console.log('Print job completed:', result);
      }
    } catch (error) {
      console.error('Print error:', error);
      setPrintError('Print job failed. Please check if the backend server is running and printer is connected.');
      setPrintStatus('');
    } finally {
      setPrinting(false);
    }
  };
  
  const handleStartOver = () => {
    if (autoRedirectTimer) {
      clearInterval(autoRedirectTimer);
      setAutoRedirectTimer(null);
    }
    // Reset state and go back to welcome screen
    resetPhotos();
    setStage('welcome');
  };

  const handleReprintRequest = () => {
    setTimerPaused(true);
    setShowReprintPayment(true);
    // Clear any existing timer
    if (autoRedirectTimer) {
      clearInterval(autoRedirectTimer);
      setAutoRedirectTimer(null);
    }
  };

  const handleReprintPaymentComplete = () => {
    setShowReprintPayment(false);
    setReprintPaid(true);
    setTimerPaused(false);
    setHasReturnedFromPayment(true); // Reset timer when returning from payment
    // Reset print states and start printing again
    setPrintComplete(false);
    setPrintError('');
    setPrintStatus('');
    handlePrint();
  };

  const handleCancelReprint = () => {
    setShowReprintPayment(false);
    setTimerPaused(false);
    setHasReturnedFromPayment(true); // Reset timer when returning from payment
    // Restart the timer with fresh 10 seconds
    if (printComplete) {
      setRedirectCountdown(10);
      const timer = setInterval(() => {
        setRedirectCountdown(prev => {
          if (prev <= 1) {
            handleStartOver();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      setAutoRedirectTimer(timer);
    }
  };

  // Calculate reprint price - ₹100 per copy
  const getReprintPrice = () => {
    return 100 * userInfo.copies; // ₹100 per copy for reprints
  };
  return (
    <>
      {showReprintPayment ? (
        <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
          <div className="w-full max-w-2xl">
            <Card animate className="w-full">
              <h2 className="text-2xl font-bold mb-4">Reprint Payment</h2>
              <p className="text-gray-300 mb-6">
                Additional printing: ₹100 per copy × {userInfo.copies} copies = ₹{getReprintPrice()}
              </p>
              <MockPaymentUI 
                onPaymentComplete={handleReprintPaymentComplete}
                amount={getReprintPrice()}
                includesPrint={true}
                copies={userInfo.copies}
                onCancel={handleCancelReprint}
              />
            </Card>
          </div>
        </div>
      ) : (
    <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl">
        <ProgressBar steps={steps} currentStep={4} />
        
        <Card animate className="w-full mb-6">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-success/20 rounded-full mb-4">
              <div className="w-16 h-16 bg-success/30 rounded-full flex items-center justify-center">
                <span className="text-5xl">🎉</span>
              </div>
            </div>
            <h2 className="text-3xl font-extrabold mb-3">Photos Ready!</h2>
            <p className="text-gray-300">
              Thank you for using our Photo Booth! 📸
            </p>
          </div>
          
          {/* Backend Connection Status */}
          <div className={`mb-4 p-3 rounded-lg border ${backendConnected ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
            <div className="flex items-center gap-2">
              <Server className={backendConnected ? 'text-green-400' : 'text-red-400'} size={16} />
              <span className={`font-medium ${backendConnected ? 'text-green-400' : 'text-red-400'}`}>
                Backend Server: {backendConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            {!backendConnected && (
              <p className="text-sm text-gray-300 mt-1">
                Make sure your FastAPI server is running on http://localhost:8000
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {photos.map((photo, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <img 
                  src={photo.dataUrl} 
                  alt={`Photo ${index + 1}`} 
                  className={`w-full aspect-square object-cover ${photo.filter}`}
                />
                {photo.frame && (
                  <div className="absolute inset-0">
                    <img 
                      src={photo.frame} 
                      alt="Frame" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Show filter indicator */}
                {photo.filter && photo.filter !== 'normal' && (
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {photo.filter === 'ghibli' ? '✨ Ghibli' : photo.filter}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Photo Strip Preview */}
          {photoStripBlob && (
            <div className="mb-6 text-center">
              <h3 className="font-semibold mb-2">Generated Photo Strip</h3>
              <div className="inline-block border border-gray-700 rounded-lg overflow-hidden">
                <img 
                  src={URL.createObjectURL(photoStripBlob)} 
                  alt="Photo Strip" 
                  className="max-w-full h-auto max-h-64"
                />
              </div>
            </div>
          )}
          
          {/* Generation Status */}
          {generatingStrip && (
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-2 border-blue-400/50 rounded-lg p-6 mb-6 animate-pulse-light">
              <div className="text-center">
                {/* Processing Animation */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto relative">
                    {/* Rotating outer ring */}
                    <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
                    
                    {/* Inner processing icon */}
                    <div className="absolute inset-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <div className="text-3xl animate-bounce">🎨</div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 text-blue-400 mb-3 text-xl">
                  <span className="font-bold">🎨 Creating Your Photo Strip...</span>
                </div>
                
                {/* Progress dots */}
                <div className="flex justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <div className="text-lg text-blue-300 font-medium">
                  Applying filters and arranging your photos...
                </div>
                <div className="text-base text-gray-300 mt-2">
                  This usually takes 10-20 seconds
                </div>
              </div>
            </div>
          )}
          
          {/* Print Status */}
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Printer className="text-secondary" />
              Print Status
            </h3>
            
            {printing && (
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-400/50 rounded-lg p-6 mb-4 animate-pulse-light">
                <div className="text-center">
                  {/* Printer Animation */}
                  <div className="relative mb-4">
                    <div className="printer-animation mx-auto relative">
                      <div className="printer-body">
                        <div className="printer-top"></div>
                        <div className="printer-paper"></div>
                        <div className="printer-output"></div>
                      </div>
                      
                      {/* Enhanced printer effects */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                          <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                          <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                      </div>
                      
                      {/* Printing progress bar */}
                      <div className="absolute -bottom-8 left-0 right-0">
                        <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-full rounded-full animate-pulse" style={{ width: '70%' }}></div>
                        </div>
                        <div className="text-xs text-center mt-1 text-gray-400">Printing...</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 text-blue-400 mb-3 text-xl">
                    <div className="animate-spin w-6 h-6 border-3 border-blue-400 border-t-transparent rounded-full"></div>
                    <span className="font-bold">🖨️ Printing Your Photo Strips...</span>
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  
                  <div className="text-lg text-blue-300 font-medium">
                    Please wait while we prepare your memories...
                  </div>
                  <div className="text-base text-gray-300 mt-2">
                    This usually takes 30-60 seconds • Please don't leave
                  </div>
                  
                  {/* Live status updates */}
                  <div className="mt-4 bg-blue-900/30 rounded-lg p-3 border border-blue-400/30">
                    <div className="text-sm text-blue-200 space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>✅ Photo strip generated successfully</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>🖨️ Sending to printer...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>⏳ Processing print job...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {printStatus && !printError && (
              <div className="flex items-center gap-2 text-blue-400 mb-3 text-base">
                <Server size={16} />
                <span className="font-medium">{printStatus}</span>
              </div>
            )}
            
            {printComplete && (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-success mb-2 text-lg">
                  <Check size={20} />
                  <span className="font-bold">✅ Print Successful!</span>
                </div>
                <p className="text-gray-300 text-base">
                  Please collect your 2 photo strips from the printer.
                </p>
                
                {/* Auto-redirect countdown */}
                {!timerPaused && (
                  <div className="mt-3 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-400">
                    <div className="animate-pulse w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="font-medium">
                      Returning to home in {redirectCountdown} seconds...
                    </span>
                  </div>
                  </div>
                )}
                
                {timerPaused && (
                  <div className="mt-3 p-3 bg-orange-900/20 border border-orange-500/30 rounded-lg">
                    <div className="flex items-center gap-2 text-orange-400">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="font-medium">
                        Timer paused - Complete your transaction
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {printError && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-error mb-2 text-base">
                  <AlertCircle size={16} />
                  <span className="font-medium">❌ Print Failed</span>
                </div>
                <p className="text-gray-300 text-sm">{printError}</p>
              </div>
            )}
            
            <div className="text-xs text-gray-500 mt-3 space-y-1">
              <p>📄 Format: 4x6 inch strips • 🖨️ Copies: 2</p>
              <p>🔗 Backend: {apiService['baseUrl']}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            {!printComplete && backendConnected && (
              <Button
                variant="accent"
                icon={Printer}
                className="flex-1"
                onClick={handlePrint}
                disabled={printing || generatingStrip || !photoStripBlob}
              >
                {printing ? '🖨️ Printing...' : '🖨️ Print Strips'}
              </Button>
            )}
            
            {printError && (
              <Button
                variant="outline"
                icon={Printer}
                className="flex-1 border-error text-error hover:bg-error/10"
                onClick={handlePrint}
                disabled={printing || generatingStrip || !photoStripBlob}
              >
                🔄 Retry Print
              </Button>
            )}
            
            {printComplete && (
              <Button
                variant="accent"
                icon={Printer}
                className="flex-1"
                onClick={handleReprintRequest}
              >
                🖨️ Print Again (Pay Again)
              </Button>
            )}
          </div>
        </Card>
        
        <div className="text-center">
          <Button
            variant="outline"
            icon={Home}
            className="border-gray-700 text-lg"
            onClick={handleStartOver}
            disabled={!printComplete && !printError}
            size="lg"
          >
            🏠 Start New Session
          </Button>
          
          <p className="text-gray-400 text-base mt-4 font-medium">
            {printComplete ? (
              <>
                🎊 Thank you for using Smart Photo Booth!<br />
                {!timerPaused ? (
                  <>Returning to home automatically in {redirectCountdown}s</>
                ) : (
                  <>Timer paused - Complete your payment to continue</>
                )}
              </>
            ) : printing || generatingStrip ? (
              <>
                ⏳ Please wait while we process your photos<br />
                Do not leave or refresh the page
              </>
            ) : (
              <>
                Please collect your photo strips from the printer<br />
                Photos are automatically deleted after 24 hours
              </>
            )}
          </p>
        </div>
      </div>
    </div>
      )}
    </>
  );
};

export default DeliveryScreen;