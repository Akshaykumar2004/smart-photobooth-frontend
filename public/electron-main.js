// Enhanced Electron main process with DNP DS-RX1(S)HS printer support
import { app, BrowserWindow, ipcMain, screen } from 'electron';
import path from 'path';
import { exec } from 'child_process';
import printer from 'printer';
import os from 'os';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      preload: path.join(__dirname, 'electron-preload.js'),
      webSecurity: false // Allow local file access for development
    }
  });

  // Load the app
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    // Open DevTools in development
    mainWindow.webContents.openDevTools();
  }   else {
    // In production, load from the built files
    const indexPath = path.join(__dirname, '../dist/index.html');
    mainWindow.loadFile(indexPath);
  }


  // Set up menu for desktop app
  const { Menu } = await import('electron');
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

// Enhanced IPC handlers for DNP printer functionality
ipcMain.handle('get-printers', async () => {
  try {
    const printers = printer.getPrinters();
    const printerList = printers.map(p => {
      let printerName = p.name;
      
      // Special handling for DNP printers
      if (printerName.includes('DNP') || printerName.includes('DS-RX1') || printerName.includes('DSRX1')) {
        printerName = `USB: DNP ${printerName}`;
      } else if (p.attributes && p.attributes.includes('usb')) {
        printerName = `USB: ${printerName}`;
      } else if (p.attributes && p.attributes.includes('network')) {
        printerName = `Network: ${printerName}`;
      } else if (p.attributes && p.attributes.includes('local')) {
        printerName = `Local: ${printerName}`;
      }
      
      return printerName;
    });
    
    // Add system default if available
    const defaultPrinter = printer.getDefaultPrinterName();
    if (defaultPrinter && !printerList.some(p => p.includes(defaultPrinter))) {
      printerList.unshift(`Default: ${defaultPrinter}`);
    }
    
    console.log('Found printers:', printerList);
    return printerList;
  } catch (error) {
    console.error('Failed to get printers:', error);
    return ['System Default Printer'];
  }
});

ipcMain.handle('test-printer', async (event, printerName) => {
  try {
    // Clean printer name (remove prefixes like "USB:", "Network:", etc.)
    const cleanName = printerName.replace(/^(USB|Network|Local|Default):\s*/, '');
    
    const printers = printer.getPrinters();
    const targetPrinter = printers.find(p => 
      p.name === cleanName || 
      p.name.includes(cleanName) ||
      cleanName.includes(p.name) ||
      (cleanName.includes('DNP') && p.name.includes('DNP')) ||
      (cleanName.includes('DS-RX1') && (p.name.includes('DS-RX1') || p.name.includes('DSRX1')))
    );
    
    if (!targetPrinter) {
      console.log(`Printer "${cleanName}" not found`);
      return false;
    }
    
    // Check printer status
    const isReady = targetPrinter.status === 'IDLE' || 
                   targetPrinter.status === 'READY' ||
                   !targetPrinter.status; // Some printers don't report status
    
    console.log(`Printer "${cleanName}" status:`, targetPrinter.status, 'Ready:', isReady);
    return isReady;
  } catch (error) {
    console.error('Printer test failed:', error);
    return false;
  }
});

