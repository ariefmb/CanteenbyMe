'use client';

import { TCanteens } from '@/libs/types';
import { createContext, useContext } from 'react';

export const CanteenContext = createContext(
  {} as {
    canteens: TCanteens[] | undefined;
    loading: boolean | undefined;
    error: string | undefined;
  }
);

export function useCanteenContext() {
  const context = useContext(CanteenContext);

  if (!context) {
    throw new Error('useCanteenContext harus digunakan dalam CanteenProvider');
  }

  return context;
}
