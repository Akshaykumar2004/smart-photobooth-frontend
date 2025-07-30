// Kiosk mode utilities for production deployment
export class KioskModeManager {
  private static instance: KioskModeManager;
  private isKioskActive = false;
  private originalOverflow = '';
  
  private constructor() {
    this.setupEventListeners();
  }
  
  static getInstance(): KioskModeManager {
    if (!KioskModeManager.instance) {
      KioskModeManager.instance = new KioskModeManager();
    }
    return KioskModeManager.instance;
  }

  enterKioskMode(): void {
    this.isKioskActive = true;
    
    // Hide browser UI elements
    this.originalOverflow = document.body.style.overflow;
    // Don't hide overflow completely - allow scrolling
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
    
    // Request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(console.error);
    }
    
    // For Electron apps
    if (window.electronAPI) {
      window.electronAPI.enterKioskMode();
    }
    
    // Disable context menu
    document.addEventListener('contextmenu', this.preventContextMenu);
    
    // Disable F12, Ctrl+Shift+I, etc.
    document.addEventListener('keydown', this.preventDevTools);
    
    // Disable text selection
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    
    // Prevent drag and drop
    document.addEventListener('dragover', this.preventDragDrop);
    document.addEventListener('drop', this.preventDragDrop);
  }

  exitKioskMode(): void {
    this.isKioskActive = false;
    
    // Restore body overflow
    document.body.style.overflow = this.originalOverflow;
    
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(console.error);
    }
    
    // For Electron apps
    if (window.electronAPI) {
      window.electronAPI.exitKioskMode();
    }
    
    // Re-enable context menu
    document.removeEventListener('contextmenu', this.preventContextMenu);
    
    // Re-enable dev tools
    document.removeEventListener('keydown', this.preventDevTools);
    
    // Re-enable text selection
    document.body.style.userSelect = '';
    document.body.style.webkitUserSelect = '';
    
    // Re-enable drag and drop
    document.removeEventListener('dragover', this.preventDragDrop);
    document.removeEventListener('drop', this.preventDragDrop);
  }

  private setupEventListeners(): void {
    // Prevent back/forward navigation
    window.addEventListener('popstate', (e) => {
      if (this.isKioskActive) {
        e.preventDefault();
        window.history.pushState(null, '', window.location.href);
      }
    });
    
    // Prevent page refresh
    window.addEventListener('beforeunload', (e) => {
      if (this.isKioskActive) {
        e.preventDefault();
        e.returnValue = '';
      }
    });
  }

  private preventContextMenu = (e: Event): void => {
    e.preventDefault();
  };

  private preventDevTools = (e: KeyboardEvent): void => {
    // Disable F12
    if (e.key === 'F12') {
      e.preventDefault();
    }
    
    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
      e.preventDefault();
    }
    
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
    
    // Disable Alt+F4 (Windows)
    if (e.altKey && e.key === 'F4') {
      e.preventDefault();
    }
    
    // Disable Ctrl+W (close tab)
    if (e.ctrlKey && e.key === 'w') {
      e.preventDefault();
    }
    
    // Disable Ctrl+R (refresh)
    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault();
    }
    
    // Disable Ctrl+T (new tab)
    if (e.ctrlKey && e.key === 't') {
      e.preventDefault();
    }
  };

  private preventDragDrop = (e: Event): void => {
    e.preventDefault();
  };

  isActive(): boolean {
    return this.isKioskActive;
  }
}