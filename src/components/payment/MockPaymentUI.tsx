// import React, { useState } from 'react';
// import { IndianRupee, Check } from 'lucide-react';
// import Button from '../ui/Button';
// import Card from '../ui/Card';

// interface MockPaymentUIProps {
//   onPaymentComplete: () => void;
//   amount: number;
//   includesPrint: boolean;
//   copies?: number;
//   onCancel?: () => void;
// }

// const MockPaymentUI: React.FC<MockPaymentUIProps> = ({ 
//   onPaymentComplete, 
//   amount, 
//   includesPrint,
//   copies = 1,
//   onCancel
// }) => {
//   const [success, setSuccess] = useState(false);
  
//   const handleSubmit = () => {
//     setSuccess(true);
    
//     // Navigate to next step after success animation
//     setTimeout(() => {
//       onPaymentComplete();
//     }, 1500);
//   };
  
//   if (success) {
//     return (
//       <Card animate className="w-full text-center py-12">
//         <div className="flex justify-center mb-6">
//           <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center">
//             <Check size={40} className="text-success" />
//           </div>
//         </div>
//         <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
//         <p className="text-gray-300 mb-4">
//           Payment of <span className="font-bold text-primary">₹{amount}</span> confirmed
//         </p>
//         <p className="text-gray-300 mb-6">
//           {includesPrint 
//             ? `Your photos will be ready for download and printing (${copies} copies each)` 
//             : 'Your photos are ready for download'
//           }
//         </p>
//         <div className="animate-pulse-light">Redirecting...</div>
//       </Card>
//     );
//   }
  
//   return (
//     <Card animate className="w-full">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Payment Required
//       </h2>
      
//       <div className="bg-gray-900 rounded-lg p-6 mb-6 text-center">
//         <div className="text-4xl font-bold text-primary mb-2">
//           <IndianRupee size={32} className="inline mr-2" /> {amount}
//         </div>
//         {includesPrint && copies > 0 && (
//           <p className="text-sm text-gray-400">
//             Includes physical prints ({copies} copies per photo)
//           </p>
//         )}
//       </div>
      
//       <div className="text-center">
//         <Button
//           variant="primary"
//           size="lg"
//           className="w-full text-xl py-4 btn-racing"
//           onClick={handleSubmit}
//         >
//           Pay ₹{amount} & Continue
//         </Button>
        
//         {onCancel && (
//           <Button
//             variant="outline"
//             className="w-full mt-3"
//             onClick={onCancel}
//           >
//             Cancel
//           </Button>
//         )}
//       </div>

//       <div className="mt-4 text-xs text-gray-400 text-center">
//         Secure payment processing
//       </div>
//     </Card>
//   );
// };

// export default MockPaymentUI;

import React, { useState } from 'react';
import { IndianRupee, Check, CreditCard, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

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

interface RazorpayPaymentUIProps {
  onPaymentComplete: (paymentId: string) => void;
  amount: number;
  includesPrint: boolean;
  copies?: number;
  onCancel?: () => void;
  customerInfo?: {
    name?: string;
    email?: string;
    phone?: string;
  };
  packageType?: string;
}

const RazorpayPaymentUI: React.FC<RazorpayPaymentUIProps> = ({ 
  onPaymentComplete, 
  amount, 
  includesPrint,
  copies = 1,
  onCancel,
  customerInfo,
  packageType = 'Photo Package'
}) => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentId, setPaymentId] = useState('');

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

  const handlePayment = async () => {
    setIsLoading(true);
    setPaymentStatus('processing');
    setErrorMessage('');

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      
      if (!scriptLoaded) {
        throw new Error('Failed to load payment system. Please refresh and try again.');
      }

      // Razorpay payment options
      const options: RazorpayOptions = {
        key: 'rzp_live_RD7Lrg1bezk0F6', // Replace with your test key
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: 'Photo Booth Studio',
        description: `${packageType}${includesPrint ? ` - ${copies} copies` : ''}`,
        image: '', // Add your logo URL here
        handler: function (response: RazorpayResponse) {
          // Payment successful
          console.log('Payment Success:', response);
          setPaymentId(response.razorpay_payment_id);
          setPaymentStatus('success');
          
          // Navigate to next step after success animation
          setTimeout(() => {
            onPaymentComplete(response.razorpay_payment_id);
          }, 1500);
        },
        prefill: {
          name: customerInfo?.name || '',
          email: customerInfo?.email || '',
          contact: customerInfo?.phone || ''
        },
        notes: {
          package: packageType,
          copies: copies.toString(),
          includes_print: includesPrint.toString()
        },
        theme: {
          color: '#6366f1' // Your primary color
        },
        modal: {
          ondismiss: function() {
            setPaymentStatus('idle');
            setIsLoading(false);
            setErrorMessage('Payment cancelled by user');
            console.log('Payment dismissed');
          }
        }
      };

      // Open Razorpay checkout
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error: any) {
      console.error('Payment error:', error);
      setPaymentStatus('failed');
      setErrorMessage(error.message || 'Payment failed. Please try again.');
      setIsLoading(false);
    }
  };

  // Skip payment for testing (only in development)
  const handleMockPayment = () => {
    setPaymentStatus('success');
    setPaymentId('mock_payment_' + Date.now());
    
    setTimeout(() => {
      onPaymentComplete('mock_payment_' + Date.now());
    }, 1500);
  };

  // Success state
  if (paymentStatus === 'success') {
    return (
      <Card animate className="w-full text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center animate-pulse-light">
            <Check size={40} className="text-success" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
        <p className="text-gray-300 mb-4">
          Payment of <span className="font-bold text-primary">₹{amount}</span> confirmed
        </p>
        {paymentId && (
          <p className="text-xs text-gray-400 mb-4">
            Payment ID: {paymentId}
          </p>
        )}
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

  // Main payment UI
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

      {/* Error Message */}
      {errorMessage && paymentStatus === 'failed' && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/20 text-red-400 border border-red-500/50 flex items-start space-x-2">
          <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}
      
      <div className="text-center space-y-3">
        <Button
          variant="primary"
          size="lg"
          className="w-full text-xl py-4 btn-racing"
          onClick={handlePayment}
          disabled={isLoading}
          icon={isLoading ? undefined : CreditCard}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Processing Payment...</span>
            </div>
          ) : (
            `Pay ₹${amount} & Continue`
          )}
        </Button>

        {/* Mock payment for testing */}
        {process.env.NODE_ENV === 'development' && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleMockPayment}
          >
            Skip Payment (Testing)
          </Button>
        )}
        
        {onCancel && (
          <Button
            variant="outline"
            className="w-full"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-400 text-center space-y-1">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-1">
            <CreditCard size={12} />
            <span>Secure payment</span>
          </div>
          <div>•</div>
          <div>Powered by Razorpay</div>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <p className="text-yellow-400">
            Test Mode: Use card 4111 1111 1111 1111, any CVV, future expiry
          </p>
        )}
      </div>
    </Card>
  );
};

export default RazorpayPaymentUI;