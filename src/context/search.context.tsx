'use client'

import React, { createContext, useContext } from 'react';

type SearchContextType = {
  onShow: boolean;
  setOnShow: React.Dispatch<React.SetStateAction<boolean>>;
  searchStatus: string | undefined;
  setStatus: React.Dispatch<React.SetStateAction<string | undefined>>;
  hideCart: boolean;
  setHideCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}
