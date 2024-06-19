'use client';

import { TMenus } from '@/libs/types';
import { useEffect, useState } from 'react';
import CartSection from '../UI/cart-section';
import CategoryFilter from '../UI/category-filter';
import MenusCanteenContainer from './menus-canteen-container';

interface MenusContainerProps {
  menus: TMenus[];
  isLoading: boolean;
  error?: string;
}

export default function MenusDesktopContainer({
  menus,
  isLoading,
  error,
}: MenusContainerProps) {
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
    <div className='relative w-full min-h-[350px] flex justify-center gap-14'>
      <section className='w-2/3 flex justify-center'>
        <MenusCanteenContainer
          menus={menus}
          isLoading={isLoading}
          error={error}
        />
      </section>
      <section
        className={`scrollbar w-[350px] max-h-[350px] flex flex-col justify-start items-center gap-5 transition-all duration-500 sticky top-0 ${
          isFixed ? 'fixed top-10' : 'sticky -top-52'
        }`}
      >
        <section className='w-full'>
          <div className='w-full text-left font-bold text-slate-800 text-xl mb-2'>
            Pilih Kategori Menu
          </div>
          <div className='dropdown w-full flex flex-col gap-1 items-center justify-center min-h-10 text-slate-800 font-bold rounded-xl'>
            <CategoryFilter />
          </div>
        </section>

        <CartSection isLoading={isLoading} />
      </section>
    </div>
  );
}
