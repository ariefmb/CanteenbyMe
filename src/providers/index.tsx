import React from 'react';
import CanteensProvider from '@/providers/canteens-provider';
import CartProvider from './cart-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CanteensProvider>
      <CartProvider>{children}</CartProvider>
    </CanteensProvider>
  );
}
