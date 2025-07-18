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
};

type StageType = 'welcome' | 'capture' | 'preview' | 'payment' | 'delivery';

interface PhotoBoothContextType {
  stage: StageType;
  setStage: (stage: StageType) => void;
  photos: PhotoType[];
  addPhoto: (photo: PhotoType) => void;
  removePhoto: (index: number) => void;
  resetPhotos: () => void;
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
  sessionPaid: boolean;
  setSessionPaid: (paid: boolean) => void;
  selectedPhotoIndex: number;
  setSelectedPhotoIndex: (index: number) => void;
  maxPhotos: number;
  isLocked: boolean;
  setIsLocked: (locked: boolean) => void;
  shouldPrint: boolean;
  setShouldPrint: (print: boolean) => void;
  kioskMode: boolean;
  setKioskMode: (mode: boolean) => void;
  backendConnected: boolean;
  setBackendConnected: (connected: boolean) => void;
  photoStripBlob: Blob | null;
  setPhotoStripBlob: (blob: Blob | null) => void;
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
  const [userInfo, setUserInfo] = useState<UserInfoType>({ name: '', email: '', copies: 2 });
  const [sessionPaid, setSessionPaid] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [shouldPrint, setShouldPrint] = useState(false);
  const [kioskMode, setKioskMode] = useState(false);
  const [backendConnected, setBackendConnected] = useState(false);
  const [photoStripBlob, setPhotoStripBlob] = useState<Blob | null>(null);
  const maxPhotos = 4; // 4 photos for the strip layout

  const addPhoto = (photo: PhotoType) => {
    if (photos.length < maxPhotos) {
      setPhotos(prevPhotos => [...prevPhotos, photo]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const resetPhotos = () => {
    setPhotos([]);
    setSessionPaid(false);
    setShouldPrint(false);
    setSelectedPhotoIndex(0);
    setUserInfo({ name: '', email: '', copies: 2 });
    setPhotoStripBlob(null);
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
        userInfo,
        setUserInfo,
        sessionPaid,
        setSessionPaid,
        selectedPhotoIndex,
        setSelectedPhotoIndex,
        maxPhotos,
        isLocked,
        setIsLocked,
        shouldPrint,
        setShouldPrint,
        kioskMode,
        setKioskMode,
        backendConnected,
        setBackendConnected,
        photoStripBlob,
        setPhotoStripBlob
      }}
    >
      {children}
    </PhotoBoothContext.Provider>
  );
};