import React, { useState, useEffect } from 'react';

interface CountdownProps {
  seconds: number;
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ seconds, onComplete }) => {
  const [count, setCount] = useState(seconds);
  
  useEffect(() => {
    if (count <= 0) {
      onComplete();
      return;
    }
    
    // Play beep sound (simulated)
    const audio = new Audio();
    
    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [count, onComplete]);
  
  return (
    <div className="absolute inset-0 z-20 bg-black/70 flex items-center justify-center">
      <div className="relative">
        <div 
          className="text-8xl font-bold text-white animate-bounce-slow"
          style={{ textShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }}
        >
          {count}
        </div>
        <div className="absolute -inset-6 rounded-full border-4 border-primary animate-ping"></div>
      </div>
    </div>
  );
};

export default Countdown;