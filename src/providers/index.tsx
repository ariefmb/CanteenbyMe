import CanteensProvider from '@/providers/canteens-provider';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import CartProvider from './cart-provider';
import { AuthProvider } from '@/context/auth-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SessionProvider>
        <CanteensProvider>
          <CartProvider>{children}</CartProvider>
        </CanteensProvider>
      </SessionProvider>
    </AuthProvider>
  );
}
