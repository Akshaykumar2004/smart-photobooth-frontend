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
    
    // Disable browser back button navigation
    const disableBackButton = (e: PopStateEvent) => {
      e.preventDefault();
      window.history.pushState(null, '', window.location.href);
    };
    
    // Disable browser navigation completely
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', disableBackButton);
    
    // Disable touch-based navigation gestures
    const preventTouchNavigation = (e: TouchEvent) => {
      // Prevent swipe back/forward gestures
      if (e.touches.length > 1) return;
      
      const touch = e.touches[0];
      const startX = touch.clientX;
      const screenWidth = window.innerWidth;
      
      // Prevent edge swipes that trigger navigation
      if (startX < 50 || startX > screenWidth - 50) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchstart', preventTouchNavigation, { passive: false });
    
    // Disable keyboard shortcuts that might interfere
    const preventKeyboardNavigation = (e: KeyboardEvent) => {
      // Disable Alt+Left/Right (back/forward)
      if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault();
      }
      // Disable Backspace navigation
      if (e.key === 'Backspace' && e.target === document.body) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('keydown', preventKeyboardNavigation);
    
    return () => {
      window.removeEventListener('popstate', disableBackButton);
      document.removeEventListener('touchstart', preventTouchNavigation);
      document.removeEventListener('keydown', preventKeyboardNavigation);
      if (kioskMode) {
        kioskManager.exitKioskMode();
      }
    };
  }, [kioskMode]);
  
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
  // Add error boundary
  const [hasError, setHasError] = React.useState(false);
  
  React.useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('App error:', error);
      setHasError(true);
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  
  if (hasError) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary px-4 py-2 rounded"
          >
            Reload App
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <PhotoBoothProvider>
      <PhotoBoothApp />
    </PhotoBoothProvider>
  );
}

export default App;