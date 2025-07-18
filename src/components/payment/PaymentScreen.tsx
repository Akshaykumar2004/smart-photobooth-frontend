import React, { useState } from 'react';
import { ArrowLeft, IndianRupee, CreditCard, Printer, Server } from 'lucide-react';
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
    shouldPrint, 
    setShouldPrint,
    photos,
    backendConnected
  } = usePhotoBooth();
  
  const [showPaymentUI, setShowPaymentUI] = useState(false);
  
  const handleContinue = () => {
    setShowPaymentUI(true);
  };
  
  const handlePaymentComplete = () => {
    setSessionPaid(true);
    setStage('delivery');
  };
  
  const steps = ['Welcome', 'Capture', 'Preview', 'Payment', 'Delivery'];
  
  // Updated pricing structure
  const digitalPrice = 100; // Base price for digital photos
  const printPricePerCopy = 50; // Price per copy for printing
  const totalPrintPrice = shouldPrint ? printPricePerCopy * userInfo.copies : 0;
  const totalPrice = digitalPrice + totalPrintPrice;
  
  return (
    <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl">
        <ProgressBar steps={steps} currentStep={3} />
        
        <Button 
          variant="outline" 
          icon={ArrowLeft} 
          onClick={() => setStage('preview')}
          className="mb-4"
        >
          Back to Preview
        </Button>
        
        {!showPaymentUI ? (
          <div className="space-y-4">
            {/* Backend Status Warning */}
            {!backendConnected && (
              <Card animate className="w-full">
                <div className="flex items-center gap-3 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                  <Server className="text-yellow-400" size={20} />
                  <div>
                    <h4 className="font-medium text-yellow-400">Backend Server Offline</h4>
                    <p className="text-sm text-gray-300">
                      Printing services are currently unavailable. Digital photos will still be available for download.
                    </p>
                  </div>
                </div>
              </Card>
            )}

            {/* Print Option */}
            <Card animate className="w-full">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Printer className="text-secondary" />
                Print Options
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="print-photos"
                      checked={shouldPrint}
                      onChange={(e) => {
                        setShouldPrint(e.target.checked);
                        if (e.target.checked && userInfo.copies === 0) {
                          setUserInfo({...userInfo, copies: 2});
                        }
                      }}
                      disabled={!backendConnected}
                      className="w-5 h-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2 disabled:opacity-50"
                    />
                    <label htmlFor="print-photos" className="flex items-center gap-2 cursor-pointer">
                      <Printer className="text-secondary" size={20} />
                      <span className="font-medium">Print Physical Photo Strip</span>
                    </label>
                  </div>
                  <span className="font-medium text-secondary">
                    +<IndianRupee size={16} className="inline mr-1" />{printPricePerCopy}/copy
                  </span>
                </div>
                
                {shouldPrint && (
                  <div className="bg-gray-900 rounded-lg p-4 space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      {backendConnected ? (
                        <>
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-success text-sm">Backend Server Ready</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-error rounded-full"></div>
                          <span className="text-error text-sm">Backend Server Offline</span>
                        </>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">
                          Photo Strip Copies
                        </label>
                        <select
                          value={userInfo.copies}
                          onChange={(e) => setUserInfo({...userInfo, copies: parseInt(e.target.value)})}
                          className="input flex-1"
                          disabled={!backendConnected}
                        >
                          <option value={1}>1 strip (₹{1 * printPricePerCopy})</option>
                          <option value={2}>2 strips (₹{2 * printPricePerCopy})</option>
                          <option value={4}>4 strips (₹{4 * printPricePerCopy})</option>
                          <option value={6}>6 strips (₹{6 * printPricePerCopy})</option>
                          <option value={8}>8 strips (₹{8 * printPricePerCopy})</option>
                          <option value={10}>10 strips (₹{10 * printPricePerCopy})</option>
                        </select>
                      </div>
                      
                      <div className="text-sm text-gray-400">
                        <p>Format: 4x6 inch strips</p>
                        <p>Layout: 2 columns × 2 rows</p>
                        <p>Backend: FastAPI + CUPS</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded p-3">
                      <div className="text-sm">
                        <div className="flex justify-between">
                          <span>Photo strips × {userInfo.copies}</span>
                          <span><IndianRupee size={14} className="inline" />{totalPrintPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            
            {/* Pricing Summary */}
            <Card animate className="w-full">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Digital Photos Package ({photos.length} photos)</span>
                  <span className="font-medium flex items-center">
                    <IndianRupee size={16} className="inline mr-1" /> {digitalPrice}
                  </span>
                </div>
                
                {shouldPrint && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      Photo Strips ({userInfo.copies} strips)
                    </span>
                    <span className="font-medium flex items-center">
                      <IndianRupee size={16} className="inline mr-1" /> {totalPrintPrice}
                    </span>
                  </div>
                )}
                
                <hr className="border-gray-700" />
                
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="flex items-center text-primary">
                    <IndianRupee size={20} className="inline mr-1" /> {totalPrice}
                  </span>
                </div>
              </div>
              
              <div className="text-xs text-gray-400 mt-4">
                {shouldPrint 
                  ? `Includes ${photos.length} digital photos + ${userInfo.copies} photo strips (4x6 inch)` 
                  : `Includes ${photos.length} digital photos with filters and frames`
                }
              </div>
              
              <Button 
                variant="primary" 
                className="w-full mt-6" 
                size="lg"
                onClick={handleContinue}
                disabled={shouldPrint && !backendConnected}
              >
                {shouldPrint && !backendConnected 
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
            includesPrint={shouldPrint}
            copies={userInfo.copies}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentScreen;