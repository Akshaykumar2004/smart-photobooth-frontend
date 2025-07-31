import React, { useEffect, useState, useRef } from 'react';
import { Camera } from 'lucide-react';
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
  const { setStage, setIsLocked, isLocked, setBackendConnected, resetPhotos } = usePhotoBooth();
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showSamplesModal, setShowSamplesModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showLockScreen, setShowLockScreen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const apiService = ApiService.getInstance();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    
    // Test backend connection on mount
    testBackendConnection();
    
    // Initialize Three.js animation
    const cleanup = initThreeJSAnimation();
    
    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, []);

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

      // Create floating particles
      const particleCount = 50;
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 20;
        positions[i + 1] = (Math.random() - 0.5) * 20;
        positions[i + 2] = (Math.random() - 0.5) * 20;
        
        // Purple/pink gradient colors
        const colorChoice = Math.random();
        if (colorChoice < 0.33) {
          colors[i] = 0.54; colors[i + 1] = 0.36; colors[i + 2] = 0.96; // Purple
        } else if (colorChoice < 0.66) {
          colors[i] = 0.93; colors[i + 1] = 0.28; colors[i + 2] = 0.60; // Pink
        } else {
          colors[i] = 0.05; colors[i + 1] = 0.58; colors[i + 2] = 0.84; // Cyan
        }
      }
      
      particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      
      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);

      // Create floating geometric shapes
      const geometries = [
        new THREE.BoxGeometry(0.5, 0.5, 0.5),
        new THREE.SphereGeometry(0.3, 8, 6),
        new THREE.ConeGeometry(0.3, 0.6, 6),
        new THREE.OctahedronGeometry(0.4)
      ];
      
      const materials = [
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.6 }),
        new THREE.MeshBasicMaterial({ color: 0xec4899, wireframe: true, transparent: true, opacity: 0.6 }),
        new THREE.MeshBasicMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.6 }),
        new THREE.MeshBasicMaterial({ color: 0x10b981, wireframe: true, transparent: true, opacity: 0.6 })
      ];
      
      const shapes: THREE.Mesh[] = [];
      for (let i = 0; i < 6; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const shape = new THREE.Mesh(geometry, material);
        
        shape.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        );
        
        shape.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        shapes.push(shape);
        scene.add(shape);
      }

      camera.position.z = 10;

      // Animation loop
      const animate = () => {
        animationFrameRef.current = requestAnimationFrame(animate);
        
        // Rotate particles
        particleSystem.rotation.x += 0.001;
        particleSystem.rotation.y += 0.002;
        
        // Animate shapes
        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.01 + index * 0.001;
          shape.rotation.y += 0.01 + index * 0.001;
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        });
        
        // Animate camera
        camera.position.x = Math.sin(Date.now() * 0.0005) * 2;
        camera.position.y = Math.cos(Date.now() * 0.0003) * 1;
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
        // Dispose geometries and materials
        shapes.forEach(shape => {
          if (shape.geometry) shape.geometry.dispose();
          if (shape.material) {
            if (Array.isArray(shape.material)) {
              shape.material.forEach(mat => mat.dispose());
            } else {
              shape.material.dispose();
            }
          }
        });
        particles.dispose();
        particleMaterial.dispose();
      };
    } catch (error) {
      console.error('Three.js initialization error:', error);
      return () => {};
    }
  };

  const testBackendConnection = async () => {
    try {
      const connected = await apiService.testConnection();
      setBackendConnected(connected);
    } catch (error) {
      console.error('Backend connection test failed:', error);
      setBackendConnected(false);
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
      {/* Three.js Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.4 }}
      />
      
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
          ⚙️
        </Button>
      </div>
      
      <div className="relative z-20 max-w-lg w-full">
        <Card animate className="text-center backdrop-blur-sm bg-gray-800/90 border border-primary/20 main-card">
          <div className="bg-gradient-to-r from-primary/30 to-accent/30 p-6 -mt-6 -mx-6 mb-6 rounded-t-xl relative overflow-hidden">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">
              📸 Smart Photo Booth
            </h1>
            <p className="text-gray-300">Capture memories in style</p>
          </div>
          
          <div className="space-y-6">
            <Button 
              variant="primary" 
              size="lg"
              icon={Camera}
              className="w-full btn-ultra-neon relative overflow-hidden transform transition-transform hover:scale-105"
              onClick={handleStartSession}
            >
              Start Session
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