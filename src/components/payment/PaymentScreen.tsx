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
    setSessionPaid, 
    backendConnected,
    settings
  } = usePhotoBooth();
  
  const [showPaymentUI, setShowPaymentUI] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'ghibli'>('basic');
  const [copies, setCopies] = useState(2);
  
  const handleContinue = () => {
    // Update user info with selected package
    setUserInfo({
      ...userInfo,
      copies,
      packageType: selectedPackage
    });
    setShowPaymentUI(true);
  };
  
  const handlePaymentComplete = () => {
    setSessionPaid(true);
    setStage('capture');
  };
  
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  
  // Pricing calculation based on new structure
  const getBasicPrice = (numCopies: number) => {
    switch (numCopies) {
      case 2: return 199;
      case 4: return 299;
      case 6: return 399;
      case 8: return 499;
      case 10: return 599;
      default: return 199;
    }
  };
  
  const getGhibliPrice = (numCopies: number) => {
    const basicPrice = getBasicPrice(numCopies);
    return basicPrice + 50; // Add 50 for Ghibli package
  };
  
  const totalPrice = selectedPackage === 'basic' ? getBasicPrice(copies) : getGhibliPrice(copies);
  
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
        
        {!showPaymentUI ? (
          <div className="space-y-4">
            {/* Package Selection */}
            <Card animate className="w-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ImageIcon className="text-primary" />
                Choose Your Package
              </h3>
              
              {/* Basic Package */}
              <div 
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all mb-4 ${
                  selectedPackage === 'basic' 
                    ? 'border-primary bg-primary/10' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedPackage('basic')}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <Printer className="text-secondary" />
                    Original Photos Package
                  </h4>
                  <span className="text-xl font-bold text-primary">₹{getBasicPrice(copies)}</span>
                </div>
                
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{copies} × Photo strips (4x6 inch each)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Professional 2x6 layout with your 4 photos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>High-quality photo paper printing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Original photos only</span>
                  </div>
                </div>
              </div>
              
              {/* Ghibli Package */}
              <div 
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all mb-4 ${
                  selectedPackage === 'ghibli' 
                    ? 'border-purple-500 bg-purple-500/10' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedPackage('ghibli')}
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    <Sparkles className="text-purple-400" />
                    Original + 2 Ghibli Conversions
                  </h4>
                  <span className="text-xl font-bold text-purple-400">₹{getGhibliPrice(copies)}</span>
                </div>
                
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>{copies} × Photo strips (4x6 inch each)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>Professional 2x6 layout with your 4 photos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>High-quality photo paper printing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>2 FREE Ghibli-style AI conversions</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Number of Copies */}
            <Card animate className="w-full">
              <h3 className="text-lg font-bold mb-4">Number of Copies</h3>
              
              <div className="grid grid-cols-5 gap-2 mb-4">
                {[2, 4, 6, 8, 10].map((copyCount) => (
                  <Button
                    key={copyCount}
                    variant={copies === copyCount ? 'primary' : 'outline'}
                    onClick={() => setCopies(copyCount)}
                    className="text-center"
                  >
                    {copyCount}
                  </Button>
                ))}
              </div>
              
              <div className="bg-gray-800 rounded-lg p-3 text-sm">
                <h4 className="font-medium mb-2">Pricing for {copies} copies:</h4>
                <div className="space-y-1 text-gray-300">
                  <div className="flex justify-between">
                    <span>Original Photos Package:</span>
                    <span className="font-medium">₹{getBasicPrice(copies)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Original + 2 Ghibli Package:</span>
                    <span className="font-medium">₹{getGhibliPrice(copies)}</span>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Order Summary */}
            <Card animate className="w-full">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                    {selectedPackage === 'basic' ? 'Original Photos Package' : 'Original + 2 Ghibli Package'}
                  </span>
                  <span className="font-medium flex items-center">
                    <IndianRupee size={16} className="inline mr-1" /> {totalPrice}
                  </span>
                </div>
                
                <div className="text-sm text-gray-400">
                  <p>• {copies} × 4x6 inch photo strips</p>
                  <p>• 2x6 layout (2 columns × 2 rows)</p>
                  <p>• Professional photo paper</p>
                  {selectedPackage === 'ghibli' && (
                    <p>• 2 Ghibli AI conversions included</p>
                  )}
                </div>
                
                <hr className="border-gray-700" />
                
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="flex items-center text-primary">
                    <IndianRupee size={20} className="inline mr-1" /> {totalPrice}
                  </span>
                </div>
              </div>
              
              {/* Backend Status */}
              <div className={`mt-4 p-3 rounded-lg border ${backendConnected ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
                <div className="flex items-center gap-2">
                  <Server className={backendConnected ? 'text-green-400' : 'text-red-400'} size={16} />
                  <span className={`font-medium ${backendConnected ? 'text-green-400' : 'text-red-400'}`}>
                    Printing Service: {backendConnected ? 'Ready' : 'Offline'}
                  </span>
                </div>
                <p className="text-sm text-gray-300 mt-1">
                  {backendConnected 
                    ? 'FastAPI backend ready for photo strip generation and printing'
                    : 'Backend server required for printing. Please start FastAPI server.'
                  }
                </p>
              </div>
              
              <Button 
                variant="primary" 
                className="w-full mt-6" 
                size="lg"
                onClick={handleContinue}
                disabled={!backendConnected}
              >
                {!backendConnected 
                  ? 'Backend Server Required for Printing' 
                  : 'Continue to Payment'
                }
              </Button>
            </Card>
          </div>
        ) : (
          <MockPaymentUI 
            onPaymentComplete={handlePaymentComplete} 
            amount={totalPrice}
            includesPrint={true}
            copies={copies}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentScreen;