# Smart Photo Booth - FastAPI Backend Integration

A professional photo booth application with FastAPI backend for photo strip generation and CUPS printing.

## 🚀 Production Features

### 🔒 Security & Kiosk Mode
- **Full Kiosk Mode**: Prevents access to browser controls, dev tools, and navigation
- **Password Protection**: Admin settings protected with configurable password
- **Lock System**: Complete system lockdown functionality
- **Fullscreen Mode**: Automatic fullscreen with no escape options

### 🖨️ FastAPI Backend Integration
- **Server-side Photo Strip Generation**: Professional 4x6 inch strips with 2x6 layout
- **CUPS Printing**: Direct printing via CUPS (Common Unix Printing System)
- **PIL Image Processing**: High-quality image resizing and layout
- **Custom Quotes & Timestamps**: Personalized photo strips
- **Logo Support**: Optional logo placement in strips

### 📸 Enhanced Photo Capture
- **Dual Capture Modes**: Single shot or continuous capture
- **Real-time Preview**: Live webcam feed with overlay
- **Photo Editing**: Filters and frames with live preview
- **Batch Processing**: Handle multiple photos efficiently

### 💰 Complete Payment Flow
1. **Welcome** - System introduction with backend status
2. **Capture** - Photo taking with mode selection
3. **Preview** - Photo editing and enhancement
4. **Payment** - User details and payment processing
5. **Delivery** - Download, email, and backend printing

## 🛠️ Backend Setup

### FastAPI Server Requirements
```bash
# Install Python dependencies
pip install fastapi uvicorn pillow pycups python-multipart

# Start the FastAPI server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Backend Features
- **POST /generate**: Creates photo strips from 4 images
- **POST /print**: Prints generated strips via CUPS
- **CORS enabled**: Allows frontend communication
- **File upload handling**: Processes multiple image files
- **PIL image processing**: Professional photo strip layout

### CUPS Printer Setup
```bash
# Install CUPS (Ubuntu/Debian)
sudo apt-get install cups cups-client

# Add printer to CUPS
sudo lpadmin -p YourPrinter -E -v usb://YourPrinter -m everywhere

# Test printing
lpr -P YourPrinter test.txt
```

## 📋 Frontend Setup

### Installation
```bash
npm install
```

### Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Edit .env file
VITE_API_URL=http://localhost:8000
```

### Development
```bash
# Start frontend development server
npm run dev

# Start FastAPI backend (in separate terminal)
uvicorn main:app --reload

# Start as desktop app (Electron)
npm run start-desktop
```

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Build desktop app
npm run build-electron
```

## 🔧 Configuration

### Backend URL Configuration
- Default: `http://localhost:8000`
- Configure via `VITE_API_URL` environment variable
- Test connection in Settings modal

### Photo Strip Layout
- **Format**: 4x6 inch (1200x1800 pixels)
- **Layout**: Two 2x6 inch strips side by side
- **Photos**: 4 photos per strip, evenly spaced
- **Elements**: Logo area, photos, quote with timestamp

### Pricing Configuration
Edit `src/components/payment/PaymentScreen.tsx`:
```javascript
const digitalPrice = 100; // ₹100 for digital photos
const printPricePerCopy = 50; // ₹50 per print copy
```

## 🚀 Deployment Options

### Option 1: Web-Based Kiosk
```bash
npm run build
# Deploy dist/ folder to web server
# Configure backend URL in production
```

### Option 2: Electron Desktop App
```bash
npm run build-electron
# Creates standalone executable
```

### Option 3: Docker Deployment
```dockerfile
# Frontend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📊 System Architecture

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│   React Frontend│ ──────────────► │  FastAPI Backend│
│   (Photo Booth) │                 │   (Processing)  │
└─────────────────┘                 └─────────────────┘
         │                                   │
         │                                   │
         ▼                                   ▼
┌─────────────────┐                 ┌─────────────────┐
│   Web Browser   │                 │   CUPS Printer  │
│   (Kiosk Mode)  │                 │    (Physical)   │
└─────────────────┘                 └─────────────────┘
```

## 🔧 Troubleshooting

### Backend Connection Issues
1. **Check FastAPI server**: Ensure `uvicorn main:app --reload` is running
2. **CORS configuration**: Verify CORS settings in FastAPI
3. **Network connectivity**: Test `curl http://localhost:8000`
4. **Firewall settings**: Ensure port 8000 is accessible

### Printing Issues
1. **CUPS status**: Check `lpstat -p` for printer status
2. **Printer connectivity**: Verify printer is connected and powered
3. **Print queue**: Check `lpq` for pending jobs
4. **Permissions**: Ensure user has printing permissions

### Frontend Issues
1. **Environment variables**: Check `.env` file configuration
2. **Build errors**: Clear `node_modules` and reinstall
3. **Browser compatibility**: Use Chrome/Edge for best results
4. **Kiosk mode**: Test fullscreen functionality

## 🔄 API Endpoints

### POST /generate
```json
{
  "image1": "file",
  "image2": "file", 
  "image3": "file",
  "image4": "file",
  "logo": "file (optional)",
  "quote": "Good Times"
}
```

### POST /print
```json
{
  "status": "Printing on: printer_name"
}
```

## 📞 Support

For production deployment support:
- Backend server configuration
- CUPS printer setup
- Network configuration assistance
- Custom feature development

## 🔄 Updates

- Frontend: Standard web deployment updates
- Backend: Server restart required for updates
- Always test in staging environment first