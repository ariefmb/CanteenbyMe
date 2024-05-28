import React, { createContext, ReactNode, useContext, useState } from 'react';

type SearchContextType = {
  onClick: boolean;
  setOnClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [onClick, setOnClick] = useState(false);
  return (
    <SearchContext.Provider value={{ onClick, setOnClick }}>
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
