import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';

interface LockScreenProps {
  onUnlock: () => void;
  onCancel?: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock, onCancel }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  
  // Simple password for admin access
  const ADMIN_PASSWORD = 'admin';
  const MAX_ATTEMPTS = 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === ADMIN_PASSWORD) {
      onUnlock();
      setPassword('');
      setError('');
      setAttempts(0);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setError(`Incorrect password. ${MAX_ATTEMPTS - newAttempts} attempts remaining.`);
      setPassword('');
      
      if (newAttempts >= MAX_ATTEMPTS) {
        setError('Maximum attempts exceeded. Please contact administrator.');
      }
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="inline-block p-4 bg-red-500/20 rounded-full mb-4">
            <Lock size={48} className="text-red-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2">System Locked</h2>
          <p className="text-gray-300">Enter administrator password to unlock</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error}
              disabled={attempts >= MAX_ATTEMPTS}
              className="pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <div className="flex gap-3">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            )}
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
              disabled={!password || attempts >= MAX_ATTEMPTS}
            >
              Unlock System
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LockScreen;