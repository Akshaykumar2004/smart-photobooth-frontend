// Enhanced Electron preload script
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  enterKioskMode: () => ipcRenderer.invoke('enter-kiosk-mode'),
  exitKioskMode: () => ipcRenderer.invoke('exit-kiosk-mode'),
  getSystemInfo: () => ipcRenderer.invoke('get-system-info')
});