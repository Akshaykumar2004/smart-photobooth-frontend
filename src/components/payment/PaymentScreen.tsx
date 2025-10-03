// import React, { useState } from 'react';
// import { ArrowLeft, IndianRupee, CreditCard, Printer, Server, Sparkles, ImageIcon } from 'lucide-react';
// import Button from '../ui/Button';
// import Card from '../ui/Card';
// import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
// import ProgressBar from '../ui/ProgressBar';
// import MockPaymentUI from './MockPaymentUI';

// const PaymentScreen: React.FC = () => {
//   const { 
//     setStage, 
//     userInfo, 
//     setUserInfo, 
//     setSessionPaid
//   } = usePhotoBooth();
  
//   const [selectedPackage, setSelectedPackage] = useState<'basic' | 'ghibli'>('basic');
//   const [copies, setCopies] = useState(2);
  
//   const handleContinue = () => {
//     // Update user info and proceed directly
//     setUserInfo({
//       ...userInfo,
//       copies,
//       packageType: selectedPackage
//     });
//     setSessionPaid(true);
//     setStage('capture');
//   };
  
//   const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  
//   // Simple pricing
//   const basicPrice = copies === 2 ? 199 : 299;
//   const ghibliPrice = copies === 2 ? 249 : 349;
//   const totalPrice = selectedPackage === 'basic' ? basicPrice : ghibliPrice;
  
//   return (
//     <div className="min-h-screen flex flex-col items-center p-4 animate-fade-in overflow-y-auto">
//       <div className="w-full max-w-2xl">
//         <ProgressBar steps={steps} currentStep={1} />
        
//         <Button 
//           variant="outline" 
//           icon={ArrowLeft} 
//           onClick={() => setStage('welcome')}
//           className="mb-4"
//         >
//           Back to Welcome
//         </Button>
        
//         <div className="space-y-6">
//           {/* Package Selection - Two Big Boxes */}
//           <Card animate className="w-full">
//             <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Package</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {/* Normal Package */}
//               <div 
//                 className={`p-8 rounded-xl border-4 cursor-pointer transition-all text-center ${
//                   selectedPackage === 'basic' 
//                     ? 'border-primary bg-primary/20 shadow-lg shadow-primary/30' 
//                     : 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
//                 }`}
//                 onClick={() => setSelectedPackage('basic')}
//               >
//                 <div className="text-6xl mb-4">📸</div>
//                 <h3 className="text-2xl font-bold mb-4">Normal</h3>
//                 <div className="text-3xl font-bold text-primary mb-4">₹{basicPrice}</div>
//                 <p className="text-gray-300">Original photos with filters</p>
//               </div>
              
//               {/* Normal + Ghibli Package */}
//               <div 
//                 className={`p-8 rounded-xl border-4 cursor-pointer transition-all text-center ${
//                   selectedPackage === 'ghibli' 
//                     ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/30' 
//                     : 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
//                 }`}
//                 onClick={() => setSelectedPackage('ghibli')}
//               >
//                 <div className="text-6xl mb-4">✨</div>
//                 <h3 className="text-2xl font-bold mb-4">Normal + Ghibli</h3>
//                 <div className="text-3xl font-bold text-purple-400 mb-4">₹{ghibliPrice}</div>
//                 <p className="text-gray-300">Original + 2 Ghibli AI conversions</p>
//               </div>
//             </div>
            
//             {/* Copies Selection */}
//             <div className="text-center mb-8">
//               <h3 className="text-2xl font-bold mb-6">Choose Copies</h3>
//               <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
//                 <Button
//                   variant={copies === 2 ? 'primary' : 'outline'}
//                   onClick={() => setCopies(2)}
//                   className="text-xl py-6"
//                   size="lg"
//                 >
//                   2 Copies
//                 </Button>
//                 <Button
//                   variant={copies === 4 ? 'primary' : 'outline'}
//                   onClick={() => setCopies(4)}
//                   className="text-xl py-6"
//                   size="lg"
//                 >
//                   4 Copies
//                 </Button>
//               </div>
//             </div>
            
//             {/* Total and Continue */}
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary mb-6">
//                 Total: ₹{totalPrice}
//               </div>
              
//               <Button 
//                 variant="primary" 
//                 size="lg"
//                 className="text-xl px-12 py-4 btn-ultra-neon"
//                 onClick={handleContinue}
//               >
//                 Start Photo Session →
//               </Button>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentScreen;

import React, { useState } from 'react';
import { ArrowLeft, IndianRupee, CreditCard, Printer, Server, Sparkles, Image as ImageIcon } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import ProgressBar from '../ui/ProgressBar';

