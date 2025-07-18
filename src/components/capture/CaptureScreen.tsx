import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Camera, ArrowLeft, ArrowRight, Square, RotateCcw } from 'lucide-react';
import Webcam from 'react-webcam';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import ProgressBar from '../ui/ProgressBar';
import Countdown from './Countdown';

const CaptureScreen: React.FC = () => {
  const { 
    setStage, 
    addPhoto, 
    photos, 
    maxPhotos
  } = usePhotoBooth();
  
  const [showCountdown, setShowCountdown] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [webcamReady, setWebcamReady] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [nextCaptureTimeout, setNextCaptureTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showReadyMessage, setShowReadyMessage] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  
  const steps = ['Welcome', 'Capture', 'Preview', 'Payment', 'Delivery'];
  
  const capturePhoto = useCallback(() => {
    if (photos.length >= maxPhotos) {
      setIsCapturing(false);
      if (nextCaptureTimeout) {
        clearTimeout(nextCaptureTimeout);
        setNextCaptureTimeout(null);
      }
      return;
    }

    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 300);
    
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      addPhoto({
        dataUrl: imageSrc,
        filter: 'normal',
        frame: null
      });
    }
  }, [addPhoto, photos.length, maxPhotos, nextCaptureTimeout]);
  
  const handleStartCapture = useCallback(() => {
    if (photos.length >= maxPhotos) return;
    
    // Show ready message first
    setShowReadyMessage(true);
    
    // After 3 seconds, start the actual capture process
    setTimeout(() => {
      setShowReadyMessage(false);
      setIsCapturing(true);
      setShowCountdown(true);
    }, 3000);
  }, [photos.length, maxPhotos]);
  
  const handleStopCapture = useCallback(() => {
    setIsCapturing(false);
    setShowReadyMessage(false);
    if (nextCaptureTimeout) {
      clearTimeout(nextCaptureTimeout);
      setNextCaptureTimeout(null);
    }
  }, [nextCaptureTimeout]);
  
  const onCountdownComplete = useCallback(() => {
    capturePhoto();
    setShowCountdown(false);
    
    if (isCapturing && photos.length < maxPhotos - 1) {
      // Schedule next capture after 3 seconds
      const timeout = setTimeout(() => {
        if (photos.length < maxPhotos - 1 && isCapturing) {
          setShowCountdown(true);
        } else {
          setIsCapturing(false);
        }
      }, 3000);
      
      setNextCaptureTimeout(timeout);
    } else if (photos.length >= maxPhotos - 1) {
      // Stop capturing when max photos reached
      setIsCapturing(false);
    }
  }, [capturePhoto, isCapturing, photos.length, maxPhotos]);
  
  const handleNext = () => {
    setStage('preview');
  };
  
  const handleReset = () => {
    // Reset all photos and start over
    window.location.reload();
  };
  
  useEffect(() => {
    // Stop capturing when max photos reached
    if (photos.length >= maxPhotos) {
      if (nextCaptureTimeout) {
        clearTimeout(nextCaptureTimeout);
        setNextCaptureTimeout(null);
      }
      setIsCapturing(false);
    }
  }, [photos.length, maxPhotos, nextCaptureTimeout]);
  
  useEffect(() => {
    // Cleanup timeouts on unmount
    return () => {
      if (nextCaptureTimeout) {
        clearTimeout(nextCaptureTimeout);
      }
    };
  }, [nextCaptureTimeout]);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl">
        <ProgressBar steps={steps} currentStep={1} />
        
        <div className="flex justify-between items-center mb-4">
          <Button 
            variant="outline" 
            icon={ArrowLeft} 
            onClick={() => setStage('welcome')}
          >
            Back
          </Button>
          
          <Button 
            variant="outline" 
            icon={RotateCcw} 
            onClick={handleReset}
            className="border-orange-500 text-orange-400 hover:bg-orange-500/10"
          >
            Reset
          </Button>
          
          {photos.length > 0 && (
            <Button 
              variant="primary" 
              icon={ArrowRight} 
              iconPosition="right"
              onClick={handleNext}
            >
              Continue to Preview
            </Button>
          )}
        </div>
        
        <Card animate className="relative overflow-hidden">
          <div className={`absolute inset-0 bg-white z-10 pointer-events-none ${showFlash ? 'opacity-70' : 'opacity-0'} transition-opacity duration-300`}></div>
          
          {/* Ready Message Overlay */}
          {showReadyMessage && (
            <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4 animate-pulse">
                  📸
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Get Ready!</h2>
                <p className="text-xl text-gray-300 mb-4">
                  Prepare for {maxPhotos} continuous photos
                </p>
                <div className="text-lg text-yellow-400">
                  Starting in 3 seconds...
                </div>
              </div>
            </div>
          )}
          
          {showCountdown && (
            <Countdown seconds={3} onComplete={onCountdownComplete} />
          )}
          
          <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width="100%"
              height="100%"
              videoConstraints={{
                facingMode: "user"
              }}
              onUserMedia={() => setWebcamReady(true)}
              className={`${webcamReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            />
            
            {!webcamReady && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
              </div>
            )}
            
            {/* Camera frame overlay */}
            <div className="absolute inset-0 pointer-events-none border-2 border-white/30 rounded-lg">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"></div>
            </div>
            
            {/* Capturing indicator */}
            {isCapturing && (
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500/80 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">CAPTURING {photos.length + 1}/{maxPhotos}</span>
              </div>
            )}
          </div>
          
          <div className="mt-6 flex flex-col items-center">
            <p className="mb-4 text-center">
              <span className="font-medium">{photos.length}</span> of <span className="font-medium">{maxPhotos}</span> photos taken
            </p>
            
            {/* Photo thumbnails */}
            {photos.length > 0 && (
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {photos.map((photo, index) => (
                  <div key={index} className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-gray-700 relative">
                    <img 
                      src={photo.dataUrl} 
                      alt={`Captured ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-primary text-white text-xs px-1 rounded-tl">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {!isCapturing && !showReadyMessage ? (
              <Button 
                variant="primary" 
                size="lg" 
                icon={Camera}
                onClick={handleStartCapture}
                disabled={photos.length >= maxPhotos}
                className={photos.length >= maxPhotos ? 'opacity-50 cursor-not-allowed' : ''}
              >
                {photos.length >= maxPhotos ? 'All Photos Captured!' : 'Start Continuous Capture'}
              </Button>
            ) : (
              <Button 
                variant="secondary"
                size="lg" 
                icon={Square}
                onClick={handleStopCapture}
                disabled={showReadyMessage}
              >
                {showReadyMessage ? 'Getting Ready...' : 'Stop Capture'}
              </Button>
            )}
            
            {photos.length >= maxPhotos && (
              <p className="text-success text-sm mt-2">
                All photos captured! Continue to preview and editing.
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CaptureScreen;