import React, { useEffect, useState, useRef } from 'react';
import { Camera, Play, Star, Award, Users, Clock } from 'lucide-react';
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

      // Create subtle floating particles
      const particles: THREE.Points[] = [];
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 50;
      const positions = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 50;
        positions[i + 1] = (Math.random() - 0.5) * 50;
        positions[i + 2] = (Math.random() - 0.5) * 30;
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x8b5cf6,
        size: 2,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      
      const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      camera.position.z = 10;

      // Animation loop
      const animate = () => {
        animationFrameRef.current = requestAnimationFrame(animate);
        
        const time = Date.now() * 0.0005;
        
        // Rotate particle system slowly
        particleSystem.rotation.y = time * 0.1;
        particleSystem.rotation.x = time * 0.05;
        
        // Gentle camera movement
        camera.position.x = Math.sin(time * 0.5) * 0.5;
        camera.position.y = Math.cos(time * 0.3) * 0.3;
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
        particleGeometry.dispose();
        particleMaterial.dispose();
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
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Video or Three.js Animation */}
      {backgroundVideo ? (
        <video
          ref={videoRef}
          src={backgroundVideo}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
          style={{ opacity: 0.3 }}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : showAnimation && (
        <canvas 
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          style={{ opacity: 0.3 }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/60 z-10"></div>
      
      {/* Settings Button */}
      <div className="absolute top-6 right-6 z-30">
        <Button
          variant="outline"
          onClick={handleSettingsClick}
          className="border-gray-600 text-gray-400 hover:text-gray-200 hover:border-gray-400 text-sm px-3 py-2 opacity-70 hover:opacity-100 backdrop-blur-sm"
        >
          Settings
        </Button>
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="max-w-6xl w-full">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8">
                <Camera className="text-primary" size={24} />
                <span className="text-primary font-semibold">PixxeL8</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                Capture
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  Memories
                </span>
              </h1>
              
              {/* <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Professional quality photos with instant printing and AI-powered Studio Ghibli transformations
              </p> */}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Camera className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">High Quality Photos</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional 4K resolution photos with advanced filters and real-time editing capabilities
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Art Conversion</h3>
                <p className="text-gray-300 leading-relaxed">
                  Transform your photos into beautiful Studio Ghibli-style artwork using advanced AI technology
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Instant Printing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Professional 4×6 inch photo strips printed instantly with premium quality paper
                </p>
              </div>
            </div>

            {/* Live Preview Section */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Live Preview</h2>
                <p className="text-gray-300 text-lg">See yourself before you start</p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <div className="relative aspect-[4/3] bg-black rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    width="100%"
                    height="100%"
                    videoConstraints={{
                      facingMode: "user"
                    }}
                    onUserMedia={() => setWebcamReady(true)}
                    className={`${webcamReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                  />
                  
                  {!webcamReady && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
                    </div>
                  )}
                  
                  {/* Elegant frame overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/60 rounded-tl-lg"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/60 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/60 rounded-bl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/60 rounded-br-lg"></div>
                  </div>
                  
                  {/* Welcome message overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/60 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
                      <p className="text-white text-lg font-medium text-center">
                        Ready to create amazing memories?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4K</div>
                <div className="text-gray-300 font-medium">Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">30s</div>
                <div className="text-gray-300 font-medium">Quick Session</div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 text-center">
                <div>2x</div>
                <div className="text-gray-300 font-medium text-base">Photo Strips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">AI</div>
                <div className="text-gray-300 font-medium">Art Style</div>
              </div>
            </div> */}

            {/* CTA Section */}
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={handleStartSession}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary text-white font-black text-4xl md:text-5xl py-8 md:py-12 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] group border-4 border-transparent"
                  style={{
                    background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #10b981)',
                    backgroundSize: '400% 400%',
                    animation: 'neonGradient 3s ease-in-out infinite, neonPulse 2s ease-in-out infinite',
                    boxShadow: `
                      0 0 20px rgba(139, 92, 246, 0.5),
                      0 0 40px rgba(236, 72, 153, 0.3),
                      0 0 60px rgba(6, 182, 212, 0.2),
                      inset 0 0 20px rgba(255, 255, 255, 0.1)
                    `
                  }}
                >
                  {/* Animated border */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-75"
                    style={{
                      background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4, #10b981, #8b5cf6)',
                      backgroundSize: '400% 400%',
                      animation: 'neonBorderRace 2s linear infinite',
                      padding: '4px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'xor'
                    }}
                  ></div>
                  
                  {/* Shine effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                      animation: 'neonShine 2s linear infinite'
                    }}
                  ></div>
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center justify-center gap-4">
                    <Play className="text-white animate-pulse" size={48} />
                    <span className="tracking-wider">START PHOTO SESSION</span>
                    <div className="text-6xl animate-bounce">📸</div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full animate-ping opacity-60" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-8 right-12 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-6 left-16 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2.5s' }}></div>
                  </div>
                </button>
              </div>
              
              <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>2-3 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>Perfect for groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span>Professional quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-6 text-center">
          <div className="text-xs text-gray-500 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/30 inline-block">
                    Developed by @akshaykumarbp2004@gmail.com
          </div>
        </div>
      </div>
      
      {/* Modals */}
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