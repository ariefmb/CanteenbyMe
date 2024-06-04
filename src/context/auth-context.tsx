'use client';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextType = {
  name: string | undefined;
  setName: (name: string) => void;
  email: string | undefined;
  setEmail: (email: string) => void;
  showToast: boolean;
  setShowToast: (showToast: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  return (
    <AuthContext.Provider
      value={{ showToast, setShowToast, name, setName, email, setEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};
