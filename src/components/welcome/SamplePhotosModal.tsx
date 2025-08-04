import React from 'react';
import { X } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface SamplePhotosModalProps {
  onClose: () => void;
}

const SamplePhotosModal: React.FC<SamplePhotosModalProps> = ({ onClose }) => {
  const samplePhotos = [
    {
      url: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      filter: "Original"
    },
    {
      url: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      filter: "Sepia"
    },
    {
      url: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      filter: "B&W"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <Card className="max-w-2xl w-full animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Sample Photos</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {samplePhotos.map((photo, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img 
                src={photo.url} 
                alt={`Sample ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white font-medium">{photo.filter}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            variant="secondary" 
            onClick={onClose}
          >
            Close Gallery
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SamplePhotosModal;