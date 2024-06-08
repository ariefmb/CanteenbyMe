'use client';

import { SearchContext } from '@/context/search.context';
import React, { useState } from 'react';

export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [onShow, setOnShow] = useState(false);
  const [searchStatus, setStatus] = useState<string | undefined>('idle');
  const [hideCart, setHideCart] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        onShow,
        setOnShow,
        searchStatus,
        setStatus,
        hideCart,
        setHideCart,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
