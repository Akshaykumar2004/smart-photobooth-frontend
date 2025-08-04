import React, { useState } from 'react';
import { ArrowLeft, IndianRupee, CreditCard, Printer, Server, Sparkles, ImageIcon } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import ProgressBar from '../ui/ProgressBar';
import MockPaymentUI from './MockPaymentUI';

const PaymentScreen: React.FC = () => {
  const { 
    setStage, 
    userInfo, 
    setUserInfo, 
    setSessionPaid
  } = usePhotoBooth();
  
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'ghibli'>('basic');
  const [copies, setCopies] = useState(2);
  
  const handleContinue = () => {
    // Update user info and proceed directly
    setUserInfo({
      ...userInfo,
      copies,
      packageType: selectedPackage
    });
    setSessionPaid(true);
    setStage('capture');
  };
  
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  
  // Simple pricing
  const basicPrice = copies === 2 ? 199 : 299;
  const ghibliPrice = copies === 2 ? 249 : 349;
  const totalPrice = selectedPackage === 'basic' ? basicPrice : ghibliPrice;
  
  return (
    <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in overflow-y-auto">
      <div className="w-full max-w-2xl">
        <ProgressBar steps={steps} currentStep={1} />
        
        <Button 
          variant="outline" 
          icon={ArrowLeft} 
          onClick={() => setStage('welcome')}
          className="mb-4"
        >
          Back to Welcome
        </Button>
        
        <div className="space-y-6">
          {/* Package Selection - Two Big Boxes */}
          <Card animate className="w-full">
            <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Package</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Normal Package */}
              <div 
                className={`p-8 rounded-xl border-4 cursor-pointer transition-all text-center ${
                  selectedPackage === 'basic' 
                    ? 'border-primary bg-primary/20 shadow-lg shadow-primary/30' 
                    : 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
                }`}
                onClick={() => setSelectedPackage('basic')}
              >
                <div className="text-6xl mb-4">📸</div>
                <h3 className="text-2xl font-bold mb-4">Normal</h3>
                <div className="text-3xl font-bold text-primary mb-4">₹{basicPrice}</div>
                <p className="text-gray-300">Original photos with filters</p>
              </div>
              
              {/* Normal + Ghibli Package */}
              <div 
                className={`p-8 rounded-xl border-4 cursor-pointer transition-all text-center ${
                  selectedPackage === 'ghibli' 
                    ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30' 
                    : 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
                }`}
                onClick={() => setSelectedPackage('ghibli')}
              >
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-4">Normal + Ghibli</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">₹{ghibliPrice}</div>
                <p className="text-gray-300">Original + 2 Ghibli AI conversions</p>
              </div>
            </div>
            
            {/* Copies Selection */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-6">Choose Copies</h3>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <Button
                  variant={copies === 2 ? 'primary' : 'outline'}
                  onClick={() => setCopies(2)}
                  className="text-xl py-6"
                  size="lg"
                >
                  2 Copies
                </Button>
                <Button
                  variant={copies === 4 ? 'primary' : 'outline'}
                  onClick={() => setCopies(4)}
                  className="text-xl py-6"
                  size="lg"
                >
                  4 Copies
                </Button>
              </div>
            </div>
            
            {/* Total and Continue */}
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-6">
                Total: ₹{totalPrice}
              </div>
              
              <Button 
                variant="primary" 
                size="lg"
                className="text-xl px-12 py-4 btn-ultra-neon"
                onClick={handleContinue}
              >
                Start Photo Session →
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;