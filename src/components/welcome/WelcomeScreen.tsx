import React, { useEffect, useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import Webcam from 'react-webcam';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { usePhotoBooth } from '../../contexts/PhotoBoothContext';
import { ApiService } from '../../utils/apiService';
import PriceModal from './PriceModal';
import SamplePhotosModal from './SamplePhotosModal';
import SettingsModal from '../settings/SettingsModal';
import LockScreen from '../security/LockScreen';
import * as THREE from 'three';

const WelcomeScreen: React.FC = () => {
  const { setStage, setIsLocked, isLocked, resetPhotos } = usePhotoBooth();
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showSamplesModal, setShowSamplesModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showLockScreen, setShowLockScreen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [backgroundVideo, setBackgroundVideo] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [webcamReady, setWebcamReady] = useState(false);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    
    // Load background video from localStorage
    const savedBackgroundVideo = localStorage.getItem('backgroundVideo');
    if (savedBackgroundVideo) {
      setBackgroundVideo(savedBackgroundVideo);
      setShowAnimation(false);
    } else {
      setShowAnimation(true);
      // Initialize Three.js animation only if no video
      const cleanup = initThreeJSAnimation();
      return () => {
        clearTimeout(timer);
        if (cleanup) cleanup();
      };
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // Initialize Three.js animation when showAnimation changes
    if (showAnimation && !backgroundVideo) {
      const cleanup = initThreeJSAnimation();
      return cleanup;
    }
  }, [showAnimation, backgroundVideo]);

  useEffect(() => {
    // Handle video playback
    if (backgroundVideo && videoRef.current) {
      const video = videoRef.current;
      
      const handleCanPlay = () => {
        video.play().catch(console.error);
      };
      
      const handleError = () => {
        console.error('Video failed to load, falling back to animation');
        setBackgroundVideo(null);
        setShowAnimation(true);
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, [backgroundVideo]);

  const initThreeJSAnimation = () => {
    if (!canvasRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current, 
        alpha: true,
        antialias: true 
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      
      sceneRef.current = scene;
      rendererRef.current = renderer;

      // Create emoji sprites function
      const createEmojiSprite = (emoji: string, size: number = 1) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const fontSize = 64;
        
        canvas.width = fontSize;
        canvas.height = fontSize;
        
        if (context) {
          context.font = `${fontSize}px Arial`;
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(emoji, fontSize / 2, fontSize / 2);
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.SpriteMaterial({ 
          map: texture, 
          transparent: true,
          opacity: 0.8
        });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(size, size, 1);
        
        return sprite;
      };

      // Create floating camera emojis
      const cameraEmojis: THREE.Sprite[] = [];
      const cameraEmojiList = ['📸', '📷', '🎥', '📹'];
      
      for (let i = 0; i < 8; i++) {
        const emoji = cameraEmojiList[Math.floor(Math.random() * cameraEmojiList.length)];
        const sprite = createEmojiSprite(emoji, 1.5);
        
        sprite.position.set(
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15
        );
        
        // Add custom properties for animation
        (sprite as any).velocity = {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        };
        (sprite as any).rotationSpeed = (Math.random() - 0.5) * 0.05;
        (sprite as any).floatOffset = Math.random() * Math.PI * 2;
        
        cameraEmojis.push(sprite);
        scene.add(sprite);
      }

      // Create flying hearts and kid emojis
      const flyingEmojis: THREE.Sprite[] = [];
      const flyingEmojiList = ['❤️', '💖', '💕', '💗', '🧒', '👶', '👧', '👦', '😊', '😄', '🎉', '⭐', '✨', '🌟'];
      
      for (let i = 0; i < 15; i++) {
        const emoji = flyingEmojiList[Math.floor(Math.random() * flyingEmojiList.length)];
        const sprite = createEmojiSprite(emoji, 0.8);
        
        sprite.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 20
        );
        
        // Add custom properties for animation
        (sprite as any).velocity = {
          x: (Math.random() - 0.5) * 0.03,
          y: Math.random() * 0.02 + 0.01, // Always float upward
          z: (Math.random() - 0.5) * 0.03
        };
        (sprite as any).rotationSpeed = (Math.random() - 0.5) * 0.08;
        (sprite as any).scaleSpeed = Math.random() * 0.02 + 0.01;
        (sprite as any).floatOffset = Math.random() * Math.PI * 2;
        
        flyingEmojis.push(sprite);
        scene.add(sprite);
      }

      // Create some subtle geometric shapes as background elements
      const backgroundShapes: THREE.Mesh[] = [];
      const geometries = [
        new THREE.RingGeometry(0.5, 0.8, 8),
        new THREE.CircleGeometry(0.3, 8),
        new THREE.PlaneGeometry(0.5, 0.5)
      ];
      
      const materials = [
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.2 }),
        new THREE.MeshBasicMaterial({ color: 0xec4899, wireframe: true, transparent: true, opacity: 0.2 }),
        new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.2 })
      ];
      
      for (let i = 0; i < 4; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const shape = new THREE.Mesh(geometry, material);
        
        shape.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10
        );
        
        backgroundShapes.push(shape);
        scene.add(shape);
      }

      camera.position.z = 10;

      // Animation loop
      const animate = () => {
        animationFrameRef.current = requestAnimationFrame(animate);
        
        const time = Date.now() * 0.001;
        
        // Animate camera emojis - floating around
        cameraEmojis.forEach((sprite, index) => {
          const customSprite = sprite as any;
          
          // Floating motion
          sprite.position.x += customSprite.velocity.x;
          sprite.position.y += customSprite.velocity.y + Math.sin(time + customSprite.floatOffset) * 0.005;
          sprite.position.z += customSprite.velocity.z;
          
          // Gentle rotation
          sprite.material.rotation += customSprite.rotationSpeed;
          
          // Boundary wrapping
          if (sprite.position.x > 15) sprite.position.x = -15;
          if (sprite.position.x < -15) sprite.position.x = 15;
          if (sprite.position.y > 12) sprite.position.y = -12;
          if (sprite.position.y < -12) sprite.position.y = 12;
          if (sprite.position.z > 8) sprite.position.z = -8;
          if (sprite.position.z < -8) sprite.position.z = 8;
        });
        
        // Animate flying emojis - hearts and kids flying around
        flyingEmojis.forEach((sprite, index) => {
          const customSprite = sprite as any;
          
          // Flying motion with upward bias
          sprite.position.x += customSprite.velocity.x + Math.sin(time * 0.5 + index) * 0.01;
          sprite.position.y += customSprite.velocity.y;
          sprite.position.z += customSprite.velocity.z + Math.cos(time * 0.3 + index) * 0.01;
          
          // Rotation
          sprite.material.rotation += customSprite.rotationSpeed;
          
          // Pulsing scale effect
          const scale = 0.8 + Math.sin(time * 2 + customSprite.floatOffset) * 0.2;
          sprite.scale.set(scale, scale, 1);
          
          // Reset position when flying too far
          if (sprite.position.y > 15) {
            sprite.position.y = -15;
            sprite.position.x = (Math.random() - 0.5) * 30;
            sprite.position.z = (Math.random() - 0.5) * 20;
          }
          if (sprite.position.x > 18) sprite.position.x = -18;
          if (sprite.position.x < -18) sprite.position.x = 18;
          if (sprite.position.z > 12) sprite.position.z = -12;
          if (sprite.position.z < -12) sprite.position.z = 12;
        });
        
        // Animate background shapes subtly
        backgroundShapes.forEach((shape, index) => {
          shape.rotation.z += 0.005 + index * 0.001;
          shape.position.y += Math.sin(time * 0.5 + index) * 0.002;
        });
        
        // Animate camera
        camera.position.x = Math.sin(time * 0.2) * 1.5;
        camera.position.y = Math.cos(time * 0.15) * 0.8;
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);
      };
      
      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        // Cleanup Three.js
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
        // Dispose geometries, materials, and textures
        [...cameraEmojis, ...flyingEmojis].forEach(sprite => {
          if (sprite.material && sprite.material.map) {
            sprite.material.map.dispose();
          }
          if (sprite.material) {
            sprite.material.dispose();
          }
        });
        backgroundShapes.forEach(shape => {
          if (shape.geometry) shape.geometry.dispose();
          if (shape.material) {
            if (Array.isArray(shape.material)) {
              shape.material.forEach(mat => mat.dispose());
            } else {
              shape.material.dispose();
            }
          }
        });
      };
    } catch (error) {
      console.error('Three.js initialization error:', error);
      return () => {};
    }
  };


  const handleSettingsClick = () => {
    setShowLockScreen(true);
  };

  const handleUnlock = () => {
    setShowLockScreen(false);
    setShowSettingsModal(true);
  };

  const handleStartSession = () => {
    // Reset all context data for a fresh start
    resetPhotos();
    setStage('payment');
  };

  if (isLocked) {
    return <LockScreen onUnlock={() => setIsLocked(false)} />;
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Video or Three.js Animation */}
      {backgroundVideo ? (
        <video
          ref={videoRef}
          src={backgroundVideo}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
          style={{ opacity: 0.6 }}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : showAnimation && (
        <canvas 
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          style={{ opacity: 0.4 }}
        />
      )}
      
      {/* CSS-only Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full blur-sm animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/30 rounded-full blur-sm animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-secondary/30 rounded-full blur-sm animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/30 rounded-full blur-sm animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/2 left-5 w-2 h-2 bg-accent/40 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-1/3 right-5 w-4 h-4 bg-secondary/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Settings Button */}
      <div className="absolute top-4 right-4 z-30">
        <Button
          variant="outline"
          onClick={handleSettingsClick}
          className="border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-500 text-sm px-2 py-1 opacity-60 hover:opacity-100"
        >
          O
        </Button>
      </div>
      
      <div className="relative z-20 max-w-2xl w-full">
        <Card animate className="text-center backdrop-blur-sm bg-gray-800/90 border border-primary/20 main-card">
          <div className="bg-gradient-to-r from-primary/30 to-accent/30 p-6 -mt-6 -mx-6 mb-6 rounded-t-xl relative overflow-hidden">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">
              📸 Smart Photo Booth
            </h1>
            <p className="text-gray-300">Capture memories in style</p>
          </div>
          
          {/* Camera Preview */}
          <div className="mb-6">
            <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden border-2 border-primary/30">
              <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
                width="100%"
                height="100%"
                videoConstraints={{
                  facingMode: "user"
                }}
                onUserMedia={() => setWebcamReady(true)}
                className={`${webcamReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              />
              
              {!webcamReady && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
                </div>
              )}
              
              {/* Camera frame overlay */}
              <div className="absolute inset-0 pointer-events-none border-2 border-white/30 rounded-lg">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"></div>
              </div>
              
              {/* Welcome message overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-white text-sm font-medium">
                    👋 Ready to capture amazing memories?
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Button 
              variant="primary" 
              size="lg"
              icon={Camera}
              className="w-full btn-ultra-neon relative overflow-hidden transform transition-transform hover:scale-105"
              onClick={handleStartSession}
            >
              📸 Let's Capture
            </Button>
          </div>
        </Card>
      </div>
      
      {/* Developer credit at bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-xs text-gray-500 text-center bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700/30">
          Developed by @akshaykumarbp2004@gmail.com
        </div>
      </div>
      
      {showPriceModal && (
        <PriceModal onClose={() => setShowPriceModal(false)} />
      )}
      
      {showSamplesModal && (
        <SamplePhotosModal onClose={() => setShowSamplesModal(false)} />
      )}
      
      {showLockScreen && (
        <LockScreen 
          onUnlock={handleUnlock} 
          onCancel={() => setShowLockScreen(false)}
        />
      )}
      
      {showSettingsModal && (
        <SettingsModal onClose={() => setShowSettingsModal(false)} />
      )}
    </div>
  );
};

export default WelcomeScreen;