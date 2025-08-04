import React, { useState, useEffect } from 'react';

interface CountdownProps {
  seconds: number;
  onComplete: () => void;
  photoIndex: number;
  isGhibliMode: boolean;
}

const Countdown: React.FC<CountdownProps> = ({ seconds, onComplete, photoIndex, isGhibliMode }) => {
  const [count, setCount] = useState(seconds);
  const [phase, setPhase] = useState<'message' | 'countdown' | 'ready' | 'capture'>('message');
  const [messageIndex, setMessageIndex] = useState(0);
  
  // Cheesy messages for all age groups
  const cheerfulMessages = [
    "Smile please! 😊",
    "Say cheese! 🧀",
    "Show me that beautiful smile! ✨",
    "Ready to shine? 🌟",
    "Let's capture some magic! 🎭",
    "Time to sparkle! ✨",
    "Give me your best pose! 📸",
    "You look amazing! 💫",
    "Strike a pose! 🕺",
    "Show me those pearly whites! 😁",
    "Ready for some fun? 🎉",
    "Let's make memories! 💝"
  ];
  
  // Ghibli-specific messages
  const ghibliMessages = [
    "Channel your inner Totoro! 🌳",
    "Feel the magic of Ghibli! ✨",
    "Let the forest spirits guide you! 🧚‍♀️",
    "Embrace the Ghibli magic! 🎭",
    "Time for some anime magic! ⭐",
    "Ready for your Ghibli transformation! 🦋"
  ];
  
  const getCurrentMessage = () => {
    if (isGhibliMode && (photoIndex === 0 || photoIndex === 2)) {
      // Normal photos in Ghibli mode (1st and 3rd)
      return cheerfulMessages[messageIndex % cheerfulMessages.length];
    } else if (isGhibliMode && (photoIndex === 1 || photoIndex === 3)) {
      // Ghibli photos (2nd and 4th)
      return ghibliMessages[messageIndex % ghibliMessages.length];
    } else {
      // Normal photos
      return cheerfulMessages[messageIndex % cheerfulMessages.length];
    }
  };
  
  useEffect(() => {
    // Initialize random message
    setMessageIndex(Math.floor(Math.random() * cheerfulMessages.length));
    
    // Phase 1: Show cheery message for 3 seconds
    const messageTimer = setTimeout(() => {
      setPhase('countdown');
      setCount(3); // Start 3-2-1 countdown
    }, 3000);
    
    return () => clearTimeout(messageTimer);
  }, []);
  
  useEffect(() => {
    if (phase === 'countdown') {
      if (count <= 0) {
        setPhase('ready');
        // Show "Ready" for 500ms
        setTimeout(() => {
          setPhase('capture');
          // Show "Capture" for 500ms then complete
          setTimeout(() => {
            onComplete();
          }, 500);
        }, 500);
        return;
      }
      
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [count, phase, onComplete]);
  
  const renderContent = () => {
    switch (phase) {
      case 'message':
        return (
          <div className="text-center">
            <div className="text-6xl mb-6 animate-bounce">
              {isGhibliMode && (photoIndex === 1 || photoIndex === 3) ? '✨' : '😊'}
            </div>
            <div className="text-4xl font-bold text-white mb-4 animate-pulse">
              {getCurrentMessage()}
            </div>
            <div className="text-xl text-yellow-400">
              Get ready in 3 seconds...
            </div>
          </div>
        );
      
      case 'countdown':
        return (
          <div className="text-center">
            <div 
              className="text-8xl font-bold text-white animate-bounce-slow"
              style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
            >
              {count}
            </div>
            <div className="text-2xl text-gray-300 mt-4">
              {count === 3 ? 'Get ready...' : count === 2 ? 'Almost there...' : 'Here we go!'}
            </div>
          </div>
        );
      
      case 'ready':
        return (
          <div className="text-center">
            <div className="text-6xl font-bold text-green-400 animate-pulse">
              READY!
            </div>
            <div className="text-xl text-green-300 mt-2">
              Hold your pose...
            </div>
          </div>
        );
      
      case 'capture':
        return (
          <div className="text-center">
            <div className="text-6xl font-bold text-yellow-400 animate-ping">
              📸 CAPTURE!
            </div>
            <div className="text-xl text-yellow-300 mt-2">
              Perfect!
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="absolute inset-0 z-20 bg-black/70 flex items-center justify-center">
      <div className="relative">
        {renderContent()}
        {phase === 'countdown' && (
          <div className="absolute -inset-6 rounded-full border-4 border-primary animate-ping"></div>
        )}
      </div>
    </div>
  );
};

export default Countdown;