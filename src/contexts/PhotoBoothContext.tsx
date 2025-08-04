import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PhotoType = {
  dataUrl: string;
  filter: string;
  frame: string | null;
};

export type UserInfoType = {
  name: string;
  email: string;
  copies: number;
  ghibliGenerations: number;
  packageType: 'basic' | 'ghibli';
};

export type SettingsType = {
  ghibliConversionLimit: number;
  ghibliConversionsUsed: number;
  pricing?: {
    [key: string]: number;
  };
};

type StageType = 'welcome' | 'payment' | 'capture' | 'preview' | 'delivery';

interface PhotoBoothContextType {
  stage: StageType;
  setStage: (stage: StageType) => void;
  photos: PhotoType[];
  addPhoto: (photo: PhotoType) => void;
  removePhoto: (index: number) => void;
  resetPhotos: () => void;
  updatePhoto: (index: number, photo: PhotoType) => void;
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
  sessionPaid: boolean;
  setSessionPaid: (paid: boolean) => void;
  selectedPhotoIndex: number;
  setSelectedPhotoIndex: (index: number) => void;
  maxPhotos: number;
  isLocked: boolean;
  setIsLocked: (locked: boolean) => void;
  kioskMode: boolean;
  setKioskMode: (mode: boolean) => void;
  photoStripBlob: Blob | null;
  setPhotoStripBlob: (blob: Blob | null) => void;
  settings: SettingsType;
  setSettings: (settings: SettingsType) => void;
  swapPhoto: (index: number, newPhoto: PhotoType) => void;
  updateAllPhotos: (newPhotos: PhotoType[]) => void;
}

const PhotoBoothContext = createContext<PhotoBoothContextType | undefined>(undefined);

export const usePhotoBooth = () => {
  const context = useContext(PhotoBoothContext);
  if (!context) {
    throw new Error('usePhotoBooth must be used within a PhotoBoothProvider');
  }
  return context;
};

export const PhotoBoothProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState<StageType>('welcome');
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfoType>({ 
    name: '', 
    email: '', 
    copies: 2, 
    ghibliGenerations: 0,
    packageType: 'basic'
  });
  const [sessionPaid, setSessionPaid] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [kioskMode, setKioskMode] = useState(false);
  const [photoStripBlob, setPhotoStripBlob] = useState<Blob | null>(null);
  const [settings, setSettings] = useState<SettingsType>({
    ghibliConversionLimit: 2, // Fixed at 2 for Ghibli package
    ghibliConversionsUsed: 0
  });
  const maxPhotos = 4; // 4 photos for the strip layout

  const addPhoto = (photo: PhotoType) => {
    if (photos.length < maxPhotos) {
      setPhotos(prevPhotos => [...prevPhotos, photo]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prevPhotos => prevPhotos.filter((_, i) => i !== index));
  };

  const updatePhoto = (index: number, photo: PhotoType) => {
    setPhotos(prevPhotos => {
      const newPhotos = [...prevPhotos];
      // Ensure we have enough slots
      while (newPhotos.length <= index) {
        newPhotos.push({
          dataUrl: '',
          filter: 'normal',
          frame: null
        });
      }
      newPhotos[index] = photo;
      return newPhotos;
    });
  };

  const updateAllPhotos = (newPhotos: PhotoType[]) => {
    setPhotos([...newPhotos]);
  };
  const swapPhoto = (index: number, newPhoto: PhotoType) => {
    setPhotos(prevPhotos => {
      const newPhotos = [...prevPhotos];
      // Ensure we have enough slots
      while (newPhotos.length <= index) {
        newPhotos.push({
          dataUrl: '',
          filter: 'normal',
          frame: null
        });
      }
      newPhotos[index] = newPhoto;
      return newPhotos;
    });
  };

  const resetPhotos = () => {
    setPhotos([]);
    setSessionPaid(false);
    setSelectedPhotoIndex(0);
    setPhotoStripBlob(null); // Reset photo strip blob
    setUserInfo({ 
      name: '', 
      email: '', 
      copies: 2, 
      ghibliGenerations: 0,
      packageType: 'basic'
    });
    setSettings(prev => ({ ...prev, ghibliConversionsUsed: 0 }));
  };

  return (
    <PhotoBoothContext.Provider
      value={{
        stage,
        setStage,
        photos,
        addPhoto,
        removePhoto,
        resetPhotos,
        updatePhoto,
        userInfo,
        setUserInfo,
        sessionPaid,
        setSessionPaid,
        selectedPhotoIndex,
        setSelectedPhotoIndex,
        maxPhotos,
        isLocked,
        setIsLocked,
        kioskMode,
        setKioskMode,
        photoStripBlob,
        setPhotoStripBlob,
        settings,
        setSettings,
        swapPhoto,
        updateAllPhotos
      }}
    >
      {children}
    </PhotoBoothContext.Provider>
  );
};