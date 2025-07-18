import React, { useEffect } from 'react';
import { PhotoBoothProvider, usePhotoBooth } from './contexts/PhotoBoothContext';
import WelcomeScreen from './components/welcome/WelcomeScreen';
import CaptureScreen from './components/capture/CaptureScreen';
import PreviewScreen from './components/preview/PreviewScreen';
import PaymentScreen from './components/payment/PaymentScreen';
import DeliveryScreen from './components/delivery/DeliveryScreen';
import { KioskModeManager } from './utils/kioskMode';
import './utils/filters.css';

const PhotoBoothApp: React.FC = () => {
  const { stage, kioskMode } = usePhotoBooth();
  
  useEffect(() => {
    const kioskManager = KioskModeManager.getInstance();
    
    // Initialize kiosk mode on app start for production
    if (process.env.NODE_ENV === 'production') {
      kioskManager.enterKioskMode();
    }
    
    // Prevent browser navigation
    window.history.pushState(null, '', window.location.href);
    
    return () => {
      if (kioskMode) {
        kioskManager.exitKioskMode();
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900">
      {stage === 'welcome' && <WelcomeScreen />}
      {stage === 'capture' && <CaptureScreen />}
      {stage === 'preview' && <PreviewScreen />}
      {stage === 'payment' && <PaymentScreen />}
      {stage === 'delivery' && <DeliveryScreen />}
    </div>
  );
};

function App() {
  return (
    <PhotoBoothProvider>
      <PhotoBoothApp />
    </PhotoBoothProvider>
  );
}

export default App;