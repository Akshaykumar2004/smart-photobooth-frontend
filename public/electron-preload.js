// Enhanced Electron preload script
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getPrinters: () => ipcRenderer.invoke('get-printers'),
  testPrinter: (name) => ipcRenderer.invoke('test-printer', name),
  printPhotos: (options) => ipcRenderer.invoke('print-photos', options),
  enterKioskMode: () => ipcRenderer.invoke('enter-kiosk-mode'),
  exitKioskMode: () => ipcRenderer.invoke('exit-kiosk-mode'),
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  requestUSBAccess: async () => {
    // This would be handled by the main process in a real implementation
    // For now, return false as USB access in Electron requires additional setup
    return false;
  }
});