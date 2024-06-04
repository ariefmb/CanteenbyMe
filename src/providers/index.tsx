import React from 'react';
import CanteensProvider from '@/providers/canteens-provider';
import { AuthProvider } from '@/context/auth-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <CanteensProvider>{children}</CanteensProvider>
    </AuthProvider>
  );
}
