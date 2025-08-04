// API service for communicating with FastAPI backend
export class ApiService {
  private static instance: ApiService;
  private baseUrl: string;
  
  private constructor() {
    // Default to localhost, can be configured via environment variable
    this.baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  }
  
  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  // Convert data URL to File object
  private dataURLToFile(dataURL: string, filename: string): File {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  // Generate photo strip using backend
  async generatePhotoStrip(
    photos: Array<{ dataUrl: string; filter: string; frame: string | null }>,
    quote: string = "Good Times"
  ): Promise<Blob> {
    try {
      const formData = new FormData();
      
      // Add up to 4 photos (pad with duplicates if needed)
      const photoFiles = photos.slice(0, 4);
      while (photoFiles.length < 4) {
        photoFiles.push(photoFiles[photoFiles.length - 1] || photos[0]);
      }
      
      // Process photos with filters applied
      const processedPhotos = await Promise.all(
        photoFiles.map(async (photo) => {
          const processedDataUrl = await this.applyFilterToDataUrl(photo.dataUrl, photo.filter);
          return { ...photo, dataUrl: processedDataUrl };
        })
      );
      
      processedPhotos.forEach((photo, index) => {
        const file = this.dataURLToFile(photo.dataUrl, `image${index + 1}.jpg`);
        formData.append(`image${index + 1}`, file);
      });
      
      formData.append('quote', quote);
      
      const response = await fetch(`${this.baseUrl}/generate`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.blob();
    } catch (error) {
      console.error('Failed to generate photo strip:', error);
      throw error;
    }
  }

  // Apply CSS filter to image data URL
  private applyFilterToDataUrl(dataUrl: string, filter: string): string {
    return new Promise<string>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          resolve(dataUrl);
          return;
        }
        
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Apply filter based on type
        switch (filter) {
          case 'grayscale':
            ctx.filter = 'grayscale(100%)';
            break;
          case 'sepia':
            ctx.filter = 'sepia(80%)';
            break;
          case 'ghibli':
            ctx.filter = 'brightness(105%) contrast(110%) saturate(140%) hue-rotate(2deg) sepia(20%)';
            break;
          default:
            ctx.filter = 'none';
        }
        
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/jpeg', 0.9));
      };
      img.onerror = () => {
        console.error('Failed to load image for filter application');
        resolve(dataUrl); // Return original if filter fails
      };
      img.src = dataUrl;
    }) as any; // Type assertion to handle Promise return in sync context
  }
  // Print photo strip using backend
  async printPhotoStrip(copies: number = 1): Promise<{ status: string; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/print`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          copies: copies
        }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Failed to print photo strip:', error);
      return {
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  // Convert image to Ghibli style using backend
  async convertToGhibliStyle(imageDataUrl: string): Promise<string> {
    // Add a small delay to prevent rapid duplicate calls
    await new Promise(resolve => setTimeout(resolve, 100));
    
    try {
      const file = this.dataURLToFile(imageDataUrl, 'image.jpg');
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await fetch(`${this.baseUrl}/gibli-style`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Ghibli conversion failed:', error);
      throw error;
    }
  }


}