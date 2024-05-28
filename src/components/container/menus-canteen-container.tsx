import { TMenus } from '@/libs/types';
import React from 'react';
import MenusCard from '../UI/menus-card';

interface MenusCanteenContainerProps {
  menus?: TMenus[];
}

export default function MenusCanteenContainer({
  menus,
}: MenusCanteenContainerProps) {
  return (
    <>
      <div className='text-slate-800'>
        {!menus?.length ? (
          <span>All Menus will be displayed here.</span>
        ) : (
          menus.map((menu) => <MenusCard menu={menu} />)
        )}
      </div>
    </>
  );
}
