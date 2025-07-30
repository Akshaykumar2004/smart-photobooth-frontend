import React from 'react';
import { X, Camera, Download, ImageIcon, Printer, Banknote, Smartphone, Sparkles, Check, CreditCard } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';

interface PriceModalProps {
  onClose: () => void;
}

const PriceModal: React.FC<PriceModalProps> = ({ onClose }) => {
  const { setStage, settings } = usePhotoBooth();
  
  const handleStartSession = () => {
    onClose();
    setStage('payment');
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
              <h3 className="font-bold text-lg">Complete Photo Experience</h3>
              <span className="text-xl font-bold">₹{settings.pricing.basePackagePrice}</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Camera size={16} className="text-primary" />
                <span>Capture 4 high-quality photos</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-purple-400" />
                <span>Studio Ghibli AI art conversion</span>
              </div>
              <div className="flex items-center gap-2">
                <Printer size={16} className="text-primary" />
                <span>2 × Professional photo strips</span>
              </div>
              <div className="flex items-center gap-2">
                <Download size={16} className="text-green-400" />
                <span>Instant photo editing & filters</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <CreditCard size={16} className="text-blue-400" />
              Quick & Easy Payment:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="bg-green-900/20 p-3 rounded-lg mb-2">
                  <Banknote className="text-green-400 mx-auto" size={24} />
                </div>
                <span className="text-sm text-gray-300 font-medium">Cash Payment</span>
              </div>
              <div className="text-center">
                <div className="bg-blue-900/20 p-3 rounded-lg mb-2">
                  <Smartphone className="text-blue-400 mx-auto" size={24} />
                </div>
                <span className="text-sm text-gray-300 font-medium">UPI/Digital</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Check size={16} className="text-green-400" />
              Everything Included:
            </h4>
            <div className="space-y-1 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>📸 4 professional photos</span>
                <span className="font-medium">✓</span>
              </div>
              <div className="flex justify-between">
                <span>🖨️ 2 × Premium photo strips (4x6")</span>
                <span className="font-medium">✓</span>
              </div>
              <div className="flex justify-between">
                <span>✨ {settings.pricing.freeGhibliConversions} FREE Ghibli AI conversions</span>
                <span className="font-medium">✓</span>
              </div>
              <div className="flex justify-between">
                <span>🎨 Photo filters & editing tools</span>
                <span className="font-medium">✓</span>
              </div>
              <div className="flex justify-between">
                <span>📱 Instant digital delivery</span>
                <span className="font-medium">✓</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-3 rounded-lg border border-green-500/30">
            <p className="text-sm text-green-300 font-medium mb-1">💡 Pro Tip:</p>
            <p className="text-sm text-gray-300">
              Extra copies: +₹{settings.pricing.extraCopyPrice} per 2 additional strips. 
              Extra Ghibli conversions: +₹{settings.pricing.ghibliConversionPrice} each.
            </p>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            Perfect for events, parties, and creating lasting memories! 📷✨
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