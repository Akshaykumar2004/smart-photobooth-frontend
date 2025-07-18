import React from 'react';
import { X, Camera, Download, ImageIcon, Printer, Banknote, Smartphone, CreditCard } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';

interface PriceModalProps {
  onClose: () => void;
}

const PriceModal: React.FC<PriceModalProps> = ({ onClose }) => {
  const { setStage } = usePhotoBooth();
  
  const handleStartSession = () => {
    onClose();
    setStage('capture');
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <Card className="max-w-lg w-full animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Pricing Information</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Digital Package</h3>
              <span className="text-xl font-bold">₹100</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Camera size={16} className="text-primary" />
                <span>Capture up to 4 photos</span>
              </div>
              <div className="flex items-center gap-2">
                <ImageIcon size={16} className="text-primary" />
                <span>Professional filters and frames</span>
              </div>
              <div className="flex items-center gap-2">
                <Download size={16} className="text-primary" />
                <span>High-quality digital downloads</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-secondary/20 to-accent/20 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Print Add-on</h3>
              <span className="text-xl font-bold">₹50/copy</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Printer size={16} className="text-secondary" />
                <span>High-quality photo prints</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-secondary/30 rounded-full flex items-center justify-center text-xs">4x6</span>
                <span>Professional photo paper</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium mb-3">Payment Methods:</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="bg-green-900/20 p-3 rounded-lg mb-2">
                  <Banknote className="text-green-400 mx-auto" size={24} />
                </div>
                <span className="text-sm text-gray-300">Cash</span>
              </div>
              <div className="text-center">
                <div className="bg-blue-900/20 p-3 rounded-lg mb-2">
                  <Smartphone className="text-blue-400 mx-auto" size={24} />
                </div>
                <span className="text-sm text-gray-300">UPI</span>
              </div>
              <div className="text-center">
                <div className="bg-purple-900/20 p-3 rounded-lg mb-2">
                  <CreditCard className="text-purple-400 mx-auto" size={24} />
                </div>
                <span className="text-sm text-gray-300">Card</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium mb-2">Popular Combinations:</h4>
            <div className="space-y-1 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Digital Only (4 photos)</span>
                <span className="font-medium">₹100</span>
              </div>
              <div className="flex justify-between">
                <span>Digital + 2 copies each</span>
                <span className="font-medium">₹500</span>
              </div>
              <div className="flex justify-between">
                <span>Digital + 4 copies each</span>
                <span className="font-medium">₹900</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            All prices include taxes. Multiple payment options available for your convenience.
          </p>
        </div>
        
        <div className="mt-6">
          <Button 
            variant="primary" 
            className="w-full"
            onClick={handleStartSession}
          >
            Start Session Now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PriceModal;