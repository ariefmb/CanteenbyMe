'use client'

import { SearchContext } from '@/context/search.context';
import React, { useState } from 'react';

export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [onShow, setOnShow] = useState(false);
  const [searchStatus, setStatus] = useState<string | undefined>('idle');
  return (
    
    <SearchContext.Provider
      value={{ onShow, setOnShow, searchStatus, setStatus }}
    >
      {children}
    </SearchContext.Provider>
  );
}
