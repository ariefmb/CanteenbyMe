import CanteensProvider from '@/providers/canteens-provider';
import { SessionProvider } from 'next-auth/react';
import React from 'react';
import CartProvider from './cart-provider';
import { AuthProvider } from '@/context/auth.context';
import CategoryFilterProvider from './category-filter-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SessionProvider>
        <CanteensProvider>
          <CategoryFilterProvider>
            <CartProvider>{children}</CartProvider>
          </CategoryFilterProvider>
        </CanteensProvider>
      </SessionProvider>
    </AuthProvider>
  );
}