// Type definitions for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

const PaymentScreen: React.FC = () => {
  const { 
    setStage, 
    userInfo, 
    setUserInfo, 
    setSessionPaid
  } = usePhotoBooth();
  
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'ghibli'>('basic');
  const copies = 1; // Fixed to 1 copy
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string>('');

  // Load Razorpay script dynamically
  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      // Check if script is already loaded
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Process payment with Razorpay
  const processPayment = async () => {
    setIsProcessingPayment(true);
    setPaymentStatus('');

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      
      if (!scriptLoaded) {
        setPaymentStatus('Failed to load payment system. Please refresh and try again.');
        setIsProcessingPayment(false);
        return;
      }

      // Calculate total - single copy pricing
      const basicPrice = 199;
      const ghibliPrice = 249;
      const totalPrice = selectedPackage === 'basic' ? basicPrice : ghibliPrice;

      // Razorpay payment options
      const options: RazorpayOptions = {
        key: 'rzp_live_RD7Lrg1bezk0F6', // Replace with your test key
        amount: totalPrice * 100, // Amount in paise
        currency: 'INR',
        name: 'Photo Booth Studio',
        description: `${selectedPackage === 'basic' ? 'Normal' : 'Normal + Ghibli'} Package - 1 Copy`,
        image: '', // Add your logo URL here
        handler: function (response: RazorpayResponse) {
          // Payment successful
          console.log('Payment Success:', response);
          
          // Update user info with payment details
          setUserInfo({
            ...userInfo,
            copies,
            packageType: selectedPackage,
            paymentId: response.razorpay_payment_id,
            paidAmount: totalPrice
          });
          
          setSessionPaid(true);
          setPaymentStatus('Payment successful! Starting your photo session...');
          
          // Proceed to capture after a brief delay
          setTimeout(() => {
            setStage('capture');
          }, 2000);
        },
        prefill: {
          name: userInfo?.name || '',
          email: userInfo?.email || '',
          contact: userInfo?.phone || ''
        },
        notes: {
          package: selectedPackage,
          copies: copies.toString(),
          session_type: 'photo_booth'
        },
        theme: {
          color: '#6366f1' // Your primary color
        },
        modal: {
          ondismiss: function() {
            setPaymentStatus('Payment cancelled. Please try again to proceed.');
            setIsProcessingPayment(false);
            console.log('Payment dismissed');
          }
        }
      };

      // Open Razorpay checkout
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('Payment failed. Please try again.');
      setIsProcessingPayment(false);
    }
  };

  // Skip payment for testing (optional - you can remove this)
  const handleSkipPayment = () => {
    setUserInfo({
      ...userInfo,
      copies,
      packageType: selectedPackage,
      paymentId: 'test_payment_' + Date.now(),
      paidAmount: 0
    });
    setSessionPaid(true);
    setStage('capture');
  };
  
  const steps = ['Welcome', 'Payment', 'Capture', 'Preview', 'Delivery'];
  
  // Simple pricing - single copy only
  const basicPrice = 199;
  const ghibliPrice = 249;
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
            
            
            {/* Payment Status */}
            {paymentStatus && (
              <div className={`mb-6 p-4 rounded-lg text-center ${
                paymentStatus.includes('successful') 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                  : paymentStatus.includes('cancelled') || paymentStatus.includes('failed')
                  ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
              }`}>
                <p className="font-medium">{paymentStatus}</p>
              </div>
            )}
            
            {/* Total and Payment Button */}
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-6">
                Total: ₹{totalPrice}
              </div>
              
              <div className="space-y-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="text-xl px-12 py-4 btn-ultra-neon w-full"
                  onClick={processPayment}
                  disabled={isProcessingPayment}
                  icon={isProcessingPayment ? undefined : CreditCard}
                >
                  {isProcessingPayment ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing Payment...</span>
                    </div>
                  ) : (
                    `Pay ₹${totalPrice} & Start Session`
                  )}
                </Button>
                
                {/* Optional: Skip payment for testing */}
                {process.env.NODE_ENV === 'development' && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-sm"
                    onClick={handleSkipPayment}
                  >
                    Skip Payment (Testing)
                  </Button>
                )}
              </div>
            </div>
          </Card>

          {/* Payment Info */}
          <Card className="text-center text-sm text-gray-400">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                <CreditCard size={16} />
                <span>Secure Payment</span>
              </div>
              <div>•</div>
              <div>Powered by Razorpay</div>
            </div>
            <p className="mt-2 text-xs">
              Test Mode: Use card 4111 1111 1111 1111, any CVV, future expiry
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;