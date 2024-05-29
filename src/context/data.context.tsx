// data.context.tsx
'use client';

import Canteens from '@/app/canteens/page';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface CanteenContextType {
  canteens: TCanteens[] | undefined;
  setCanteens: (canteens: TCanteens[] | undefined) => void;
}

export const CanteenContext = createContext<CanteenContextType | undefined>(
  undefined
);

interface CanteenProviderProps {
  children: ReactNode;
}

export const CanteenProvider = ({ children }: CanteenProviderProps) => {
  const [canteens, setCanteens] = useState<TCanteens[] | undefined>();

  useEffect(() => {
    const fetchAllCanteens = async () => {
      try {
        const canteensRes: TCanteens[] = await retrieveAllCanteens();
        setCanteens(canteensRes);
      } catch (error) {
        console.error('error when fetching canteens', error);
      }
    };

    fetchAllCanteens();
  }, []);
  return (
    <CanteenContext.Provider value={{ canteens, setCanteens }}>
      {children}
    </CanteenContext.Provider>
  );
};

export const useCanteenContext = () => {
  const context = useContext(CanteenContext);
  if (!context) {
    throw new Error('useCanteenContext harus digunakan dalam CanteenProvider');
  }
  return context;
};
