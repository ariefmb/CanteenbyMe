'use client'

import React, { createContext, useContext } from 'react';

export const CategoryContext = createContext(
  {} as {
    categoryFilter: string;
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  }
);

export function useCategoryContext() {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error('useCategoryContext harus digunakan dalam CanteenProvider');
  }

  return context;
}
