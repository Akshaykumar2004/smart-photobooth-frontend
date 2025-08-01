import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, RefreshCcw, Sparkles, Loader, Edit, Palette, AlertCircle, GripVertical, RotateCcw, Trash2, Plus } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import ProgressBar from '../ui/ProgressBar';
import PhotoEditor from './PhotoEditor';
import FilterSelector from './FilterSelector';
import { ApiService } from '../../utils/apiService';
import MockPaymentUI from '../payment/MockPaymentUI';

const PreviewScreen: React.FC = () => {
  const { 
    setStage, 
    photos, 
    selectedPhotoIndex, 
    setSelectedPhotoIndex,
    updatePhoto,
    settings,
    setSettings,
    swapPhoto,
    removePhoto,
    userInfo,
    setUserInfo
  } = usePhotoBooth();
  
  const [allPhotos, setAllPhotos] = useState([...photos]);
  const [showEditor, setShowEditor] = useState(false);
  const [editingIndex, setEditingIndex] = useState(0);
  const [convertingGhibli, setConvertingGhibli] = useState(false);
  const [ghibliPhotos, setGhibliPhotos] = useState<Set<number>>(new Set());
  const [originalPhotos, setOriginalPhotos] = useState<Map<number, string>>(new Map());
  const [ghibliVersions, setGhibliVersions] = useState<Map<number, string>>(new Map());
  const [ghibliError, setGhibliError] = useState('');
  const [selectedGhibliIndices, setSelectedGhibliIndices] = useState<Set<number>>(new Set());
  const [showGhibliUpgradePayment, setShowGhibliUpgradePayment] = useState(false);
  
  const apiService = ApiService.getInstance();
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  const maxPhotosInStrip = 4;
  
  const handlePhotoSelect = (index: number) => {
    setSelectedPhotoIndex(index);
  };
  
  const handleEditPhoto = (index: number) => {
    setEditingIndex(index);
    setShowEditor(true);
  };
  
  const handleSaveEdit = (editedDataUrl: string) => {
    const newPhotos = [...allPhotos];
    newPhotos[editingIndex] = {
      ...newPhotos[editingIndex],
      dataUrl: editedDataUrl
    };
    setAllPhotos(newPhotos);
    setShowEditor(false);
  };
  
  const handleFilterChange = (filter: string) => {
    const newPhotos = [...allPhotos];
    newPhotos[selectedPhotoIndex] = {
      ...newPhotos[selectedPhotoIndex],
      filter: filter
    };
    setAllPhotos(newPhotos);
  };

  const handleGhibliSelection = (index: number) => {
    setSelectedGhibliIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else if (newSet.size < 2 && !ghibliPhotos.has(index)) {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleGhibliConversion = async () => {
    if (selectedGhibliIndices.size !== 2) {
      setGhibliError('Please select exactly 2 photos for Ghibli conversion.');
      return;
    }
    
    // Check if user has Ghibli package
    if (userInfo.packageType !== 'ghibli') {
      setShowGhibliUpgradePayment(true);
      return;
    }
    
    setConvertingGhibli(true);
    setGhibliError('');
    
    try {
      const indicesToConvert = Array.from(selectedGhibliIndices);
      
      for (const photoIndex of indicesToConvert) {
        const originalPhoto = allPhotos[photoIndex];
        
        // Store original photo data
        if (!originalPhotos.has(photoIndex)) {
          setOriginalPhotos(prev => new Map(prev.set(photoIndex, originalPhoto.dataUrl)));
        }
        
        const convertedDataUrl = await apiService.convertToGhibliStyle(originalPhoto.dataUrl);
        
        // Store the Ghibli version
        setGhibliVersions(prev => new Map(prev.set(photoIndex, convertedDataUrl)));
        
        // Update photos
        setAllPhotos(prevPhotos => {
          const newPhotos = [...prevPhotos];
          newPhotos[photoIndex] = {
            ...newPhotos[photoIndex],
            dataUrl: convertedDataUrl,
            filter: 'ghibli'
          };
          return newPhotos;
        });
        
        setGhibliPhotos(prev => new Set([...prev, photoIndex]));
      }
      
      setSettings(prev => ({ ...prev, ghibliConversionsUsed: 2 }));
      setSelectedGhibliIndices(new Set());
    } catch (error) {
      console.error('Failed to convert images:', error);
      setGhibliError('Ghibli conversion failed. Please try again.');
    } finally {
      setConvertingGhibli(false);
    }
  };

  const handleRemovePhoto = (photoIndex: number) => {
    if (allPhotos.length <= 1) {
      setGhibliError('You need at least one photo for the strip.');
      return;
    }
    
    const newPhotos = allPhotos.filter((_, index) => index !== photoIndex);
    setAllPhotos(newPhotos);
    
    // Update selected photo index
    if (selectedPhotoIndex >= photoIndex && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
    
    setGhibliError('');
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'));
    
    if (dragIndex === dropIndex) return;
    
    const newPhotos = [...allPhotos];
    const draggedPhoto = newPhotos[dragIndex];
    
    newPhotos.splice(dragIndex, 1);
    newPhotos.splice(dropIndex, 0, draggedPhoto);
    
    setAllPhotos(newPhotos);
    setSelectedPhotoIndex(dropIndex);
  };
  
  const handleNext = () => {
    // Update the context with edited photos
    allPhotos.forEach((photo, index) => {
      updatePhoto(index, photo);
    });
    
    setStage('delivery');
  };

  const handleGhibliUpgradePayment = () => {
    setShowGhibliUpgradePayment(false);
    setUserInfo(prev => ({ ...prev, packageType: 'ghibli' }));
    setGhibliError('');
  };

  const getUpgradePrice = () => {
    return 50;
  };

  return (
    <>
      {showGhibliUpgradePayment ? (
        <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
          <div className="w-full max-w-2xl">
            <Card animate className="w-full">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-purple-400" />
                Upgrade to Ghibli Package
              </h2>
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/30 mb-6">
                <p className="text-gray-300 mb-4 text-lg">
                  🎨 Unlock Ghibli AI conversions to transform your photos into beautiful Studio Ghibli artwork!
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>✨ <strong>2 FREE Ghibli conversions</strong></p>
                  <p>🎯 <strong>Mix original and Ghibli photos</strong></p>
                  <p>📸 <strong>All your original photos included</strong></p>
                </div>
              </div>
              <MockPaymentUI 
                onPaymentComplete={handleGhibliUpgradePayment}
                amount={getUpgradePrice()}
                includesPrint={false}
                copies={0}
              />
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowGhibliUpgradePayment(false)}
                  className="border-gray-500 text-gray-400"
                >
                  Continue with Original Package
                </Button>
              </div>
            </Card>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col p-4 animate-fade-in">
          <div className="w-full max-w-7xl mx-auto">
            <ProgressBar steps={steps} currentStep={3} />
            
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
                className="btn-racing"
                onClick={handleNext}
              >
                Continue to Delivery
              </Button>
            </div>
            
            {/* Main Layout: 70% Left, 30% Right */}
            <div className="flex gap-6">
              {/* Left Side - 70% - Edit Your Photos */}
              <div className="flex-1" style={{ flex: '0 0 70%' }}>
                <Card animate className="h-full">
                  <h2 className="text-3xl font-bold mb-6">Edit Your Photos</h2>
                  
                  {/* Main photo preview */}
                  <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden mb-6">
                    <img 
                      src={allPhotos[selectedPhotoIndex]?.dataUrl} 
                      alt="Preview" 
                      className={`w-full h-full object-cover ${allPhotos[selectedPhotoIndex]?.filter || 'normal'}`}
                    />
                    
                    {/* Ghibli conversion indicator */}
                    {ghibliPhotos.has(selectedPhotoIndex) && allPhotos[selectedPhotoIndex]?.filter === 'ghibli' && (
                      <div className="absolute top-4 left-4 bg-purple-500/80 px-3 py-1 rounded-full">
                        <span className="text-white text-sm font-medium flex items-center gap-1">
                          <Sparkles size={14} />
                          Ghibli Style
                        </span>
                      </div>
                    )}
                    
                    {/* Edit button overlay */}
                    <div className="absolute bottom-4 right-4">
                      <Button
                        variant="accent"
                        icon={Edit}
                        onClick={() => handleEditPhoto(selectedPhotoIndex)}
                        className="bg-black/70 hover:bg-black/90"
                      >
                        Edit Photo
                      </Button>
                    </div>
                  </div>
                  
                  {/* Photo Order - Horizontal Line */}
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">
                      Photo Order ({allPhotos.length}/{maxPhotosInStrip}) - Drag to Rearrange
                    </h3>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {allPhotos.map((photo, index) => (
                        <div
                          key={index}
                          draggable
                          onDragStart={(e) => handleDragStart(e, index)}
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, index)}
                          className={`relative group cursor-pointer border-2 rounded-lg overflow-hidden transition-all flex-shrink-0 w-32 h-32 ${
                            selectedPhotoIndex === index ? 'border-primary' : 'border-gray-700'
                          } ${
                            userInfo.packageType === 'ghibli' && !ghibliPhotos.has(index) && settings.ghibliConversionsUsed < 2 && selectedGhibliIndices.has(index) ? 'ring-2 ring-purple-400' : ''
                          }`}
                          onClick={() => {
                            handlePhotoSelect(index);
                            // Handle Ghibli selection on touch/click
                            if (userInfo.packageType === 'ghibli' && !ghibliPhotos.has(index) && settings.ghibliConversionsUsed < 2) {
                              handleGhibliSelection(index);
                            }
                          }}
                        >
                          <img 
                            src={photo.dataUrl} 
                            alt={`Photo ${index + 1}`}
                            className={`w-full h-full object-cover ${photo.filter || 'normal'}`}
                            draggable={false}
                          />
                          
                          {/* Photo number */}
                          <div className="absolute top-1 left-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                            #{index + 1}
                          </div>
                          
                          {/* Drag handle */}
                          <div className="absolute top-1 right-1 bg-black/70 text-white p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            <GripVertical size={10} />
                          </div>
                          
                          {/* Ghibli indicator */}
                          {ghibliPhotos.has(index) && photo.filter === 'ghibli' && (
                            <div className="absolute bottom-1 right-1 bg-purple-500/80 p-0.5 rounded">
                              <Sparkles size={10} className="text-white" />
                            </div>
                          )}
                          
                          {/* Ghibli Selection Checkbox */}
                          {/* Ghibli Selection Indicator */}
                          {userInfo.packageType === 'ghibli' && !ghibliPhotos.has(index) && settings.ghibliConversionsUsed < 2 && selectedGhibliIndices.has(index) && (
                            <div className="absolute bottom-1 left-1 bg-purple-500/90 p-1 rounded">
                              <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                              </div>
                            </div>
                          )}
                          
                          {/* Remove button */}
                          <div className="absolute top-1 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemovePhoto(index);
                              }}
                              className="bg-red-600/80 text-white p-0.5 rounded hover:bg-red-700/90"
                            >
                              <Trash2 size={10} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Strip Preview */}
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h3 className="text-xl font-medium mb-3 text-center">Final Strip Preview</h3>
                    <div className="flex flex-col gap-1 max-w-[200px] mx-auto bg-white p-2 rounded">
                      {allPhotos.map((photo, index) => (
                        <div key={index} className="aspect-[4/3] w-full">
                          <img 
                            src={photo.dataUrl} 
                            alt={`Strip ${index + 1}`}
                            className={`w-full h-full object-cover ${photo.filter || 'normal'}`}
                          />
                        </div>
                      ))}
                      {/* Show empty slots */}
                      {Array.from({ length: maxPhotosInStrip - allPhotos.length }).map((_, index) => (
                        <div key={`empty-${index}`} className="aspect-[4/3] w-full bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500 text-sm">Empty</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-base text-gray-400 mt-2">
                      2 identical strips • 4x6 inches each
                    </p>
                  </div>
                </Card>
              </div>
              
              {/* Right Side - 30% - Filters and Effects */}
              <div className="w-full h-full" style={{ flex: '0 0 30%' }}>
                <div className="space-y-6">
                  {/* Filter Selector */}
                  <Card animate className="flex-1">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Palette className="text-accent" />
                      Filters
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'normal', label: 'Original', preview: 'filter: none' },
                        { name: 'grayscale', label: 'Black & White', preview: 'filter: grayscale(100%)' },
                        { name: 'sepia', label: 'Vintage', preview: 'filter: sepia(80%)' },
                        { name: 'ghibli', label: 'Ghibli Style', preview: 'filter: brightness(105%) contrast(110%) saturate(140%)' }
                      ].map((filter) => (
                        <button
                          key={filter.name}
                          onClick={() => handleFilterChange(filter.name)}
                          disabled={filter.name === 'ghibli' && !ghibliPhotos.has(selectedPhotoIndex)}
                          className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                            (allPhotos[selectedPhotoIndex]?.filter || 'normal') === filter.name 
                              ? 'border-primary bg-primary/20' 
                              : 'border-gray-700 hover:border-gray-500 bg-gray-800/50'
                          } ${
                            filter.name === 'ghibli' && !ghibliPhotos.has(selectedPhotoIndex) 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'cursor-pointer'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-md overflow-hidden border border-gray-600">
                              <img 
                                src={allPhotos[selectedPhotoIndex]?.dataUrl} 
                                alt={filter.label}
                                className={`w-full h-full object-cover ${filter.name}`}
                                style={{ filter: filter.name === 'ghibli' ? 'brightness(105%) contrast(110%) saturate(140%) hue-rotate(2deg) sepia(20%)' : undefined }}
                              />
                            </div>
                            <div>
                              <div className="font-medium text-white">{filter.label}</div>
                              {filter.name === 'ghibli' && !ghibliPhotos.has(selectedPhotoIndex) && (
                                <div className="text-xs text-gray-400">Convert to unlock</div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </Card>
                  
                  {/* Ghibli Style Conversion - Simplified */}
                  <Card animate className="flex-1">
                    <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                      <Sparkles className="text-purple-400" />
                      Ghibli AI
                    </h3>
                    
                    {userInfo.packageType === 'ghibli' ? (
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-3 rounded-lg border border-purple-500/30">
                          <p className="text-sm text-purple-200 mb-1">
                            ✨ Touch 2 photos to select, then convert
                          </p>
                          <p className="text-xs text-gray-400">
                            Selected: {selectedGhibliIndices.size}/2
                          </p>
                        </div>
                        
                        <Button
                          variant="accent"
                          icon={convertingGhibli ? Loader : Sparkles}
                          onClick={handleGhibliConversion}
                          disabled={convertingGhibli || selectedGhibliIndices.size !== 2}
                          className="w-full btn-ultra-neon"
                        >
                          {convertingGhibli ? (
                            <>
                              <span className="animate-spin mr-2">⟳</span>
                              Converting...
                            </>
                          ) : (
                            `✨ Convert ${selectedGhibliIndices.size} Photos`
                          )}
                        </Button>
                        
                        {ghibliError && (
                          <div className="p-2 bg-red-900/20 border border-red-500/30 rounded text-red-400 text-sm">
                            {ghibliError}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-400/50">
                        <p className="text-purple-300 mb-3">🎨 Unlock Ghibli Magic!</p>
                        <Button
                          variant="accent"
                          icon={Sparkles}
                          onClick={() => setShowGhibliUpgradePayment(true)}
                          className="w-full btn-ultra-neon"
                        >
                          ✨ Upgrade (+₹50)
                        </Button>
                      </div>
                    )}
                  </Card>
                  
                  {/* Photo Actions */}
                  <Card animate className="flex-1">
                    <h3 className="text-xl font-medium mb-3">Photo Actions</h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        icon={Edit}
                        onClick={() => handleEditPhoto(selectedPhotoIndex)}
                        className="w-full"
                      >
                        Edit Current Photo
                      </Button>
                      
                      <Button
                        variant="outline"
                        icon={RefreshCcw}
                        onClick={() => {
                          setAllPhotos([...photos]);
                          setGhibliPhotos(new Set());
                          setOriginalPhotos(new Map());
                          setGhibliVersions(new Map());
                          setGhibliError('');
                          setSelectedPhotoIndex(0);
                          setSettings(prev => ({ ...prev, ghibliConversionsUsed: 0 }));
                        }}
                        className="w-full"
                      >
                        Reset All Changes
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          {/* Photo Editor Modal */}
          {showEditor && (
            <PhotoEditor
              imageDataUrl={allPhotos[editingIndex].dataUrl}
              onSave={handleSaveEdit}
              onCancel={() => setShowEditor(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PreviewScreen;