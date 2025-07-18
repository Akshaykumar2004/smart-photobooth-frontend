import React, { useEffect, useState } from 'react';
import { Camera, IndianRupee, ImageIcon, Settings, Lock, Server } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import { ApiService } from '../../utils/apiService';
import PriceModal from './PriceModal';
import SamplePhotosModal from './SamplePhotosModal';
import SettingsModal from '../settings/SettingsModal';
import LockScreen from '../security/LockScreen';

const WelcomeScreen: React.FC = () => {
  const { setStage, setIsLocked, isLocked, backendConnected, setBackendConnected } = usePhotoBooth();
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showSamplesModal, setShowSamplesModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showLockScreen, setShowLockScreen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const apiService = ApiService.getInstance();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    
    // Test backend connection on mount
    testBackendConnection();
    
    return () => clearTimeout(timer);
  }, []);

  const testBackendConnection = async () => {
    try {
      const connected = await apiService.testConnection();
      setBackendConnected(connected);
    } catch (error) {
      console.error('Backend connection test failed:', error);
      setBackendConnected(false);
    }
  };

  const handleSettingsClick = () => {
    setShowLockScreen(true);
  };

  const handleUnlock = () => {
    setShowLockScreen(false);
    setShowSettingsModal(true);
  };

  const handleLockSystem = () => {
    setIsLocked(true);
  };

  if (isLocked) {
    return <LockScreen onUnlock={() => setIsLocked(false)} />;
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
      
      {/* Backend Status Indicator */}
      <div className="absolute top-4 left-4 z-10">
        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
          backendConnected 
            ? 'bg-green-900/20 border-green-500/30 text-green-400' 
            : 'bg-red-900/20 border-red-500/30 text-red-400'
        }`}>
          <Server size={16} />
          <span className="text-sm font-medium">
            Backend: {backendConnected ? 'Connected' : 'Offline'}
          </span>
        </div>
      </div>
      
      {/* Admin Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <Button
          variant="outline"
          icon={Settings}
          onClick={handleSettingsClick}
          className="border-gray-600 text-gray-400 hover:text-white hover:border-white"
        >
          Settings
        </Button>
        <Button
          variant="outline"
          icon={Lock}
          onClick={handleLockSystem}
          className="border-red-600 text-red-400 hover:text-white hover:border-red-400"
        >
          Lock
        </Button>
      </div>
      
      <div className="relative z-10 max-w-lg w-full">
        <Card animate className="text-center">
          <div className="bg-gradient-to-r from-primary/30 to-accent/30 p-6 -mt-6 -mx-6 mb-6 rounded-t-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              📸 Smart Photo Booth
            </h1>
            <p className="text-gray-300">Capture memories in style</p>
          </div>
          
          <div className="space-y-6">
            <Button 
              variant="primary" 
              size="lg"
              icon={Camera}
              className="w-full"
              onClick={() => setStage('capture')}
            >
              Start Session
            </Button>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline"
                icon={IndianRupee}
                onClick={() => setShowPriceModal(true)}
                className="border-primary text-primary hover:bg-primary/10"
              >
                View Pricing
              </Button>
              
              <Button 
                variant="outline"
                icon={ImageIcon}
                onClick={() => setShowSamplesModal(true)}
                className="border-accent text-accent hover:bg-accent/10"
              >
                Sample Photos
              </Button>
            </div>
            
            {!backendConnected && (
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-400 text-sm">
                  ⚠️ Backend server offline. Printing will not be available.
                </p>
              </div>
            )}
            
            <div className="text-xs text-gray-400 mt-4">
              Powered by Smart Booth Technologies
            </div>
          </div>
        </Card>
      </div>
      
      {showPriceModal && (
        <PriceModal onClose={() => setShowPriceModal(false)} />
      )}
      
      {showSamplesModal && (
        <SamplePhotosModal onClose={() => setShowSamplesModal(false)} />
      )}
      
      {showLockScreen && (
        <LockScreen onUnlock={handleUnlock} />
      )}
      
      {showSettingsModal && (
        <SettingsModal onClose={() => setShowSettingsModal(false)} />
      )}
    </div>
  );
};

export default WelcomeScreen;