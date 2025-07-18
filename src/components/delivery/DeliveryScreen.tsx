import React, { useState, useEffect } from 'react';
import { ArrowLeft, Share2, Download, Home, Mail, Printer, Check, AlertCircle, Server } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import ProgressBar from '../ui/ProgressBar';
import { ApiService } from '../../utils/apiService';

const DeliveryScreen: React.FC = () => {
  const { 
    setStage, 
    photos, 
    userInfo, 
    resetPhotos, 
    shouldPrint,
    photoStripBlob,
    setPhotoStripBlob,
    backendConnected
  } = usePhotoBooth();
  
  const [emailSent, setEmailSent] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [printing, setPrinting] = useState(false);
  const [printComplete, setPrintComplete] = useState(false);
  const [printError, setPrintError] = useState('');
  const [generatingStrip, setGeneratingStrip] = useState(false);
  const [printStatus, setPrintStatus] = useState('');
  
  const apiService = ApiService.getInstance();
  const steps = ['Welcome', 'Capture', 'Preview', 'Payment', 'Delivery'];
  
  useEffect(() => {
    // Generate photo strip when component mounts
    if (photos.length > 0 && !photoStripBlob) {
      generatePhotoStrip();
    }
  }, [photos, photoStripBlob]);

  useEffect(() => {
    // Auto-start printing if print option was selected and strip is ready
    if (shouldPrint && photoStripBlob && backendConnected && !printing && !printComplete && !printError) {
      handlePrint();
    }
  }, [shouldPrint, photoStripBlob, backendConnected]);
  
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
  
  const handleEmailDelivery = () => {
    // Simulate email sending
    setEmailSent(true);
  };
  
  const handleDownloadAll = () => {
    // Download individual photos
    photos.forEach((photo, index) => {
      const link = document.createElement('a');
      link.href = photo.dataUrl;
      link.download = `photo_${index + 1}.jpg`;
      link.click();
    });
    
    // Download photo strip if available
    if (photoStripBlob) {
      const stripUrl = URL.createObjectURL(photoStripBlob);
      const link = document.createElement('a');
      link.href = stripUrl;
      link.download = 'photo_strip.png';
      link.click();
      URL.revokeObjectURL(stripUrl);
    }
    
    setDownloadComplete(true);
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
      console.log(`Sending print request for ${userInfo.copies} copies`);
      const result = await apiService.printPhotoStrip(userInfo.copies);
      
      if (result.error) {
        setPrintError(result.error);
        setPrintStatus('');
      } else {
        setPrintComplete(true);
        setPrintStatus(result.status || 'Print job sent successfully!');
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
    // Reset state and go back to welcome screen
    resetPhotos();
    setStage('welcome');
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl">
        <ProgressBar steps={steps} currentStep={4} />
        
        <Button 
          variant="outline" 
          icon={ArrowLeft} 
          onClick={() => setStage('payment')}
          className="mb-4"
        >
          Back
        </Button>
        
        <Card animate className="w-full mb-6">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-success/20 rounded-full mb-4">
              <div className="w-16 h-16 bg-success/30 rounded-full flex items-center justify-center">
                <span className="text-4xl">🎉</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Your Photos Are Ready!</h2>
            <p className="text-gray-300">
              Thank you for using Smart Photo Booth!
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
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
                <span className="text-blue-400">Generating photo strip...</span>
              </div>
            </div>
          )}
          
          {/* Print Status */}
          {shouldPrint && (
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Printer className="text-secondary" />
                Photo Strip Print Status
              </h3>
              
              {printing && (
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <div className="animate-spin w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
                  <span>Printing {userInfo.copies} photo strips...</span>
                </div>
              )}
              
              {printStatus && !printError && (
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Server size={16} />
                  <span>{printStatus}</span>
                </div>
              )}
              
              {printComplete && (
                <div className="flex items-center gap-2 text-success mb-2">
                  <Check size={16} />
                  <span>
                    Print job sent successfully! 
                    Please check your printer for {userInfo.copies} photo strips.
                  </span>
                </div>
              )}
              
              {printError && (
                <div className="flex items-center gap-2 text-error mb-2">
                  <AlertCircle size={16} />
                  <span>{printError}</span>
                </div>
              )}
              
              <div className="text-sm text-gray-400 mt-2">
                <p>Backend: FastAPI Server + CUPS</p>
                <p>Format: 4x6 inch photo strips (2x6 layout)</p>
                <p>Total copies: {userInfo.copies}</p>
                <p>Server URL: {apiService['baseUrl']}</p>
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                icon={Download}
                className="flex-1"
                onClick={handleDownloadAll}
                disabled={generatingStrip}
              >
                {downloadComplete ? 'Downloaded!' : 'Download All Photos'}
              </Button>
              
              <Button 
                variant="secondary" 
                icon={Mail}
                className="flex-1"
                onClick={handleEmailDelivery}
              >
                {emailSent ? 'Email Sent!' : 'Email Photos'}
              </Button>
            </div>
            
            {shouldPrint && (
              <div className="flex gap-4">
                {!printComplete && backendConnected && (
                  <Button
                    variant="accent"
                    icon={Printer}
                    className="flex-1"
                    onClick={handlePrint}
                    disabled={printing || generatingStrip || !photoStripBlob}
                  >
                    {printing ? 'Printing...' : `Print ${userInfo.copies} Copies`}
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
                    Retry Print
                  </Button>
                )}
              </div>
            )}
            
            <Button
              variant="outline"
              icon={Share2}
              className="w-full"
            >
              Share Photos
            </Button>
          </div>
        </Card>
        
        <div className="text-center">
          <Button
            variant="outline"
            icon={Home}
            onClick={handleStartOver}
            className="border-gray-700"
          >
            Start New Session
          </Button>
          
          <p className="text-gray-400 text-sm mt-4">
            Photos will be automatically deleted after 24 hours.<br />
            {shouldPrint 
              ? `Make sure to collect your ${userInfo.copies} photo strips and download digital copies.` 
              : 'Make sure to download or email them.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryScreen;