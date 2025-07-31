// Enhanced Electron main process with DNP DS-RX1(S)HS printer support
const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('path');
const { exec } = require('child_process');
const os = require('os');
const fs = require('fs');

let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  
  mainWindow = new BrowserWindow({
    width,
    height,
    fullscreen: false, // Start windowed for development
    kiosk: false, // Disable kiosk mode initially
    frame: true, // Show frame for development
    autoHideMenuBar: true, // Hide menu bar but allow access
    resizable: true,
    minimizable: true,
    maximizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'electron-preload.cjs'),
      webSecurity: false // Allow local file access for development
    }
  });

  // Load the app
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    // Open DevTools in development
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load from the built files
    const indexPath = path.join(__dirname, 'dist', 'index.html'); // Changed path
    mainWindow.loadFile(indexPath);
  }

  // Set up menu for desktop app
  const { Menu } = require('electron');
  const template = [
    {
      label: 'Photo Booth',
      submenu: [
        {
          label: 'Toggle Fullscreen',
          accelerator: 'F11',
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          }
        },
        {
          label: 'Toggle Kiosk Mode',
          accelerator: 'Ctrl+K',
          click: () => {
            const isKiosk = mainWindow.isKiosk();
            mainWindow.setKiosk(!isKiosk);
            if (!isKiosk) {
              mainWindow.setMenuBarVisibility(false);
            } else {
              mainWindow.setMenuBarVisibility(true);
            }
          }
        },
        { type: 'separator' },
        {
          label: 'Quit',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    }
  ];
  
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
  
  // Prevent new window creation
  mainWindow.webContents.setWindowOpenHandler(() => {
    return { action: 'deny' };
  });
  
  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('enter-kiosk-mode', () => {
  try {
    mainWindow.setKiosk(true);
    mainWindow.setFullScreen(true);
    mainWindow.setMenuBarVisibility(false);
    return true;
  } catch (error) {
    console.error('Failed to enter kiosk mode:', error);
    return false;
  }
});

ipcMain.handle('exit-kiosk-mode', () => {
  try {
    mainWindow.setKiosk(false);
    mainWindow.setFullScreen(false);
    return true;
  } catch (error) {
    console.error('Failed to exit kiosk mode:', error);
    return false;
  }
});

// Additional system information
ipcMain.handle('get-system-info', async () => {
  return {
    platform: process.platform,
    arch: process.arch,
    version: process.version,
    electronVersion: process.versions.electron,
    nodeVersion: process.versions.node
  };
});