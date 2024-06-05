'use client';

import React, { useEffect, useState } from 'react';
import MenusCanteenContainer from './menus-canteen-container';
import { TMenus } from '@/libs/types';
import CartSection from '../UI/cart-section';

interface MenusContainerProps {
  menus: TMenus[];
}

export default function MenusDesktopContainer({ menus }: MenusContainerProps) {
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlSideCard = () => {
    if (window.scrollY > lastScrollY) {
      setIsFixed(false);
      setTimeout(() => {
        setIsFixed(true);
      }, 1000);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlSideCard);
    return () => {
      window.removeEventListener('scroll', controlSideCard);
    };
  }, [lastScrollY]);

  return (
    <div className='relative flex justify-center gap-14'>
      <section className='w-2/3 flex justify-center'>
        <MenusCanteenContainer menus={menus} />
      </section>
      <section
        className={`scrollbar w-[350px] max-h-[350px] flex flex-col justify-start items-center gap-5 transition-all duration-500 sticky top-0 ${
          isFixed ? 'fixed top-10' : 'sticky -top-52'
        }`}
      >
        <div className='w-full text-left font-bold text-slate-800 text-xl'></div>
        <div className='dropdown w-full flex items-center justify-center h-10 bg-slate-400 rounded-xl'>
          Pilih Kategori
        </div>

        <CartSection />
      </section>
    </div>
  );
}