ipcMain.handle('print-photos', async (event, options) => {
  try {
    const { photos, printerName, copies, paperSize, quality } = options;
    
    // Clean printer name
    const cleanName = printerName.replace(/^(USB|Network|Local|Default):\s*/, '');
    
    console.log(`Printing ${photos.length} photo layouts, ${copies} copies each to "${cleanName}"`);
    console.log(`Paper: ${paperSize}, Quality: ${quality}`);
    
    let successCount = 0;
    
    // Create print jobs for each photo layout
    for (let photoIndex = 0; photoIndex < photos.length; photoIndex++) {
      const photo = photos[photoIndex];
      
      for (let copyIndex = 0; copyIndex < copies; copyIndex++) {
        try {
          // Convert base64 to buffer
          const base64Data = photo.dataUrl.replace(/^data:image\/\w+;base64,/, '');
          const buffer = Buffer.from(base64Data, 'base64');
          
          // Create a temporary file for DNP printer
          const tempFilePath = path.join(os.tmpdir(), `dnp_photo_${photoIndex}_${copyIndex}_${Date.now()}.jpg`);
          fs.writeFileSync(tempFilePath, buffer);
          
          // Enhanced print command for DNP DS-RX1(S)HS
          await new Promise((resolve, reject) => {
            let printCommand;
            
            if (process.platform === 'win32') {
              // Windows print command optimized for DNP printer
              if (cleanName.includes('DNP') || cleanName.includes('DS-RX1')) {
                // Direct DNP printer command
                printCommand = `powershell -Command "& {
                  Add-Type -AssemblyName System.Drawing;
                  Add-Type -AssemblyName System.Drawing.Printing;
                  $img = [System.Drawing.Image]::FromFile('${tempFilePath}');
                  $printDoc = New-Object System.Drawing.Printing.PrintDocument;
                  $printDoc.PrinterSettings.PrinterName = '${cleanName}';
                  $printDoc.DefaultPageSettings.PaperSize = New-Object System.Drawing.Printing.PaperSize('4x6', 400, 600);
                  $printDoc.DefaultPageSettings.Margins = New-Object System.Drawing.Printing.Margins(0, 0, 0, 0);
                  $printDoc.add_PrintPage({
                    param($sender, $e)
                    $e.Graphics.DrawImage($img, $e.MarginBounds);
                  });
                  $printDoc.Print();
                  $img.Dispose();
                }"`;
              } else {
                // Standard Windows print command
                printCommand = `powershell -Command "& {Add-Type -AssemblyName System.Drawing; $img = [System.Drawing.Image]::FromFile('${tempFilePath}'); $printDoc = New-Object System.Drawing.Printing.PrintDocument; $printDoc.PrinterSettings.PrinterName = '${cleanName}'; $printDoc.add_PrintPage({param($sender, $e) $e.Graphics.DrawImage($img, $e.MarginBounds)}); $printDoc.Print(); $img.Dispose()}"`;
              }
            } else if (process.platform === 'darwin') {
              // macOS print command with DNP optimization
              if (cleanName.includes('DNP') || cleanName.includes('DS-RX1')) {
                printCommand = `lpr -P "${cleanName}" -o media=4x6in -o fit-to-page "${tempFilePath}"`;
              } else {
                printCommand = `lpr -P "${cleanName}" "${tempFilePath}"`;
              }
            } else {
              // Linux print command with CUPS optimization for DNP
              if (cleanName.includes('DNP') || cleanName.includes('DS-RX1')) {
                printCommand = `lpr -P "${cleanName}" -o media=4x6in -o fit-to-page -o outputorder=normal "${tempFilePath}"`;
              } else {
                printCommand = `lpr -P "${cleanName}" "${tempFilePath}"`;
              }
            }
            
            console.log(`Executing print command: ${printCommand}`);
            
            exec(printCommand, (error, stdout, stderr) => {
              // Clean up temp file
              try {
                fs.unlinkSync(tempFilePath);
              } catch (cleanupError) {
                console.warn('Failed to cleanup temp file:', cleanupError);
              }
              
              if (error) {
                console.error(`Print command failed:`, error);
                console.error(`stderr:`, stderr);
                reject(error);
              } else {
                console.log(`Successfully printed photo ${photoIndex + 1}, copy ${copyIndex + 1}`);
                console.log(`stdout:`, stdout);
                successCount++;
                resolve();
              }
            });
          });
          
          // Delay between prints for DNP printer stability
          await new Promise(resolve => setTimeout(resolve, 1000));
          
        } catch (printError) {
          console.error(`Failed to print photo ${photoIndex + 1}, copy ${copyIndex + 1}:`, printError);
        }
      }
    }
    
    const totalExpected = photos.length * copies;
    const success = successCount === totalExpected;
    
    console.log(`Print job completed: ${successCount}/${totalExpected} prints successful`);
    return success;
    
  } catch (error) {
    console.error('Print job failed:', error);
    return false;
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