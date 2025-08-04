import React, { useState, useRef, useEffect } from 'react';
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
    updateAllPhotos,
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
  const [autoConvertedGhibli, setAutoConvertedGhibli] = useState(false);
  const [showGhibliProcessing, setShowGhibliProcessing] = useState(false);
  const [ghibliProcessingMessage, setGhibliProcessingMessage] = useState('');
  const [inactivityTimer, setInactivityTimer] = useState<NodeJS.Timeout | null>(null);
  const [inactivityCountdown, setInactivityCountdown] = useState(60);
  const [showInactivityWarning, setShowInactivityWarning] = useState(false);
  
  const apiService = ApiService.getInstance();
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  const maxPhotosInStrip = 4;
  
  useEffect(() => {
    // Auto-convert Ghibli photos if user has Ghibli package and photos are marked
    if (userInfo.packageType === 'ghibli' && !autoConvertedGhibli && allPhotos.length > 0) {
      const ghibliReadyPhotos = allPhotos
        .map((photo, index) => ({ photo, index }))
        .filter(({ photo }) => photo.filter === 'ghibli-ready');
      
      if (ghibliReadyPhotos.length > 0) {
        console.log('Auto-converting Ghibli photos:', ghibliReadyPhotos.map(p => p.index));
        setAutoConvertedGhibli(true); // Set this immediately to prevent duplicate calls
        handleAutoGhibliConversion(ghibliReadyPhotos.map(({ index }) => index));
      }
    }
  }, []); // Empty dependency array to run only once on mount
  
  // Inactivity timer - redirect after 1 minute of no interaction
  // useEffect(() => {
  //   const resetInactivityTimer = () => {
  //     if (inactivityTimer) {
  //       clearTimeout(inactivityTimer);
  //     }
      
  //     setShowInactivityWarning(false);
  //     setInactivityCountdown(60);
      
  //     const timer = setTimeout(() => {
  //       setShowInactivityWarning(true);
  //       let countdown = 10;
  //       setInactivityCountdown(countdown);
        
  //       const countdownTimer = setInterval(() => {
  //         countdown--;
  //         setInactivityCountdown(countdown);
          
  //         if (countdown <= 0) {
  //           clearInterval(countdownTimer);
  //           // Auto-advance to delivery
  //           allPhotos.forEach((photo, index) => {
  //             updatePhoto(index, photo);
  //           });
  //           // setStage('delivery');
  //           console.log("Found inactivity")
  //         }
  //       }, 1000);
  //     }, 60000); // 1 minute
      
  //     setInactivityTimer(timer);
  //   };
    
    // Start the timer
    // resetInactivityTimer();
    
    // Add event listeners for user activity
  //   const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
  //   events.forEach(event => {
  //     document.addEventListener(event, resetInactivityTimer, true);
  //   });
    
  //   return () => {
  //     if (inactivityTimer) {
  //       clearTimeout(inactivityTimer);
  //     }
  //     events.forEach(event => {
  //       document.removeEventListener(event, resetInactivityTimer, true);
  //     });
  //   };
  // }, [allPhotos, updatePhoto, setStage]);
  
  const ghibliProcessingMessages = [
    "🎨 We're cooking something magical for you...",
    "✨ Sprinkling some Ghibli fairy dust...",
    "🌟 Transforming your photos into anime art...",
    "🎭 Adding that Studio Ghibli charm...",
    "🦋 Your photos are getting a magical makeover...",
    "🌸 Creating something beautiful just for you...",
    "🎪 The magic is happening behind the scenes...",
    "🎨 Our AI artists are working their magic..."
  ];
  
  const handleAutoGhibliConversion = async (indices: number[]) => {
    setShowGhibliProcessing(true);
    
    // Cycle through cheesy messages
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setGhibliProcessingMessage(ghibliProcessingMessages[messageIndex % ghibliProcessingMessages.length]);
      messageIndex++;
    }, 2000);
    
    try {
      for (const photoIndex of indices) {
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
          console.log(`Updated photo ${photoIndex} to Ghibli style`);
          return newPhotos;
        });
        
        setGhibliPhotos(prev => new Set([...prev, photoIndex]));
      }
      
      setSettings(prev => ({ ...prev, ghibliConversionsUsed: indices.length }));
      console.log('Auto Ghibli conversion complete for indices:', indices);
    } catch (error) {
      console.error('Failed to auto-convert images:', error);
      setGhibliError('Auto Ghibli conversion failed. You can try manual conversion.');
    } finally {
      clearInterval(messageInterval);
      setTimeout(() => {
        setShowGhibliProcessing(false);
        setGhibliProcessingMessage('');
      }, 1000);
    }
  };
  
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
    
    // Check if already at conversion limit
    if (settings.ghibliConversionsUsed >= 2) {
      setGhibliError('You have already used your 2 Ghibli conversions for this session.');
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
      
      setSettings(prev => ({ ...prev, ghibliConversionsUsed: prev.ghibliConversionsUsed + indicesToConvert.length }));
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
    // Update the context with all edited photos at once
    updateAllPhotos(allPhotos);
    
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
                  <h2 className="text-5xl font-bold mb-8 text-center">📸 EDIT PHOTOS</h2>
                  
                  {/* Main photo preview */}
                  <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden mb-6">
                    <img 
                      src={allPhotos[selectedPhotoIndex]?.dataUrl} 
                      alt="Preview" 
                      className={`w-full h-full object-cover ${allPhotos[selectedPhotoIndex]?.filter || 'normal'}`}
                    />
                    
                    {/* Ghibli conversion indicator */}
                    {ghibliPhotos.has(selectedPhotoIndex) && allPhotos[selectedPhotoIndex]?.filter === 'ghibli' && (
                      <div className="absolute top-4 left-4 bg-purple-500/90 px-6 py-3 rounded-full">
                        <span className="text-white text-2xl font-bold flex items-center gap-2">
                          <Sparkles size={14} />
                          ✨ GHIBLI
                        </span>
                      </div>
                    )}
                    
                    {/* Edit button overlay */}
                    <div className="absolute bottom-4 right-4">
                      <Button
                        variant="accent"
                        icon={Edit}
                        onClick={() => handleEditPhoto(selectedPhotoIndex)}
                        className="bg-black/70 hover:bg-black/90 text-xl px-6 py-3"
                      >
                        ✏️ EDIT
                      </Button>
                    </div>
                  </div>
                  
                  {/* Photo Order - Horizontal Line */}
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">
                      <div className="text-3xl font-bold text-center mb-4">
                        📋 PHOTO ORDER ({allPhotos.length}/{maxPhotosInStrip})
                      </div>
                      <div className="text-xl text-center text-gray-400">
                        👆 Touch to select • 🔄 Drag to rearrange
                      </div>
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
                          <div className="absolute top-2 left-2 bg-black/80 text-white text-lg font-bold px-2 py-1 rounded">
                            #{index + 1}
                          </div>
                          
                          {/* Drag handle */}
                          <div className="absolute top-2 right-2 bg-black/80 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            <GripVertical size={16} />
                          </div>
                          
                          {/* Ghibli indicator */}
                          {ghibliPhotos.has(index) && photo.filter === 'ghibli' && (
                            <div className="absolute bottom-2 right-2 bg-purple-500/90 p-1 rounded">
                              <Sparkles size={14} className="text-white" />
                            </div>
                          )}
                          
                          {/* Ghibli Selection Checkbox */}
                          {/* Ghibli Selection Indicator */}
                          {userInfo.packageType === 'ghibli' && !ghibliPhotos.has(index) && settings.ghibliConversionsUsed < 2 && selectedGhibliIndices.has(index) && !autoConvertedGhibli && (
                            <div className="absolute bottom-2 left-2 bg-purple-500/90 p-2 rounded">
                              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                              </div>
                            </div>
                          )}
                          
                          {/* Remove button */}
                          <div className="absolute top-2 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemovePhoto(index);
                              }}
                              className="bg-red-600/90 text-white p-1 rounded hover:bg-red-700/90"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Strip Preview */}
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h3 className="text-3xl font-bold mb-6 text-center">🖨️ FINAL STRIPS</h3>
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
                          <span className="text-gray-500 text-lg font-bold">EMPTY</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-2xl font-bold text-primary mt-4">
                      📄 2 STRIPS • 4×6 INCH
                    </p>
                  </div>
                </Card>
              </div>
              
              {/* Right Side - 30% - Filters and Effects */}
              <div className="w-full h-full" style={{ flex: '0 0 30%' }}>
                <div className="space-y-6">
                  {/* Filter Selector */}
                  <Card animate className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-center">
                      <Palette className="text-accent" />
                      🎨 FILTERS
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: 'normal', label: '📸 ORIGINAL', preview: 'filter: none' },
                        { name: 'grayscale', label: '⚫ BLACK & WHITE', preview: 'filter: grayscale(100%)' },
                        { name: 'sepia', label: '🟤 VINTAGE', preview: 'filter: sepia(80%)' },
                        { name: 'ghibli', label: '✨ GHIBLI', preview: 'filter: brightness(105%) contrast(110%) saturate(140%)' }
                      ].map((filter) => (
                        <button
                          key={filter.name}
                          onClick={() => handleFilterChange(filter.name)}
                          disabled={filter.name === 'ghibli' && !ghibliPhotos.has(selectedPhotoIndex)}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-center ${
                            (allPhotos[selectedPhotoIndex]?.filter || 'normal') === filter.name 
                              ? 'border-primary bg-primary/20' 
                              : 'border-gray-700 hover:border-gray-500 bg-gray-800/50'
                          } ${
                            filter.name === 'ghibli' && !ghibliPhotos.has(selectedPhotoIndex) 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'cursor-pointer'
                          }`}
                        >
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-md overflow-hidden border border-gray-600">
                              <img 
                                src={allPhotos[selectedPhotoIndex]?.dataUrl} 
                                alt={filter.label}
                                className={`w-full h-full object-cover ${filter.name}`}
                                style={{ filter: filter.name === 'ghibli' ? 'brightness(105%) contrast(110%) saturate(140%) hue-rotate(2deg) sepia(20%)' : undefined }}
                              />
                            </div>
                            <div>
                              <div className="font-bold text-white text-lg">{filter.label}</div>
                              {filter.name === 'ghibli' && !ghibliPhotos.has(selectedPhotoIndex) && (
                                <div className="text-sm text-gray-400 font-medium">CONVERT TO UNLOCK</div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </Card>
                  
                  {/* Ghibli Style Conversion - Simplified */}
                  {userInfo.packageType === 'ghibli' && !autoConvertedGhibli && (
                    <Card animate className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-center">
                      <Sparkles className="text-purple-400" />
                      ✨ GHIBLI AI
                    </h3>
                    
                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-4 rounded-lg border border-purple-500/30 text-center">
                          <p className="text-lg font-bold text-purple-200 mb-2">
                            👆 SELECT 2 PHOTOS
                          </p>
                          <p className="text-2xl font-bold text-white">
                            {selectedGhibliIndices.size}/2 SELECTED
                          </p>
                        </div>
                        
                        <Button
                          variant="accent"
                          icon={convertingGhibli ? Loader : Sparkles}
                          onClick={handleGhibliConversion}
                          disabled={convertingGhibli || selectedGhibliIndices.size !== 2 || settings.ghibliConversionsUsed >= 2}
                          className="w-full btn-ultra-neon text-xl py-4"
                        >
                          {convertingGhibli ? (
                            <>
                              <span className="animate-spin mr-2 text-2xl">⟳</span>
                              🎨 CONVERTING...
                            </>
                          ) : (
                            `✨ CONVERT ${selectedGhibliIndices.size} PHOTOS`
                          )}
                        </Button>
                        
                        {ghibliError && (
                          <div className="p-3 bg-red-900/20 border border-red-500/30 rounded text-red-400 text-lg font-bold text-center">
                            {ghibliError}
                          </div>
                        )}
                    </div>
                  </Card>
                  )}
                  
                  {userInfo.packageType !== 'ghibli' && (
                    <Card animate className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-center">
                        <Sparkles className="text-purple-400" />
                        ✨ GHIBLI AI
                      </h3>
                      <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6 border border-purple-400/50">
                        <p className="text-purple-300 mb-4 text-xl font-bold">🎨 UNLOCK GHIBLI!</p>
                        <Button
                          variant="accent"
                          icon={Sparkles}
                          onClick={() => setShowGhibliUpgradePayment(true)}
                          className="w-full btn-ultra-neon text-xl py-4"
                        >
                          ✨ UPGRADE +₹50
                        </Button>
                      </div>
                    </Card>
                  )}
                  
                  {userInfo.packageType === 'ghibli' && autoConvertedGhibli && (
                    <Card animate className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-center">
                        <Sparkles className="text-purple-400" />
                        ✨ GHIBLI AI
                      </h3>
                      <div className="text-center bg-gradient-to-r from-green-900/30 to-purple-900/30 rounded-lg p-6 border border-green-400/50">
                        <div className="text-green-400 mb-3 text-xl font-bold">✅ COMPLETE!</div>
                        <p className="text-lg text-gray-300 mb-4 font-bold">
                          PHOTOS 2 & 4 = GHIBLI ✨
                        </p>
                        <div className="text-lg text-gray-400 font-bold">
                          USED: {settings.ghibliConversionsUsed}/2
                        </div>
                      </div>
                    </Card>
                  )}
                  
                  {/* Photo Actions */}
                  <Card animate className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-center">⚙️ ACTIONS</h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        icon={Edit}
                        onClick={() => handleEditPhoto(selectedPhotoIndex)}
                        className="w-full text-lg py-3"
                      >
                        ✏️ EDIT PHOTO
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
                        className="w-full text-lg py-3"
                      >
                        🔄 RESET ALL
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ghibli Processing Overlay */}
          {showGhibliProcessing && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
              <div className="text-center max-w-md mx-auto p-8">
                {/* Magical Animation */}
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto relative">
                    {/* Outer rotating ring */}
                    <div className="absolute inset-0 border-4 border-purple-400/30 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-purple-400 rounded-full animate-spin"></div>
                    
                    {/* Middle ring */}
                    <div className="absolute inset-4 border-4 border-pink-400/30 rounded-full"></div>
                    <div className="absolute inset-4 border-4 border-transparent border-b-pink-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                    
                    {/* Inner magical core */}
                    <div className="absolute inset-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                      <div className="text-4xl animate-bounce">✨</div>
                    </div>
                    
                    {/* Floating sparkles */}
                    <div className="absolute -top-4 -left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="absolute -top-4 -right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl">🌟</div>
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl">🦋</div>
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '5s' }}>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">🌸</div>
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3.5s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 text-2xl">🎭</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
                    🎨 GHIBLI MAGIC
                  </h2>
                  
                  <div className="text-2xl text-white font-bold animate-pulse">
                    {ghibliProcessingMessage || ghibliProcessingMessages[0]}
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                  
                  <div className="text-xl text-gray-300 mt-6 font-bold">
                    CONVERTING PHOTOS 2 & 4 ✨
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-400/30 mt-6">
                    <div className="text-lg text-purple-200 space-y-2 font-bold">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>✅ PHOTOS 1 & 3: READY</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>🎨 PHOTOS 2 & 4: CONVERTING...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>⏳ AI WORKING...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
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
      
      {/* Inactivity Warning */}
      {/* {showInactivityWarning && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-gray-800 rounded-xl p-8 max-w-md mx-4 text-center border-2 border-yellow-400/50">
            <div className="text-6xl mb-4 animate-bounce">⏰</div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Still there?</h2>
            <p className="text-gray-300 mb-6">
              Auto-continuing to delivery in <span className="font-bold text-yellow-400">{inactivityCountdown}</span> seconds
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowInactivityWarning(false);
                  if (inactivityTimer) {
                    clearTimeout(inactivityTimer);
                  }
                }}
                className="flex-1"
              >
                Keep Editing
              </Button>
              <Button
                variant="primary"
                onClick={handleNext}
                className="flex-1"
              >
                Continue Now
              </Button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default PreviewScreen;