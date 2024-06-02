'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type TableContextType = {
  tableNumber: string | null;
  setTableNumber: (tableNumber: string | null) => void;
};

const TableContext = createContext<TableContextType | undefined>(undefined);

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [tableNumber, setTableNumber] = useState<string | null>(null);
  return (
    <TableContext.Provider value={{ tableNumber, setTableNumber }}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error('useTableContext must be used within a TableProvider');
  }
  return context;
};
