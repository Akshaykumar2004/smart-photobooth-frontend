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
    maxPhotos,
    userInfo
  } = usePhotoBooth();
  
  const [showCountdown, setShowCountdown] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [webcamReady, setWebcamReady] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [nextCaptureTimeout, setNextCaptureTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showReadyMessage, setShowReadyMessage] = useState(false);
  const webcamRef = useRef<Webcam>(null);
  const [isGhibliMode, setIsGhibliMode] = useState(false);
  
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  
  useEffect(() => {
    // Check if user has Ghibli package
    setIsGhibliMode(userInfo.packageType === 'ghibli');
  }, [userInfo.packageType]);
  
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
      // Determine filter based on Ghibli mode and photo index
      let filter = 'normal';
      if (isGhibliMode) {
        // In Ghibli mode: 2nd and 4th photos are marked for Ghibli, 1st and 3rd are normal
        if (photos.length === 1 || photos.length === 3) {
          filter = 'ghibli-ready'; // Special marker for Ghibli conversion
        }
      }
      
      addPhoto({
        dataUrl: imageSrc,
        filter: filter,
        frame: null
      });
    }
  }, [addPhoto, photos.length, maxPhotos, nextCaptureTimeout, isGhibliMode]);
  
  const handleStartCapture = useCallback(() => {
    if (photos.length >= maxPhotos) return;
    
    // Show ready message first
    setShowReadyMessage(true);
    
    // After 3 seconds, start the actual capture process
    setTimeout(() => {
      setShowReadyMessage(false);
      setIsCapturing(true);
      setShowCountdown(true); // This will now trigger the 7-second countdown
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
      // Schedule next capture after 2 seconds
      const timeout = setTimeout(() => {
        if (photos.length < maxPhotos - 1 && isCapturing) {
          setShowCountdown(true);
        } else {
          setIsCapturing(false);
        }
      }, 2000); // Reduced gap between photos
      
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
      
      // Auto-advance to preview after capturing all photos
      setTimeout(() => {
        setStage('preview');
      }, 3000); // Give a bit more time to see the final result
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
    <div className="min-h-screen flex flex-col p-1 animate-fade-in">
      <div className="w-full max-w-7xl mx-auto">
        <ProgressBar steps={steps} currentStep={2} />
        
        <div className="flex justify-between items-center mb-4 px-4">
          <Button 
            variant="outline" 
            icon={ArrowLeft} 
            onClick={() => setStage('payment')}
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
        
        <Card animate className="relative overflow-hidden mx-4">
          <div className={`absolute inset-0 bg-white z-10 pointer-events-none ${showFlash ? 'opacity-70' : 'opacity-0'} transition-opacity duration-300`}></div>
          
          {/* Ready Message Overlay */}
          {showReadyMessage && (
            <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4 animate-pulse">
                  📸
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Get Ready!</h2>
                {isGhibliMode ? (
                  <div className="text-xl text-gray-300 mb-4">
                    <p className="mb-2">Prepare for {maxPhotos} continuous photos</p>
                    <div className="bg-purple-900/30 border border-purple-400/50 rounded-lg p-3 text-base">
                      <p className="text-purple-300 font-medium">✨ Ghibli Magic Mode ✨</p>
                      <p className="text-sm text-gray-300 mt-1">
                        📸 Photos 1 & 3: Normal style<br/>
                        🎨 Photos 2 & 4: Will be converted to Ghibli
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xl text-gray-300 mb-4">
                    Prepare for {maxPhotos} continuous photos
                  </p>
                )}
                <div className="text-lg text-yellow-400">
                  Starting in 3 seconds...
                </div>
              </div>
            </div>
          )}
          
          {showCountdown && (
            <Countdown 
              seconds={7} 
              onComplete={onCountdownComplete} 
              photoIndex={photos.length}
              isGhibliMode={isGhibliMode}
            />
          )}
          
          <div className="relative bg-black rounded-lg overflow-hidden" style={{ minHeight: '400px' }}>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1920}
              height={1080}
              videoConstraints={{
                facingMode: "user",
                width: { ideal: 1920, min: 640 },
                height: { ideal: 1080, min: 480 }
              }}
              onUserMedia={() => setWebcamReady(true)}
              className={`${webcamReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 w-full h-auto max-w-full transform scale-x-[-1]`}
              style={{ aspectRatio: 'auto', objectFit: 'contain' }}
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
                <span className="text-white text-sm font-medium">
                  CAPTURING {photos.length + 1}/{maxPhotos}
                  {isGhibliMode && (
                    <span className="ml-2">
                      {(photos.length === 1 || photos.length === 3) ? '🎨 Ghibli' : '📸 Normal'}
                    </span>
                  )}
                </span>
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
                    {/* Show Ghibli indicator for photos marked for conversion */}
                    {photo.filter === 'ghibli-ready' && (
                      <div className="absolute top-0 left-0 bg-purple-500/80 text-white text-xs px-1 rounded-br">
                        ✨
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {!isCapturing && !showReadyMessage ? (
              <Button 
                variant="primary" 
                size="lg" 
                icon={Camera}
                className={photos.length >= maxPhotos ? 'opacity-50 cursor-not-allowed' : 'btn-ultra-neon'}
                onClick={handleStartCapture}
                disabled={photos.length >= maxPhotos}
              >
                {photos.length >= maxPhotos ? 'All Photos Captured!' : 
                  isGhibliMode ? 
                    `📸✨ Start ${maxPhotos} Photos (2 Normal + 2 Ghibli)` : 
                    `📸 Start ${maxPhotos} Photos (Normal Mode)`
                }
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
                All photos captured! 
                {isGhibliMode && (
                  <span className="block text-purple-400 mt-1">
                    🎨 Photos 2 & 4 ready for Ghibli conversion
                  </span>
                )}
                <span className="block">Continue to preview and editing.</span>
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CaptureScreen;