import CanteensProvider from '@/providers/canteens-provider';
<<<<<<< HEAD
=======
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import CartProvider from './cart-provider';
>>>>>>> 054741667edaad6c437564bab8444503b5f74e93
import { AuthProvider } from '@/context/auth-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
<<<<<<< HEAD
      <CanteensProvider>{children}</CanteensProvider>
=======
      <SessionProvider>
        <CanteensProvider>
          <CartProvider>{children}</CartProvider>
        </CanteensProvider>
      </SessionProvider>
>>>>>>> 054741667edaad6c437564bab8444503b5f74e93
    </AuthProvider>
  );
}
