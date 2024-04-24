// src/contexts/ScrollContext.ts
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface ScrollContextType {
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [bgColor, setBgColor] = useState<string>('black');

  return (
    <ScrollContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </ScrollContext.Provider>
  );
};
