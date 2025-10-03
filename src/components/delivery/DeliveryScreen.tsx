import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Share2, Download, Home, Mail, Printer, Check, AlertCircle, Server, Plus, Minus } from 'lucide-react';
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
    setPhotoStripBlob
  } = usePhotoBooth();
  
  const [printing, setPrinting] = useState(false);
  const [printComplete, setPrintComplete] = useState(false);
  const [printError, setPrintError] = useState('');
  const [generatingStrip, setGeneratingStrip] = useState(false);
  const [printStatus, setPrintStatus] = useState('');
  const [autoRedirectTimer, setAutoRedirectTimer] = useState<number | null>(null);
  const [redirectCountdown, setRedirectCountdown] = useState(90);
  const [showReprintPayment, setShowReprintPayment] = useState(false);
  const [reprintPaid, setReprintPaid] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [hasReturnedFromPayment, setHasReturnedFromPayment] = useState(false);
  const [printAttempted, setPrintAttempted] = useState(false);
  const [apiTimeout, setApiTimeout] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const [hasGeneratedStrip, setHasGeneratedStrip] = useState(false);
  
  const apiService = ApiService.getInstance();
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  const generationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const printTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Generate photo strip when component mounts - only if not already generated
    // Add a small delay to ensure photos are fully loaded from context
    const timer = setTimeout(() => {
      if (photos.length > 0 && !photoStripBlob && !generatingStrip && !hasGeneratedStrip) {
        console.log('Generating strip with photos:', photos.map(p => ({ filter: p.filter, hasGhibli: p.filter === 'ghibli' })));
        setHasGeneratedStrip(true);
        generatePhotoStrip();
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [photos]); // Add photos as dependency to react to context updates

  useEffect(() => {
    // Auto-start printing when strip is ready - only if not already attempted
    if (photoStripBlob && !printing && !printComplete && !printError && !printAttempted) {
      console.log('Starting print with strip ready');
      setPrintAttempted(true);
      handlePrint();
    }
  }, [photoStripBlob, printAttempted]);

  // Remove the old useEffect that was duplicating this logic
  /*
  useEffect(() => {
    // Generate photo strip when component mounts - only if not already generated
    if (photos.length > 0 && !photoStripBlob && !generatingStrip && !hasGeneratedStrip) {
      setHasGeneratedStrip(true);
      generatePhotoStrip();
    }
  }, []); // Empty dependency array to run only once on mount
  */

  useEffect(() => {
    // Start auto-redirect timer when print is complete
    if (printComplete && !autoRedirectTimer && !timerPaused) {
      setRedirectCountdown(60);
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
    
    return () => {
      if (autoRedirectTimer) {
        clearInterval(autoRedirectTimer);
      }
    };
  }, [printComplete, autoRedirectTimer, timerPaused]);

  useEffect(() => {
    return () => {
      // Cleanup timeouts
      if (generationTimeoutRef.current) {
        clearTimeout(generationTimeoutRef.current);
      }
      if (printTimeoutRef.current) {
        clearTimeout(printTimeoutRef.current);
      }
      if (autoRedirectTimer) {
        clearInterval(autoRedirectTimer);
      }
    };
  }, []);
  
  const generatePhotoStrip = async () => {
    if (generatingStrip || photoStripBlob) {
      return; // Prevent duplicate calls
    }
    
    // Log the photos being used for generation
    console.log('Generating photo strip with photos:', photos.map((p, i) => ({
      index: i,
      filter: p.filter,
      isGhibli: p.filter === 'ghibli',
      hasDataUrl: !!p.dataUrl
    })));
    
    setGeneratingStrip(true);
    setApiTimeout(false);
    
    // Set timeout for 60 seconds
    generationTimeoutRef.current = setTimeout(() => {
      setApiTimeout(true);
      setGeneratingStrip(false);
      
      // Wait 30 seconds then retry
      setTimeout(() => {
        if (retryCount < 1) {
          setRetryCount(prev => prev + 1);
          setIsRetrying(true);
          setApiTimeout(false);
          generatePhotoStrip();
        } else {
          setPrintError('We deeply apologize, but the service is currently unavailable. Please try again later.');
        }
      }, 30000);
    }, 60000);

    try {
      const blob = await apiService.generatePhotoStrip(photos, "Good Times");
      setPhotoStripBlob(blob);
      setGeneratingStrip(false);
      setApiTimeout(false);
      setIsRetrying(false);
      
      if (generationTimeoutRef.current) {
        clearTimeout(generationTimeoutRef.current);
      }
    } catch (error) {
      console.error('Photo strip generation failed:', error);
      setGeneratingStrip(false);
      
      if (generationTimeoutRef.current) {
        clearTimeout(generationTimeoutRef.current);
      }
      
      if (!apiTimeout) {
        setPrintError('Failed to generate photo strip. Please try again.');
      }
    }
  };
  
  const handlePrint = async () => {
    if (!photoStripBlob) {
      setPrintError('Photo strip not ready.');
      return;
    }

    setPrinting(true);
    setPrintError('');
    setPrintStatus('Printing...');
    setApiTimeout(false);
    
    // Set timeout for 60 seconds
    printTimeoutRef.current = setTimeout(() => {
      setApiTimeout(true);
      setPrinting(false);
      setPrintStatus('');
      
      // Wait 30 seconds then retry
      setTimeout(() => {
        if (retryCount < 1) {
          setRetryCount(prev => prev + 1);
          setIsRetrying(true);
          setApiTimeout(false);
          handlePrint();
        } else {
          setPrintError('We deeply apologize, but the printing service is currently unavailable.');
        }
      }, 30000);
    }, 60000);

    try {
      const result = await apiService.printPhotoStrip(1);
      
      if (printTimeoutRef.current) {
        clearTimeout(printTimeoutRef.current);
      }
      
      // Simulate print time
      await new Promise(resolve => setTimeout(resolve, 7000));
      
      if (result.error) {
        setPrintError(result.error);
        setPrintStatus('');
      } else {
        setPrintComplete(true);
        setPrintStatus('');
      }
      setPrinting(false);
      setApiTimeout(false);
      setIsRetrying(false);
    } catch (error) {
      console.error('Print failed:', error);
      setPrinting(false);
      setPrintStatus('');
      
      if (printTimeoutRef.current) {
        clearTimeout(printTimeoutRef.current);
      }
      
      if (!apiTimeout) {
        setPrintError('Print failed. Please try again.');
      }
    }
  };
  
  const handleStartOver = () => {
    if (autoRedirectTimer) {
      clearInterval(autoRedirectTimer);
      setAutoRedirectTimer(null);
    }
    
    // Reset all delivery-specific state
    setPrinting(false);
    setPrintComplete(false);
    setPrintError('');
    setGeneratingStrip(false);
    setPrintStatus('');
    setAutoRedirectTimer(null);
    setRedirectCountdown(30);
    setShowReprintPayment(false);
    setReprintPaid(false);
    setTimerPaused(false);
    setHasReturnedFromPayment(false);
    setPrintAttempted(false);
    setApiTimeout(false);
    setRetryCount(0);
    setIsRetrying(false);
    setHasGeneratedStrip(false);
    
    // Clear photo strip blob
    setPhotoStripBlob(null);
    
    resetPhotos();
    setStage('welcome');
  };

  const handleReprintRequest = () => {
    setTimerPaused(true);
    setShowReprintPayment(true);
    if (autoRedirectTimer) {
      clearInterval(autoRedirectTimer);
      setAutoRedirectTimer(null);
    }
  };

  const handleReprintPaymentComplete = () => {
    setShowReprintPayment(false);
    setReprintPaid(true);
    setTimerPaused(false);
    setPrintComplete(false);
    setPrintError('');
    setPrintStatus('');
    setPrintAttempted(false); // Allow printing again
    setRetryCount(0); // Reset retry count
    handleReprint();
  };

  const handleReprint = async () => {
    if (!photoStripBlob) {
      setPrintError('Photo strip not ready.');
      return;
    }

    setPrinting(true);
    setPrintError('');
    setPrintStatus('Printing...');
    setApiTimeout(false);
    
    // Set timeout for 60 seconds
    printTimeoutRef.current = setTimeout(() => {
      setApiTimeout(true);
      setPrinting(false);
      setPrintStatus('');
      
      // Wait 30 seconds then retry
      setTimeout(() => {
        if (retryCount < 1) {
          setRetryCount(prev => prev + 1);
          setIsRetrying(true);
          setApiTimeout(false);
          handleReprint();
        } else {
          setPrintError('We deeply apologize, but the printing service is currently unavailable.');
        }
      }, 30000);
    }, 60000);

    try {
      const result = await apiService.printPhotoStrip(1);
      
      if (printTimeoutRef.current) {
        clearTimeout(printTimeoutRef.current);
      }
      
      // Simulate print time
      await new Promise(resolve => setTimeout(resolve, 7000));
      
      if (result.error) {
        setPrintError(result.error);
        setPrintStatus('');
      } else {
        setPrintComplete(true);
        setPrintStatus('');
      }
      setPrinting(false);
      setApiTimeout(false);
      setIsRetrying(false);
    } catch (error) {
      console.error('Reprint failed:', error);
      setPrinting(false);
      setPrintStatus('');
      
      if (printTimeoutRef.current) {
        clearTimeout(printTimeoutRef.current);
      }
      
      if (!apiTimeout) {
        setPrintError('Print failed. Please try again.');
      }
    }
  };

  const handleCancelReprint = () => {
    setShowReprintPayment(false);
    setTimerPaused(false);
    if (printComplete) {
      setRedirectCountdown(30);
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

  const getReprintPrice = () => {
    return 200;
  };

  return (
    <>
      {showReprintPayment ? (
        <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
          <div className="w-full max-w-2xl">
            <Card animate className="w-full">
              <h2 className="text-2xl font-bold mb-4">Payment for Additional Copies</h2>
              <p className="text-gray-300 mb-6">
                ₹{getReprintPrice()} for 1 additional copy
              </p>
              <MockPaymentUI 
                onPaymentComplete={handleReprintPaymentComplete}
                amount={getReprintPrice()}
                includesPrint={true}
                copies={1}
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
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-4xl font-bold mb-3">Photos Ready!</h2>
              </div>
              
              {/* Photo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {photos.map((photo, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden">
                    <img 
                      src={photo.dataUrl} 
                      alt={`Photo ${index + 1}`} 
                      className={`w-full aspect-square object-cover ${photo.filter}`}
                    />
                    {photo.filter === 'ghibli' && (
                      <div className="absolute top-2 left-2 bg-purple-500/80 text-white text-xs px-2 py-1 rounded">
                        ✨
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Generation Status */}
              {generatingStrip && !apiTimeout && (
                <div className="bg-blue-900/30 border-2 border-blue-400/50 rounded-lg p-6 mb-6 animate-pulse-light">
                  <div className="text-center">
                    <div className="text-6xl mb-4 animate-bounce">🎨</div>
                    <div className="text-2xl font-bold text-blue-400 mb-4">
                      Creating Your Strip...
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* API Timeout Message */}
              {apiTimeout && !isRetrying && (
                <div className="bg-orange-900/30 border-2 border-orange-400/50 rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⏰</div>
                    <div className="text-xl font-bold text-orange-400 mb-2">
                      Sorry for the delay...
                    </div>
                    <div className="text-gray-300">
                      Retrying in 30 seconds
                    </div>
                  </div>
                </div>
              )}

              {/* Retry Message */}
              {isRetrying && (
                <div className="bg-yellow-900/30 border-2 border-yellow-400/50 rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4 animate-spin">🔄</div>
                    <div className="text-xl font-bold text-yellow-400">
                      Retrying...
                    </div>
                  </div>
                </div>
              )}
              
              {/* Print Status */}
              {printing && (
                <div className="bg-purple-900/30 border-2 border-purple-400/50 rounded-lg p-8 mb-6 animate-pulse-light">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="printer-animation mx-auto"></div>
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-4">
                      🖨️ PRINTING...
                    </div>
                    <div className="text-lg text-gray-300">
                      Please wait, do not leave
                    </div>
                  </div>
                </div>
              )}
              
              {printComplete && (
                <div className="bg-green-900/30 border-2 border-green-400/50 rounded-lg p-8 mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <div className="text-3xl font-bold text-green-400 mb-4">
                      PRINT COMPLETE!
                    </div>
                    <div className="text-lg text-gray-300 mb-4">
                      Collect your photo strip
                    </div>
                    {!timerPaused && (
                      <div className="text-blue-400">
                        Returning home in {redirectCountdown}s
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {printError && (
                <div className="bg-red-900/30 border-2 border-red-400/50 rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">❌</div>
                    <div className="text-xl font-bold text-red-400 mb-2">
                      Print Failed
                    </div>
                    <div className="text-gray-300 text-sm">
                      {printError}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="space-y-4">
                {!printComplete && !printError && (
                  <Button
                    variant="primary"
                    icon={Printer}
                    className="w-full text-2xl py-6 btn-ultra-neon"
                    onClick={handlePrint}
                    disabled={printing || generatingStrip || !photoStripBlob}
                    size="lg"
                  >
                    🖨️ PRINT STRIPS
                  </Button>
                )}
                
                {printError && (
                  <Button
                    variant="outline"
                    icon={Printer}
                    className="w-full text-2xl py-6 border-red-500 text-red-400 hover:bg-red-500/10"
                    onClick={() => {
                      setPrintError('');
                      setPrintAttempted(false);
                      setRetryCount(0);
                      handlePrint();
                    }}
                    size="lg"
                  >
                    🔄 RETRY PRINT
                  </Button>
                )}
                
                {printComplete && (
                  <Button
                    variant="accent"
                    icon={Printer}
                    className="w-full text-3xl py-8 btn-ultra-neon animate-pulse"
                    onClick={handleReprintRequest}
                    size="lg"
                  >
                    ✨ Print Again ✨
                  </Button>
                )}
                
                <Button
                  variant="primary"
                  icon={Home}
                  className="w-full text-xl py-4"
                  onClick={handleStartOver}
                  size="lg"
                >
                  🏠 Start New Session
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default DeliveryScreen;