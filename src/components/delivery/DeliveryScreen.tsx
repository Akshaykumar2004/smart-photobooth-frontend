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
    photoStripBlob,
    setPhotoStripBlob,
    backendConnected
  } = usePhotoBooth();
  
  const [printing, setPrinting] = useState(false);
  const [printComplete, setPrintComplete] = useState(false);
  const [printError, setPrintError] = useState('');
  const [generatingStrip, setGeneratingStrip] = useState(false);
  const [printStatus, setPrintStatus] = useState('');
  
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
          onClick={() => setStage('preview')}
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
            <h2 className="text-2xl font-bold mb-2">Your Photo Strips Are Ready!</h2>
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
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
                <span className="text-blue-400">Generating photo strip...</span>
              </div>
            </div>
          )}
          
          {/* Print Status */}
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Printer className="text-secondary" />
              Photo Strip Print Status
            </h3>
            
            {printing && (
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <div className="animate-spin w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full"></div>
                <span>Printing 2 photo strips...</span>
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
                  Please check your printer for 2 photo strips.
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
              <p>Total copies: 2</p>
              <p>Server URL: {apiService['baseUrl']}</p>
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
                {printing ? 'Printing...' : 'Print 2 Strips'}
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
            Please collect your 2 photo strips from the printer.<br />
            Photos will be automatically deleted after 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryScreen;