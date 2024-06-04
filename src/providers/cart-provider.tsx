'use client';

import { CartContext } from '@/context/cart.context';
import React, { useState } from 'react';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  quantity?: number;
}

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<MenuItem[]>([]);

  const addToCart = (menuItem: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === menuItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === menuItem.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...menuItem, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (menuItemId: string, quantity: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === menuItemId ? { ...item, quantity } : item
      );
    });
  };

  const removeFromCart = (menuItemId: string) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== menuItemId);
    });
  };
  
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 0),
      0
    );
  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
