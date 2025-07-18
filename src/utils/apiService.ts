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
      
      photoFiles.forEach((photo, index) => {
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

  // Test backend connection - try the generate endpoint since root might not exist
  async testConnection(): Promise<boolean> {
    try {
      // First try a simple GET to see if server responds
      const response = await fetch(`${this.baseUrl}/generate`, {
        method: 'GET',
      });
      
      // Even if it returns 405 (Method Not Allowed), it means the server is responding
      return response.status === 405 || response.ok;
    } catch (error) {
      console.error('Backend connection test failed:', error);
      
      // Try alternative endpoint or just check if server is reachable
      try {
        const healthResponse = await fetch(`${this.baseUrl}/health`, {
          method: 'GET',
        });
        return healthResponse.ok;
      } catch (healthError) {
        return false;
      }
    }
  }

  // Get backend status and info
  async getBackendStatus(): Promise<{ 
    connected: boolean; 
    version?: string; 
    endpoints?: string[];
    error?: string;
  }> {
    try {
      // Try to get server info
      const response = await fetch(`${this.baseUrl}/info`, {
        method: 'GET',
      });
      
      if (response.ok) {
        const info = await response.json();
        return {
          connected: true,
          ...info
        };
      }
      
      // If info endpoint doesn't exist, just test basic connectivity
      const isConnected = await this.testConnection();
      return {
        connected: isConnected,
        endpoints: isConnected ? ['/generate', '/print'] : []
      };
      
    } catch (error) {
      return {
        connected: false,
        error: error instanceof Error ? error.message : 'Connection failed'
      };
    }
  }
}