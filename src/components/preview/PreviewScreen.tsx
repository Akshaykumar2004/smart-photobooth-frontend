import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RefreshCcw, Download } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import ProgressBar from '../ui/ProgressBar';
import FilterSelector from './FilterSelector';
import FrameSelector from './FrameSelector';

const PreviewScreen: React.FC = () => {
  const { 
    setStage, 
    photos, 
    selectedPhotoIndex, 
    setSelectedPhotoIndex
  } = usePhotoBooth();
  
  const [currentPhoto, setCurrentPhoto] = useState({...photos[selectedPhotoIndex]});
  const [allPhotos, setAllPhotos] = useState([...photos]);
  
  const steps = ['Welcome', 'Capture', 'Preview', 'Payment', 'Delivery'];
  
  const handleFilterChange = (filter: string) => {
    const updatedPhoto = {...currentPhoto, filter};
    setCurrentPhoto(updatedPhoto);
    
    // Update the photo in the array
    const newPhotos = [...allPhotos];
    newPhotos[selectedPhotoIndex] = updatedPhoto;
    setAllPhotos(newPhotos);
  };
  
  const handleFrameChange = (frame: string | null) => {
    const updatedPhoto = {...currentPhoto, frame};
    setCurrentPhoto(updatedPhoto);
    
    // Update the photo in the array
    const newPhotos = [...allPhotos];
    newPhotos[selectedPhotoIndex] = updatedPhoto;
    setAllPhotos(newPhotos);
  };
  
  const handlePhotoSelect = (index: number) => {
    setSelectedPhotoIndex(index);
    setCurrentPhoto({...allPhotos[index]});
  };
  
  const handleNext = () => {
    setStage('payment');
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl">
        <ProgressBar steps={steps} currentStep={2} />
        
        <div className="flex justify-between items-center mb-4">
          <Button 
            variant="outline" 
            icon={ArrowLeft} 
            onClick={() => setStage('capture')}
          >
            Back to Capture
          </Button>
          
          <Button 
            variant="primary" 
            icon={ArrowRight} 
            iconPosition="right"
            onClick={handleNext}
          >
            Continue to Payment
          </Button>
        </div>
        
        <Card animate className="w-full">
          <h2 className="text-2xl font-bold mb-6">Edit Your Photos</h2>
          
          <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden mb-6">
            {/* Main photo */}
            <img 
              src={currentPhoto.dataUrl} 
              alt="Preview" 
              className={`w-full h-full object-cover ${currentPhoto.filter}`}
            />
            
            {/* Frame overlay */}
            {currentPhoto.frame && (
              <div className="absolute inset-0 pointer-events-none">
                <img 
                  src={currentPhoto.frame} 
                  alt="Frame" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          
          {/* Thumbnail selector */}
          {allPhotos.length > 1 && (
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {allPhotos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => handlePhotoSelect(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                    selectedPhotoIndex === index ? 'border-primary' : 'border-gray-700 opacity-70'
                  }`}
                >
                  <img 
                    src={photo.dataUrl} 
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-full h-full object-cover ${photo.filter}`}
                  />
                  {photo.frame && (
                    <div className="absolute inset-0 pointer-events-none">
                      <img 
                        src={photo.frame} 
                        alt="Frame" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                    {index + 1}
                  </div>
                </button>
              ))}
            </div>
          )}
          
          {/* Filter selector */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Choose a Filter</h3>
            <FilterSelector 
              currentFilter={currentPhoto.filter} 
              onFilterChange={handleFilterChange} 
            />
          </div>
          
          {/* Frame selector */}
          <div>
            <h3 className="text-lg font-medium mb-3">Choose a Frame</h3>
            <FrameSelector
              currentFrame={currentPhoto.frame}
              onFrameChange={handleFrameChange}
            />
          </div>
          
          <div className="mt-6 flex justify-between">
            <Button
              variant="outline"
              icon={RefreshCcw}
              onClick={() => {
                const originalPhoto = photos[selectedPhotoIndex];
                setCurrentPhoto({...originalPhoto});
                const newPhotos = [...allPhotos];
                newPhotos[selectedPhotoIndex] = originalPhoto;
                setAllPhotos(newPhotos);
              }}
            >
              Reset Changes
            </Button>
            
            <Button
              variant="secondary"
              icon={Download}
              onClick={() => {
                const link = document.createElement('a');
                link.href = currentPhoto.dataUrl;
                link.download = `photo_${selectedPhotoIndex + 1}.jpg`;
                link.click();
              }}
            >
              Download This Photo
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PreviewScreen;