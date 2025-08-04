import React, { useState } from 'react';
import { IndianRupee, Check } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface MockPaymentUIProps {
  onPaymentComplete: () => void;
  amount: number;
  includesPrint: boolean;
  copies?: number;
  onCancel?: () => void;
}

const MockPaymentUI: React.FC<MockPaymentUIProps> = ({ 
  onPaymentComplete, 
  amount, 
  includesPrint,
  copies = 1,
  onCancel
}) => {
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = () => {
    setSuccess(true);
    
    // Navigate to next step after success animation
    setTimeout(() => {
      onPaymentComplete();
    }, 1500);
  };
  
  if (success) {
    return (
      <Card animate className="w-full text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center">
            <Check size={40} className="text-success" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
        <p className="text-gray-300 mb-4">
          Payment of <span className="font-bold text-primary">₹{amount}</span> confirmed
        </p>
        <p className="text-gray-300 mb-6">
          {includesPrint 
            ? `Your photos will be ready for download and printing (${copies} copies each)` 
            : 'Your photos are ready for download'
          }
        </p>
        <div className="animate-pulse-light">Redirecting...</div>
      </Card>
    );
  }
  
  return (
    <Card animate className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Payment Required
      </h2>
      
      <div className="bg-gray-900 rounded-lg p-6 mb-6 text-center">
        <div className="text-4xl font-bold text-primary mb-2">
          <IndianRupee size={32} className="inline mr-2" /> {amount}
        </div>
        {includesPrint && copies > 0 && (
          <p className="text-sm text-gray-400">
            Includes physical prints ({copies} copies per photo)
          </p>
        )}
      </div>
      
      <div className="text-center">
        <Button
          variant="primary"
          size="lg"
          className="w-full text-xl py-4 btn-racing"
          onClick={handleSubmit}
        >
          Pay ₹{amount} & Continue
        </Button>
        
        {onCancel && (
          <Button
            variant="outline"
            className="w-full mt-3"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-400 text-center">
        Secure payment processing
      </div>
    </Card>
  );
};

export default MockPaymentUI;