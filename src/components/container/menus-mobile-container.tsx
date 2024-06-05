import React from 'react';
import MenusCanteenContainer from './menus-canteen-container';
import CartSection from '../UI/cart-section';
import { TMenus } from '@/libs/types';

interface MenusContainerProps {
  menus: TMenus[];
}

export default function MenusMobileContainer({ menus }: MenusContainerProps) {
  return (
    <>
      {/* <section className='dropdown w-full h-20 bg-slate-400 rounded-xl'></section> */}
      <section>
        <MenusCanteenContainer menus={menus} />
      </section>
      <section className='w-full flex justify-center'>
        <CartSection />
      </section>
    </>
  );
}
