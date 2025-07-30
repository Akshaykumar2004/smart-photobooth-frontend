import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, FlipHorizontal, FlipVertical, Contrast, Sun, Palette, Undo, Check, X } from 'lucide-react';
import Button from '../ui/Button';

interface PhotoEditorProps {
  imageDataUrl: string;
  onSave: (editedImageDataUrl: string) => void;
  onCancel: () => void;
}

const PhotoEditor: React.FC<PhotoEditorProps> = ({ imageDataUrl, onSave, onCancel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [flipH, setFlipH] = useState(false);
  const [flipV, setFlipV] = useState(false);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [hue, setHue] = useState(0);
  
  useEffect(() => {
    drawImage();
  }, [rotation, flipH, flipV, brightness, contrast, saturation, hue]);

  const drawImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply transformations
      ctx.save();
      
      // Move to center for rotation
      ctx.translate(canvas.width / 2, canvas.height / 2);
      
      // Apply rotation
      ctx.rotate((rotation * Math.PI) / 180);
      
      // Apply flips
      ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
      
      // Apply filters
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${hue}deg)`;
      
      // Draw image
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      
      ctx.restore();
    };
    img.src = imageDataUrl;
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleFlipHorizontal = () => {
    setFlipH(!flipH);
  };

  const handleFlipVertical = () => {
    setFlipV(!flipV);
  };

  const handleReset = () => {
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setHue(0);
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const editedDataUrl = canvas.toDataURL('image/jpeg', 0.9);
    onSave(editedDataUrl);
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Edit Photo</h3>
          <div className="flex gap-2">
            <Button variant="outline" icon={X} onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" icon={Check} onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </div>
        
        {/* Canvas Preview */}
        <div className="mb-6 text-center">
          <canvas
            ref={canvasRef}
            className="max-w-full max-h-96 border border-gray-700 rounded-lg"
          />
        </div>
        
        {/* Transform Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3">Transform</h4>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                icon={RotateCw}
                onClick={handleRotate}
                className="text-sm"
              >
                Rotate
              </Button>
              <Button
                variant="outline"
                icon={FlipHorizontal}
                onClick={handleFlipHorizontal}
                className={`text-sm ${flipH ? 'bg-primary/20 border-primary' : ''}`}
              >
                Flip H
              </Button>
              <Button
                variant="outline"
                icon={FlipVertical}
                onClick={handleFlipVertical}
                className={`text-sm ${flipV ? 'bg-primary/20 border-primary' : ''}`}
              >
                Flip V
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Adjustments</h4>
            <div className="space-y-3">
              <div>
                <label className="flex items-center gap-2 text-sm mb-1">
                  <Sun size={16} />
                  Brightness: {brightness}%
                </label>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm mb-1">
                  <Contrast size={16} />
                  Contrast: {contrast}%
                </label>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={contrast}
                  onChange={(e) => setContrast(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm mb-1">
                  <Palette size={16} />
                  Saturation: {saturation}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={saturation}
                  onChange={(e) => setSaturation(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm mb-1">
                  <Palette size={16} />
                  Hue: {hue}°
                </label>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={hue}
                  onChange={(e) => setHue(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            icon={Undo}
            onClick={handleReset}
            className="border-orange-500 text-orange-400 hover:bg-orange-500/10"
          >
            Reset All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoEditor;