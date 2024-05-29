import React, { createContext, ReactNode, useContext, useState } from 'react';

type SearchContextType = {
  onShow: boolean;
  setOnShow: React.Dispatch<React.SetStateAction<boolean>>;
  searchStatus: string | undefined;
  setStatus: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [onShow, setOnShow] = useState(false);
  const [searchStatus, setStatus] = useState<string | undefined>('idle');
  return (
    <SearchContext.Provider
      value={{ onShow, setOnShow, searchStatus, setStatus }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
