import React, { useState } from 'react';
import { CreditCard, IndianRupee, QrCode, Check, Banknote, Smartphone } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

interface MockPaymentUIProps {
  onPaymentComplete: () => void;
  amount: number;
  includesPrint: boolean;
  copies?: number;
}

const MockPaymentUI: React.FC<MockPaymentUIProps> = ({ 
  onPaymentComplete, 
  amount, 
  includesPrint,
  copies = 1
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cash'>('cash');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  
  const [upiId, setUpiId] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing with different times for different methods
    const processingTime = paymentMethod === 'cash' ? 1000 : paymentMethod === 'upi' ? 1500 : 2000;
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Navigate to next step after success animation
      setTimeout(() => {
        onPaymentComplete();
      }, 1500);
    }, processingTime);
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
          Payment of <span className="font-bold text-primary">₹{amount}</span> received via {paymentMethod.toUpperCase()}
        </p>
        <p className="text-gray-300 mb-6">
          {includesPrint 
            ? `Your photos will be ready for download and printing (${copies} copies each)` 
            : 'Your photos are ready for download'
          }
        </p>
        <div className="animate-pulse-light">Redirecting to delivery...</div>
      </Card>
    );
  }
  
  return (
    <Card animate className="w-full">
      <h2 className="text-2xl font-bold mb-6">
        Payment Details
      </h2>
      
      <div className="bg-gray-900 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total Amount</span>
          <span className="flex items-center text-primary">
            <IndianRupee size={20} className="inline mr-1" /> {amount}
          </span>
        </div>
        {includesPrint && (
          <p className="text-sm text-gray-400 mt-1">
            Includes physical prints ({copies} copies per photo)
          </p>
        )}
      </div>
      
      {/* Payment Method Selection */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <Button
          variant={paymentMethod === 'cash' ? 'primary' : 'outline'}
          className={`flex-1 ${paymentMethod === 'cash' ? '' : 'text-white'}`}
          onClick={() => setPaymentMethod('cash')}
          icon={Banknote}
        >
          Cash
        </Button>
        <Button
          variant={paymentMethod === 'upi' ? 'primary' : 'outline'}
          className={`flex-1 ${paymentMethod === 'upi' ? '' : 'text-white'}`}
          onClick={() => setPaymentMethod('upi')}
          icon={Smartphone}
        >
          UPI
        </Button>
        <Button
          variant={paymentMethod === 'card' ? 'primary' : 'outline'}
          className={`flex-1 ${paymentMethod === 'card' ? '' : 'text-white'}`}
          onClick={() => setPaymentMethod('card')}
          icon={CreditCard}
        >
          Card
        </Button>
      </div>
      
      {/* Payment Method Forms */}
      {paymentMethod === 'cash' && (
        <div className="text-center py-8">
          <div className="inline-block p-6 bg-green-900/20 rounded-full mb-6">
            <Banknote size={64} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-4">Cash Payment</h3>
          <p className="text-gray-300 mb-6">
            Please pay <span className="font-bold text-primary">₹{amount}</span> in cash to the operator
          </p>
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-300">
              💡 <strong>Instructions:</strong>
            </p>
            <ul className="text-sm text-gray-400 mt-2 space-y-1">
              <li>• Hand over exact change if possible</li>
              <li>• Wait for operator confirmation</li>
              <li>• Keep your receipt safe</li>
            </ul>
          </div>
          <Button
            variant="primary"
            className="w-full"
            size="lg"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="animate-spin mr-2">⟳</span>
                Processing Cash Payment...
              </>
            ) : (
              <>
                Confirm Cash Payment of ₹{amount}
              </>
            )}
          </Button>
        </div>
      )}

      {paymentMethod === 'upi' && (
        <div className="space-y-4">
          <div className="text-center">
            <div className="bg-white p-6 rounded-lg inline-block mb-4">
              <QrCode size={180} className="text-gray-900" />
            </div>
            <p className="text-gray-300 mb-2">Scan QR code with any UPI app</p>
            <div className="text-xl font-bold mb-4">
              <IndianRupee size={20} className="inline" /> {amount}.00
            </div>
          </div>
          
          <div className="text-center text-gray-400 text-sm mb-4">OR</div>
          
          <Input
            label="Enter UPI ID"
            placeholder="yourname@paytm / yourname@gpay"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            helperText="Enter your UPI ID to receive payment request"
          />
          
          <div className="bg-gray-800 rounded-lg p-3 text-sm">
            <p className="text-gray-300 mb-2">Popular UPI Apps:</p>
            <div className="flex gap-2 text-xs">
              <span className="bg-blue-600 px-2 py-1 rounded">PhonePe</span>
              <span className="bg-green-600 px-2 py-1 rounded">Google Pay</span>
              <span className="bg-purple-600 px-2 py-1 rounded">Paytm</span>
              <span className="bg-orange-600 px-2 py-1 rounded">BHIM</span>
            </div>
          </div>
          
          <Button
            variant="primary"
            className="w-full"
            size="lg"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="animate-spin mr-2">⟳</span>
                Verifying UPI Payment...
              </>
            ) : (
              <>
                Pay ₹{amount} via UPI
              </>
            )}
          </Button>
        </div>
      )}

      {paymentMethod === 'card' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={cardDetails.number}
            onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
            maxLength={19}
          />
          
          <Input
            label="Cardholder Name"
            placeholder="Name on card"
            value={cardDetails.name}
            onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry Date"
              placeholder="MM/YY"
              value={cardDetails.expiry}
              onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
              maxLength={5}
            />
            
            <Input
              label="CVV"
              placeholder="123"
              type="password"
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
              maxLength={3}
            />
          </div>
          
          <div className="bg-gray-800 rounded-lg p-3 text-sm">
            <p className="text-gray-300 mb-1">Accepted Cards:</p>
            <div className="flex gap-2 text-xs">
              <span className="bg-blue-600 px-2 py-1 rounded">Visa</span>
              <span className="bg-red-600 px-2 py-1 rounded">Mastercard</span>
              <span className="bg-green-600 px-2 py-1 rounded">RuPay</span>
            </div>
          </div>
          
          <div className="mt-6">
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              size="lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="animate-spin mr-2">⟳</span>
                  Processing Card Payment...
                </>
              ) : (
                <>
                  Pay <IndianRupee size={16} className="inline mx-1" />{amount}
                </>
              )}
            </Button>
          </div>
        </form>
      )}
      
      <div className="mt-4 text-xs text-gray-400 text-center">
        This is a demo payment interface for testing purposes.
        <br />
        {paymentMethod === 'cash' && 'Cash payments are handled by the operator.'}
        {paymentMethod === 'upi' && 'UPI payments are processed through secure gateways.'}
        {paymentMethod === 'card' && 'Card payments are encrypted and secure.'}
      </div>
    </Card>
  );
};

export default MockPaymentUI;