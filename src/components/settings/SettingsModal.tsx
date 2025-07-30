import React, { useState, useEffect } from 'react';
import { X, Settings, Server, Wifi, WifiOff, Save, RefreshCw, Monitor, MonitorOff, CheckCircle, AlertCircle, Upload, Image, Sparkles, IndianRupee } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import { KioskModeManager } from '../../utils/kioskMode';
import { ApiService } from '../../utils/apiService';

interface SettingsModalProps {
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const { kioskMode, setKioskMode, backendConnected, setBackendConnected, settings, setSettings } = usePhotoBooth();
  const [apiUrl, setApiUrl] = useState('http://localhost:8000');
  const [testing, setTesting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [backendStatus, setBackendStatus] = useState<any>(null);
  const [upiQrImage, setUpiQrImage] = useState<string | null>(null);
  
  const kioskManager = KioskModeManager.getInstance();
  const apiService = ApiService.getInstance();

  useEffect(() => {
    // Test backend connection on mount
    testBackendConnection();
    
    // Load saved UPI QR image from localStorage
    const savedUpiImage = localStorage.getItem('upiQrImage');
    if (savedUpiImage) {
      setUpiQrImage(savedUpiImage);
    }
  }, []);

  const testBackendConnection = async () => {
    setTesting(true);
    setStatusMessage('Testing backend connection...');
    
    try {
      const status = await apiService.getBackendStatus();
      setBackendStatus(status);
      setBackendConnected(status.connected);
      
      if (status.connected) {
        setStatusMessage('Backend server connected successfully!');
      } else {
        setStatusMessage(status.error || 'Backend server not responding. Make sure FastAPI server is running.');
      }
    } catch (error) {
      console.error('Backend connection test failed:', error);
      setBackendConnected(false);
      setStatusMessage('Failed to connect to backend server.');
      setBackendStatus({ connected: false, error: 'Connection failed' });
    } finally {
      setTesting(false);
      setTimeout(() => setStatusMessage(''), 5000);
    }
  };

  const handleKioskModeToggle = () => {
    if (kioskMode) {
      kioskManager.exitKioskMode();
      setKioskMode(false);
    } else {
      kioskManager.enterKioskMode();
      setKioskMode(true);
    }
  };

  const handleUpiImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;
        setUpiQrImage(imageDataUrl);
        localStorage.setItem('upiQrImage', imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveUpiImage = () => {
    setUpiQrImage(null);
    localStorage.removeItem('upiQrImage');
  };

  const handleGhibliLimitChange = (newLimit: number) => {
    setSettings(prev => ({ ...prev, ghibliConversionLimit: Math.max(1, newLimit) }));
  };

  const handlePricingChange = (field: string, value: number) => {
    setSettings(prev => ({
      ...prev,
      pricing: {
        ...prev.pricing,
        [field]: Math.max(0, value)
      }
    }));
  };

  const handleSave = () => {
    // Save API URL to environment or local storage if needed
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Settings className="text-primary" />
            System Settings - FastAPI Backend
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Status Message */}
        {statusMessage && (
          <div className="mb-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
            <div className="flex items-center gap-2">
              {testing ? (
                <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
              ) : (
                <Server className="text-blue-400" size={16} />
              )}
              <span className="text-blue-400">{statusMessage}</span>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {/* Backend Connection Status */}
          <div className="bg-gray-900 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Server className="text-secondary" />
                FastAPI Backend Configuration
              </h3>
              <Button
                variant="outline"
                icon={RefreshCw}
                onClick={testBackendConnection}
                disabled={testing}
                size="default"
                className="text-sm"
              >
                {testing ? 'Testing...' : 'Test Connection'}
              </Button>
            </div>
            
            {/* Backend Status */}
            <div className={`mb-4 p-3 rounded-lg border ${backendConnected ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
              <div className="flex items-center gap-2 mb-2">
                {backendConnected ? (
                  <>
                    <CheckCircle className="text-green-400" size={16} />
                    <span className="text-green-400 font-medium">Backend Server Connected</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="text-red-400" size={16} />
                    <span className="text-red-400 font-medium">Backend Server Disconnected</span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-300">
                {backendConnected 
                  ? 'FastAPI server is running and ready to generate photo strips and handle printing.'
                  : 'Make sure your FastAPI server is running. Start it with: uvicorn main:app --reload'
                }
              </p>
              
              {/* Backend Status Details */}
              {backendStatus && (
                <div className="mt-2 text-xs text-gray-400">
                  <p>Server URL: {apiUrl}</p>
                  {backendStatus.endpoints && (
                    <p>Available endpoints: {backendStatus.endpoints.join(', ')}</p>
                  )}
                  {backendStatus.error && (
                    <p className="text-red-400">Error: {backendStatus.error}</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <Input
                label="Backend API URL"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                placeholder="http://localhost:8000"
                helperText="URL where your FastAPI server is running"
              />
            </div>
            
            {/* Backend Features */}
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <h4 className="font-medium mb-2">Backend Features:</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p><strong>✓ Photo Strip Generation:</strong> Creates professional 2x6 inch strips with 4 photos</p>
                <p><strong>✓ CUPS Printing:</strong> Direct printing to system printers via CUPS</p>
                <p><strong>✓ Image Processing:</strong> PIL-based image resizing and layout</p>
                <p><strong>✓ Custom Quotes:</strong> Adds timestamps and custom messages</p>
                <p><strong>✓ Logo Support:</strong> Optional logo placement in strips</p>
              </div>
            </div>
            
            {/* Setup Instructions */}
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <h4 className="font-medium mb-2">Backend Setup Instructions:</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p><strong>1. Install Dependencies:</strong> pip install fastapi uvicorn pillow pycups</p>
                <p><strong>2. Start Server:</strong> uvicorn main:app --reload --host 0.0.0.0 --port 8000</p>
                <p><strong>3. Configure Printer:</strong> Ensure CUPS is configured with your printer</p>
                <p><strong>4. Test Connection:</strong> Click "Test Connection" above</p>
              </div>
            </div>

            {/* Recent Backend Activity */}
            <div className="mt-4 p-3 bg-gray-800 rounded-lg">
              <h4 className="font-medium mb-2">Connection Status:</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Last tested: {new Date().toLocaleTimeString()}</p>
                <p>Status: {backendConnected ? '✅ Ready for photo generation and printing' : '❌ Offline'}</p>
                {backendConnected && (
                  <p>Services: Photo strip generation ✓, Print service ✓</p>
                )}
              </div>
            </div>
          </div>
          
          {/* UPI Payment Configuration */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Image className="text-accent" />
              UPI Payment Configuration
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  UPI QR Code Image
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUpiImageUpload}
                    className="hidden"
                    id="upi-image-upload"
                  />
                  <label
                    htmlFor="upi-image-upload"
                    className="btn btn-outline cursor-pointer flex items-center gap-2"
                  >
                    <Upload size={16} />
                    Upload QR Code
                  </label>
                  
                  {upiQrImage && (
                    <Button
                      variant="outline"
                      onClick={handleRemoveUpiImage}
                      className="border-red-500 text-red-400 hover:bg-red-500/10"
                    >
                      Remove
                    </Button>
                  )}
                </div>
                
                {upiQrImage && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-400 mb-2">Preview:</p>
                    <div className="inline-block border border-gray-700 rounded-lg overflow-hidden">
                      <img 
                        src={upiQrImage} 
                        alt="UPI QR Code" 
                        className="w-32 h-32 object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <p className="text-sm text-gray-400 mt-2">
                  Upload your UPI QR code image to display during payment. Recommended size: 300x300px or larger.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Configuration */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <IndianRupee className="text-green-400" />
              Pricing Configuration
            </h3>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="font-medium mb-3">Fixed Pricing Structure</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-blue-400 mb-2">Original Photos Package:</h5>
                  <div className="grid grid-cols-5 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-medium">2 copies</div>
                      <div className="text-gray-400">₹199</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">4 copies</div>
                      <div className="text-gray-400">₹299</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">6 copies</div>
                      <div className="text-gray-400">₹399</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">8 copies</div>
                      <div className="text-gray-400">₹499</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">10 copies</div>
                      <div className="text-gray-400">₹599</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-purple-400 mb-2">Original + 2 Ghibli Package:</h5>
                  <div className="grid grid-cols-5 gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-medium">2 copies</div>
                      <div className="text-gray-400">₹249</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">4 copies</div>
                      <div className="text-gray-400">₹349</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">6 copies</div>
                      <div className="text-gray-400">₹449</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">8 copies</div>
                      <div className="text-gray-400">₹549</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">10 copies</div>
                      <div className="text-gray-400">₹649</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <h4 className="font-medium mb-2 text-blue-400">Package Details:</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p><strong>Original Package:</strong> Original photos only</p>
                <p><strong>Ghibli Package:</strong> Original photos + 2 FREE Ghibli conversions</p>
                <p><strong>Pricing:</strong> Even increments of ₹100 per 2 additional copies</p>
                <p><strong>Ghibli Premium:</strong> +₹50 over original package price</p>
                <p><strong>Maximum:</strong> 10 copies per order</p>
              </div>
            </div>
          </div>

          {/* Ghibli Conversion Settings */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="text-purple-400" />
              Ghibli Conversion Settings
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Conversion Limit Per Session
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={settings.ghibliConversionLimit}
                    onChange={(e) => handleGhibliLimitChange(parseInt(e.target.value) || 1)}
                    className="input w-24"
                  />
                  <span className="text-gray-400">conversions per session</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Set how many photos can be converted to Ghibli style per session. Current usage: {settings.ghibliConversionsUsed}/{settings.ghibliConversionLimit}
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-3">
                <h4 className="font-medium mb-2">Conversion Features:</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p><strong>✓ AI Style Transfer:</strong> Transform photos into Studio Ghibli artwork</p>
                  <p><strong>✓ Original Backup:</strong> Keep original photos for swapping</p>
                  <p><strong>✓ Flexible Usage:</strong> Use original, Ghibli, or mix both styles</p>
                  <p><strong>✓ Photo Management:</strong> Remove photos to make room for new captures</p>
                </div>
              </div>
            </div>
          </div>
          {/* Kiosk Mode Configuration */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Monitor className="text-accent" />
              Kiosk Mode Settings
            </h3>
            
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div>
                <h4 className="font-medium">Full Screen Kiosk Mode</h4>
                <p className="text-sm text-gray-400">
                  Prevents users from accessing browser controls, dev tools, or navigation
                </p>
              </div>
              <Button
                variant={kioskMode ? "secondary" : "primary"}
                icon={kioskMode ? MonitorOff : Monitor}
                onClick={handleKioskModeToggle}
              >
                {kioskMode ? 'Exit Kiosk' : 'Enter Kiosk'}
              </Button>
            </div>
          </div>
          
          {/* System Information */}
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">System Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Version:</span>
                <span className="ml-2">2.0.0 Production</span>
              </div>
              <div>
                <span className="text-gray-400">Backend:</span>
                <span className="ml-2">FastAPI + CUPS</span>
              </div>
              <div>
                <span className="text-gray-400">Print Method:</span>
                <span className="ml-2">Server-side CUPS</span>
              </div>
              <div>
                <span className="text-gray-400">Backend Status:</span>
                <span className="ml-2">{backendConnected ? '🟢 Connected' : '🔴 Disconnected'}</span>
              </div>
              <div>
                <span className="text-gray-400">Ghibli Limit:</span>
                <span className="ml-2">{settings.ghibliConversionLimit} per session</span>
              </div>
              <div>
                <span className="text-gray-400">Ghibli Used:</span>
                <span className="ml-2">{settings.ghibliConversionsUsed}/{settings.ghibliConversionLimit}</span>
              </div>
              <div>
                <span className="text-gray-400">Original (2 copies):</span>
                <span className="ml-2">₹199</span>
              </div>
              <div>
                <span className="text-gray-400">Ghibli (2 copies):</span>
                <span className="ml-2">₹249</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" icon={Save} onClick={handleSave}>
            Save Settings
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SettingsModal;