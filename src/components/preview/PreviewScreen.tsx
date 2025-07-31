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
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedGhibliIndices, setSelectedGhibliIndices] = useState<Set<number>>(new Set());
  const [batchConverting, setBatchConverting] = useState(false);
  const [showGhibliUpgradePayment, setShowGhibliUpgradePayment] = useState(false);
  
  const apiService = ApiService.getInstance();
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  const maxPhotosInStrip = 4; // Maximum photos allowed in the strip
  
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
  
  const handleConvertToGhibli = async (photoIndex: number) => {
    // Check if user has Ghibli package
    if (userInfo.packageType !== 'ghibli') {
      setShowGhibliUpgradePayment(true);
      return;
    }
    
    // For Ghibli package, allow up to 2 conversions
    if (settings.ghibliConversionsUsed >= 2) {
      setGhibliError('You have used all 2 Ghibli conversions included in your package.');
      return;
    }

    setConvertingGhibli(true);
    setGhibliError('');
    try {
      const originalPhoto = allPhotos[photoIndex];
      
      // Store original photo data if not already stored
      if (!originalPhotos.has(photoIndex)) {
        setOriginalPhotos(prev => new Map(prev.set(photoIndex, originalPhoto.dataUrl)));
      }
      
      const convertedDataUrl = await apiService.convertToGhibliStyle(originalPhoto.dataUrl);
      
      // Store the Ghibli version
      setGhibliVersions(prev => new Map(prev.set(photoIndex, convertedDataUrl)));
      
      const newPhotos = [...allPhotos];
      newPhotos[photoIndex] = {
        ...originalPhoto,
        dataUrl: convertedDataUrl,
        filter: 'ghibli'
      };
      setAllPhotos(newPhotos);
      setGhibliPhotos(prev => new Set([...prev, photoIndex]));
      setSettings(prev => ({ ...prev, ghibliConversionsUsed: prev.ghibliConversionsUsed + 1 }));
    } catch (error) {
      console.error('Failed to convert image:', error);
      setGhibliError('We apologize, but the Ghibli style conversion service is temporarily unavailable. Please try again later or continue with your beautiful original photos.');
    } finally {
      setConvertingGhibli(false);
    }
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

  const handleBatchGhibliConversion = async () => {
    if (selectedGhibliIndices.size === 0) return;
    
    // Check if user has Ghibli package
    if (userInfo.packageType !== 'ghibli') {
      setShowGhibliUpgradePayment(true);
      return;
    }
    
    setBatchConverting(true);
    setGhibliError('');
    
    try {
      const indicesToConvert = Array.from(selectedGhibliIndices);
      
      for (const photoIndex of indicesToConvert) {
        if (settings.ghibliConversionsUsed >= 2) break;
        
        const originalPhoto = allPhotos[photoIndex];
        
        // Store original photo data if not already stored
        if (!originalPhotos.has(photoIndex)) {
          setOriginalPhotos(prev => new Map(prev.set(photoIndex, originalPhoto.dataUrl)));
        }
        
        const convertedDataUrl = await apiService.convertToGhibliStyle(originalPhoto.dataUrl);
        
        // Store the Ghibli version
        setGhibliVersions(prev => new Map(prev.set(photoIndex, convertedDataUrl)));
        
        // Update photos while preserving other Ghibli photos
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
        setSettings(prev => ({ ...prev, ghibliConversionsUsed: prev.ghibliConversionsUsed + 1 }));
      }
      
      setSelectedGhibliIndices(new Set());
    } catch (error) {
      console.error('Failed to convert images:', error);
      setGhibliError('Ghibli conversion failed. Please try again.');
    } finally {
      setBatchConverting(false);
    }
  };
  
  const handleSwapToOriginal = (photoIndex: number) => {
    const originalDataUrl = originalPhotos.get(photoIndex);
    if (originalDataUrl) {
      const newPhotos = [...allPhotos];
      newPhotos[photoIndex] = {
        ...newPhotos[photoIndex],
        dataUrl: originalDataUrl,
        filter: 'normal'
      };
      setAllPhotos(newPhotos);
      // Don't remove from ghibliPhotos set - we still have the Ghibli version stored
    }
  };

  const handleSwapToGhibli = (photoIndex: number) => {
    const ghibliDataUrl = ghibliVersions.get(photoIndex);
    if (ghibliDataUrl) {
      const newPhotos = [...allPhotos];
      newPhotos[photoIndex] = {
        ...newPhotos[photoIndex],
        dataUrl: ghibliDataUrl,
        filter: 'ghibli'
      };
      setAllPhotos(newPhotos);
    }
  };

  const handleAddOriginalVersion = (photoIndex: number) => {
    if (allPhotos.length >= maxPhotosInStrip) {
      setGhibliError(`Maximum ${maxPhotosInStrip} photos allowed in the strip. Remove a photo first.`);
      return;
    }

    const originalDataUrl = originalPhotos.get(photoIndex);
    if (originalDataUrl) {
      const originalPhoto = {
        dataUrl: originalDataUrl,
        filter: 'normal',
        frame: null
      };
      
      // Add the original version as a new photo
      setAllPhotos(prev => [...prev, originalPhoto]);
      setGhibliError('');
    }
  };

  const handleAddGhibliVersion = (photoIndex: number) => {
    if (allPhotos.length >= maxPhotosInStrip) {
      setGhibliError(`Maximum ${maxPhotosInStrip} photos allowed in the strip. Remove a photo first.`);
      return;
    }

    const ghibliDataUrl = ghibliVersions.get(photoIndex);
    if (ghibliDataUrl) {
      const ghibliPhoto = {
        dataUrl: ghibliDataUrl,
        filter: 'ghibli',
        frame: null
      };
      
      // Add the Ghibli version as a new photo
      setAllPhotos(prev => [...prev, ghibliPhoto]);
      setGhibliError('');
    }
  };

  const handleRemovePhoto = (photoIndex: number) => {
    if (allPhotos.length <= 1) {
      setGhibliError('You need at least one photo for the strip.');
      return;
    }
    
    const newPhotos = allPhotos.filter((_, index) => index !== photoIndex);
    setAllPhotos(newPhotos);
    
    // Update ghibli photos set
    const newGhibliPhotos = new Set<number>();
    ghibliPhotos.forEach(index => {
      if (index < photoIndex) {
        newGhibliPhotos.add(index);
      } else if (index > photoIndex) {
        newGhibliPhotos.add(index - 1);
      }
    });
    setGhibliPhotos(newGhibliPhotos);
    
    // Update original photos map
    const newOriginalPhotos = new Map<number, string>();
    originalPhotos.forEach((dataUrl, index) => {
      if (index < photoIndex) {
        newOriginalPhotos.set(index, dataUrl);
      } else if (index > photoIndex) {
        newOriginalPhotos.set(index - 1, dataUrl);
      }
    });
    setOriginalPhotos(newOriginalPhotos);
    
    // Update Ghibli versions map
    const newGhibliVersions = new Map<number, string>();
    ghibliVersions.forEach((dataUrl, index) => {
      if (index < photoIndex) {
        newGhibliVersions.set(index, dataUrl);
      } else if (index > photoIndex) {
        newGhibliVersions.set(index - 1, dataUrl);
      }
    });
    setGhibliVersions(newGhibliVersions);
    
    // Adjust selected photo index
    if (selectedPhotoIndex >= photoIndex && selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
    
    // Clear error when photo is removed
    setGhibliError('');
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
  };
  
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };
  
  const handleDragLeave = () => {
    setDragOverIndex(null);
  };
  
  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }
    
    const newPhotos = [...allPhotos];
    const draggedPhoto = newPhotos[draggedIndex];
    
    // Remove the dragged photo
    newPhotos.splice(draggedIndex, 1);
    
    // Insert at new position
    newPhotos.splice(dropIndex, 0, draggedPhoto);
    
    setAllPhotos(newPhotos);
    setSelectedPhotoIndex(dropIndex);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };
  
  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
    setIsDragging(false);
  };
  
  // Touch event handlers for mobile drag and drop
  const handleTouchStart = (e: React.TouchEvent, index: number) => {
    e.preventDefault(); // Prevent scrolling and other touch behaviors
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
    setDraggedIndex(index);
    setIsDragging(true);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartPos || draggedIndex === null) return;
    
    e.preventDefault(); // Prevent scrolling
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartPos.x;
    const deltaY = touch.clientY - touchStartPos.y;
    
    // Only start drag if moved significantly
    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      // Find element under touch point
      const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
      const photoContainer = elementBelow?.closest('[data-photo-index]');
      
      if (photoContainer) {
        const targetIndex = parseInt(photoContainer.getAttribute('data-photo-index') || '0');
        setDragOverIndex(targetIndex);
      }
    }
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    
    if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
      // Perform the drop operation
      const newPhotos = [...allPhotos];
      const draggedPhoto = newPhotos[draggedIndex];
      
      // Remove the dragged photo
      newPhotos.splice(draggedIndex, 1);
      
      // Insert at new position
      newPhotos.splice(dragOverIndex, 0, draggedPhoto);
      
      setAllPhotos(newPhotos);
      setSelectedPhotoIndex(dragOverIndex);
    }
    
    // Reset all drag states
    setTouchStartPos(null);
    setDraggedIndex(null);
    setDragOverIndex(null);
    setIsDragging(false);
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
    // Update user info to Ghibli package
    setUserInfo(prev => ({ ...prev, packageType: 'ghibli' }));
    setGhibliError('');
  };

  // Calculate upgrade price (difference between packages)
  const getUpgradePrice = () => {
    return 50; // Fixed upgrade price for Ghibli features
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
                  <p>🔄 <strong>Switch between versions anytime</strong></p>
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
    <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl">
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
        
        <Card animate className="w-full">
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
          
          {/* Filter Selector */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
              <Palette className="text-accent" />
              Filters
            </h3>
            <FilterSelector 
              currentFilter={allPhotos[selectedPhotoIndex]?.filter || 'normal'}
              onFilterChange={handleFilterChange}
            />
          </div>
          
          {/* Photo arrangement grid */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3">
              Photo Order ({allPhotos.length}/{maxPhotosInStrip}) - Drag to Rearrange
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {allPhotos.map((photo, index) => (
                <div
                  key={index}
                  data-photo-index={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  onTouchStart={(e) => handleTouchStart(e, index)}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  className={`relative group cursor-move border-2 rounded-lg overflow-hidden transition-all ${
                    selectedPhotoIndex === index ? 'border-primary' : 'border-gray-700'
                  } ${draggedIndex === index ? 'opacity-50 scale-95' : ''} ${
                    dragOverIndex === index && draggedIndex !== index ? 'border-accent border-dashed' : ''
                  } ${isDragging ? 'select-none' : ''}`}
                  onClick={() => handlePhotoSelect(index)}
                  style={{
                    touchAction: 'none', // Disable default touch behaviors
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                  }}
                >
                  <img 
                    src={photo.dataUrl} 
                    alt={`Photo ${index + 1}`}
                    className={`w-full aspect-square object-cover ${photo.filter || 'normal'}`}
                    draggable={false} // Prevent image drag
                  />
                  
                  {/* Photo number */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                    #{index + 1}
                  </div>
                  
                  {/* Drag handle */}
                  <div className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    <GripVertical size={12} />
                  </div>
                  
                  {/* Ghibli indicator */}
                  {ghibliPhotos.has(index) && photo.filter === 'ghibli' && (
                    <div className="absolute top-8 right-2 bg-purple-500/80 p-1 rounded">
                      <Sparkles size={12} className="text-white" />
                    </div>
                  )}
                  
                  {/* Ghibli Selection Checkbox */}
                  {userInfo.packageType === 'ghibli' && !ghibliPhotos.has(index) && settings.ghibliConversionsUsed < 2 && (
                    <div 
                      className="absolute top-2 left-8 bg-purple-600/80 p-2 rounded animate-pulse cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGhibliSelection(index);
                      }}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleGhibliSelection(index);
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedGhibliIndices.has(index)}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleGhibliSelection(index);
                        }}
                        disabled={!selectedGhibliIndices.has(index) && selectedGhibliIndices.size >= 2}
                        className="w-6 h-6 text-purple-600 bg-white border-2 border-purple-300 rounded focus:ring-purple-500 focus:ring-2 pointer-events-none"
                        readOnly
                      />
                    </div>
                  )}
                  
                  {/* Ghibli Selection Label */}
                  {userInfo.packageType === 'ghibli' && !ghibliPhotos.has(index) && settings.ghibliConversionsUsed < 2 && (
                    <div 
                      className="absolute bottom-8 left-2 bg-purple-600/90 text-white text-xs px-2 py-1 rounded font-medium cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGhibliSelection(index);
                      }}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleGhibliSelection(index);
                      }}
                    >
                      ✨ Select for Ghibli
                    </div>
                  )}
                  
                  {/* Edit button */}
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditPhoto(index);
                      }}
                      className="bg-black/70 text-white p-1 rounded hover:bg-black/90"
                    >
                      <Edit size={12} />
                    </button>
                  </div>
                  
                  {/* Remove button */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemovePhoto(index);
                      }}
                      className="bg-red-600/80 text-white p-1 rounded hover:bg-red-700/90"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-3 text-base text-gray-400">
              <p>• Click to select • Drag to reorder • Trash icon to remove</p>
            </div>
          </div>
          
          {/* Ghibli Style Conversion */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
              <Sparkles className="text-purple-400" />
              Ghibli AI ({settings.ghibliConversionsUsed}/2 used)
              {userInfo.packageType !== 'ghibli' && (
                <span className="text-base text-orange-400">(Need Ghibli Package)</span>
              )}
            </h3>
            
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border-2 border-purple-500/50 animate-pulse-light">
              {userInfo.packageType === 'ghibli' ? (
                <div className="text-gray-300 mb-4 text-center bg-purple-900/30 rounded-lg p-3 border border-purple-400/30">
                  <p className="mb-2 text-xl font-bold text-purple-300">✨ Ghibli Magic Available!</p>
                  <p className="text-base text-purple-200 mb-2">
                    🎯 <strong>Step 1:</strong> Check boxes on photos you want to convert
                  </p>
                  <p className="text-base text-purple-200">
                    🎨 <strong>Step 2:</strong> Click the glowing convert button below
                  </p>
                </div>
              ) : (
                <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-400/50 mb-4">
                  <p className="text-xl font-bold text-purple-300 mb-2">🎨 Unlock Ghibli Magic!</p>
                  <p className="text-base text-purple-200 mb-3">
                    Transform your photos into beautiful Studio Ghibli artwork
                  </p>
                  <Button
                    variant="accent"
                    icon={Sparkles}
                    onClick={() => setShowGhibliUpgradePayment(true)}
                    className="btn-ultra-neon bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    ✨ Upgrade Now (+₹50)
                  </Button>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Batch Conversion Button */}
                {userInfo.packageType === 'ghibli' && (
                  <Button
                    variant="accent"
                    icon={batchConverting ? Loader : Sparkles}
                    onClick={handleBatchGhibliConversion}
                    disabled={batchConverting || selectedGhibliIndices.size === 0 || settings.ghibliConversionsUsed >= 2}
                    className="col-span-full sm:col-span-2 btn-ultra-neon text-lg font-bold"
                  >
                    {batchConverting ? (
                      <>
                        <span className="animate-spin mr-2">⟳</span>
                        🎨 Converting {selectedGhibliIndices.size} photos to Ghibli...
                      </>
                    ) : (
                      `✨ Convert ${selectedGhibliIndices.size} Photos to Ghibli Style`
                    )}
                  </Button>
                )}
                
                {/* Upgrade to Ghibli Button for Basic Package Users */}
                {userInfo.packageType === 'basic' && (
                  <Button
                    variant="accent"
                    icon={Sparkles}
                    onClick={() => setShowGhibliUpgradePayment(true)}
                    className="col-span-full btn-ultra-neon text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    ✨ Upgrade to Ghibli Package (+₹50)
                  </Button>
                )}
                
                <Button
                  variant="accent"
                  icon={convertingGhibli ? Loader : Sparkles}
                  onClick={() => handleConvertToGhibli(selectedPhotoIndex)}
                  disabled={convertingGhibli || batchConverting || ghibliPhotos.has(selectedPhotoIndex) || settings.ghibliConversionsUsed >= 2 || userInfo.packageType !== 'ghibli'}
                  className="btn-racing"
                >
                  {convertingGhibli ? (
                    <>
                      <span className="animate-spin mr-2">⟳</span>
                      🎨 Converting... (30-60s)
                    </>
                  ) : ghibliPhotos.has(selectedPhotoIndex) ? (
                    allPhotos[selectedPhotoIndex]?.filter === 'ghibli' ? '✅ Using Ghibli' : '🔄 Switch to Ghibli'
                  ) : userInfo.packageType !== 'ghibli' ? (
                    '🔒 Upgrade to Ghibli'
                  ) : settings.ghibliConversionsUsed >= 2 ? (
                    '🚫 All Conversions Used'
                  ) : (
                    '✨ Convert Current Photo'
                  )}
                </Button>
                
                {ghibliPhotos.has(selectedPhotoIndex) && allPhotos[selectedPhotoIndex]?.filter === 'ghibli' && (
                  <Button
                    variant="outline"
                    icon={RotateCcw}
                    onClick={() => handleSwapToOriginal(selectedPhotoIndex)}
                    className="border-orange-500 text-orange-400 hover:bg-orange-500/10"
                  >
                    🔄 Use Original
                  </Button>
                )}
                
                {ghibliPhotos.has(selectedPhotoIndex) && allPhotos[selectedPhotoIndex]?.filter === 'normal' && (
                  <Button
                    variant="accent"
                    icon={Sparkles}
                    onClick={() => handleSwapToGhibli(selectedPhotoIndex)}
                    className="bg-purple-600 hover:bg-purple-700 btn-racing"
                  >
                    ✨ Use Ghibli Version
                  </Button>
                )}
                
                {/* Add Original Version Button */}
                {ghibliPhotos.has(selectedPhotoIndex) && allPhotos[selectedPhotoIndex]?.filter === 'ghibli' && (
                  <Button
                    variant="outline"
                    icon={Plus}
                    onClick={() => handleAddOriginalVersion(selectedPhotoIndex)}
                    disabled={allPhotos.length >= maxPhotosInStrip}
                    className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                  >
                    ➕ Add Original Too
                  </Button>
                )}
                
                {/* Add Ghibli Version Button */}
                {ghibliPhotos.has(selectedPhotoIndex) && allPhotos[selectedPhotoIndex]?.filter === 'normal' && (
                  <Button
                    variant="outline"
                    icon={Plus}
                    onClick={() => handleAddGhibliVersion(selectedPhotoIndex)}
                    disabled={allPhotos.length >= maxPhotosInStrip}
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  >
                    ✨ Add Ghibli Too
                  </Button>
                )}
                
              </div>
              
              {/* Ghibli Error Message */}
              {ghibliError && (
                <div className="mt-3 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-red-400 mt-0.5" size={16} />
                    <div>
                      <p className="text-red-400 text-sm font-medium mb-1">
                        {ghibliError.includes('Maximum') ? 'Strip Full' : 'Conversion Service Unavailable'}
                      </p>
                      <p className="text-gray-300 text-sm">{ghibliError}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {ghibliPhotos.size > 0 && (
                <div className="mt-3 text-sm text-purple-300">
                  ✨ {ghibliPhotos.size} Ghibli photos ready
                </div>
              )}
              
              {userInfo.packageType === 'ghibli' && (
                <div className="mt-2 text-sm text-gray-400 text-center">
                  Takes 30-60 seconds per photo
                </div>
              )}
              
              {selectedGhibliIndices.size > 0 && (
                <div className="mt-3 p-3 bg-purple-900/30 border border-purple-400/50 rounded-lg animate-pulse-light">
                  <div className="text-center">
                    <p className="text-lg font-bold text-purple-300 mb-1">
                      🎯 {selectedGhibliIndices.size} Photos Ready for Ghibli Magic!
                    </p>
                    <p className="text-base text-purple-200">
                      Click the glowing "Convert" button above to transform them ✨
                    </p>
                  </div>
                </div>
              )}
              
              {selectedGhibliIndices.size === 2 && settings.ghibliConversionsUsed === 0 && (
                <div className="mt-3 p-3 bg-green-900/30 border border-green-400/50 rounded-lg">
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-300">
                      🎉 Perfect! Ready to use all your Ghibli conversions!
                    </p>
                  </div>
                </div>
              )}
              
              {selectedGhibliIndices.size > (2 - settings.ghibliConversionsUsed) && (
                <div className="mt-3 p-3 bg-orange-900/30 border border-orange-400/50 rounded-lg">
                  <div className="text-center">
                    <p className="text-lg font-bold text-orange-300">
                      ⚠️ You can only convert {2 - settings.ghibliConversionsUsed} more photos
                    </p>
                    <p className="text-base text-orange-200">
                      Uncheck some photos to proceed
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Ghibli Selection Instructions */}
          {userInfo.packageType === 'ghibli' && settings.ghibliConversionsUsed < 2 && (
            <div className="mb-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-2 border-purple-400/50 rounded-lg p-4 animate-pulse-light">
              <div className="text-center">
                <h4 className="text-lg font-bold text-purple-300 mb-2">🎯 How to Use Ghibli Magic:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-base text-gray-300">
                  <div className="bg-purple-800/30 p-3 rounded-lg">
                    <p className="font-medium text-purple-200">Step 1</p>
                    <p>✅ Check photos you want</p>
                  </div>
                  <div className="bg-purple-800/30 p-3 rounded-lg">
                    <p className="font-medium text-purple-200">Step 2</p>
                    <p>🎨 Click glowing convert button</p>
                  </div>
                  <div className="bg-purple-800/30 p-3 rounded-lg">
                    <p className="font-medium text-purple-200">Step 3</p>
                    <p>🔄 Add both versions if needed</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
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
          
          {/* Reset button - only show for basic package users */}
          {userInfo.packageType === 'basic' && (
            <div className="mt-6">
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
            >
              Reset All Changes
            </Button>
            </div>
          )}
        </Card>
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