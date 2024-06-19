import CanteensProvider from '@/providers/canteens-provider';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import CartProvider from './cart-provider';
import { AuthProvider } from '@/context/auth.context';
import ReactQueryProvider from './react-query-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SessionProvider>
        <ReactQueryProvider>
          <CanteensProvider>
            <CartProvider>{children}</CartProvider>
          </CanteensProvider>
        </ReactQueryProvider>
      </SessionProvider>
    </AuthProvider>
  );
}
