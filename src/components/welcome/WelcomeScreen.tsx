import React, { useEffect, useState } from 'react';
import { Camera, IndianRupee, ImageIcon } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import { ApiService } from '../../utils/apiService';
import PriceModal from './PriceModal';
import SamplePhotosModal from './SamplePhotosModal';
import SettingsModal from '../settings/SettingsModal';
import LockScreen from '../security/LockScreen';

const WelcomeScreen: React.FC = () => {
  const { setStage, setIsLocked, isLocked, setBackendConnected } = usePhotoBooth();
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
      
      {/* Random Settings Button */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="outline"
          onClick={handleSettingsClick}
          className="border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-500 text-sm px-2 py-1 opacity-60 hover:opacity-100"
        >
          ⚙️
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
              onClick={() => setStage('payment')}
            >
              Start Session
            </Button>
            
            <div className="text-xs text-gray-500 mt-6 text-center">
              Developed by @akshaykumarbp2004@gmail.com
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
        <LockScreen 
          onUnlock={handleUnlock} 
          onCancel={() => setShowLockScreen(false)}
        />
      )}
      
      {showSettingsModal && (
        <SettingsModal onClose={() => setShowSettingsModal(false)} />
      )}
    </div>
  );
};

export default WelcomeScreen;