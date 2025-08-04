import React from 'react';

interface FrameSelectorProps {
  currentFrame: string | null;
  onFrameChange: (frame: string | null) => void;
}

// Sample photo for frame preview
const samplePhotoUrl = "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

// Frame URLs - in a real app, these would be actual frame images
const frames = [
  { id: null, name: 'None', url: null },
  { 
    id: 'basic', 
    name: 'Simple Border',
    url: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: 'vintage', 
    name: 'Vintage', 
    url: 'https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: 'holiday', 
    name: 'Celebration', 
    url: 'https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const FrameSelector: React.FC<FrameSelectorProps> = ({ currentFrame, onFrameChange }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {frames.map((frame) => (
        <button
          key={frame.id || 'none'}
          onClick={() => onFrameChange(frame.url)}
          className={`flex flex-col items-center ${
            currentFrame === frame.url ? 'ring-2 ring-primary' : ''
          }`}
        >
          <div className="w-full aspect-square overflow-hidden rounded-md mb-1 border border-gray-700 relative">
            <img 
              src={samplePhotoUrl} 
              alt={frame.name}
              className="w-full h-full object-cover"
            />
            {frame.url && (
              <div className="absolute inset-0">
                <img 
                  src={frame.url} 
                  alt="Frame" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            )}
          </div>
          <span className="text-xs">{frame.name}</span>
        </button>
      ))}
    </div>
  );
};

export default FrameSelector;