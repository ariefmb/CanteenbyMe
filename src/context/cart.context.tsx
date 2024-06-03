import { createContext, useContext } from 'react';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

export const CartContext = createContext(
  {} as {
    cart: MenuItem[];
    addToCart: (menuItem: MenuItem) => void;
    updateQuantity: (menuItemId: string, quantity: number) => void;
    removeFromCart: (menuItemId: string) => void;
    getTotalItems: () => number | 0;
    getTotalPrice: () => number | 0;
  }
);

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCanteenContext harus digunakan dalam CanteenProvider');
  }

  return context;
}