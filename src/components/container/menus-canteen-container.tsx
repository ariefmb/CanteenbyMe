import { TMenus } from '@/libs/types';
import React from 'react';
import MenusCard from '../UI/menus-card';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';

interface MenusCanteenContainerProps {
  menus?: TMenus[];
}

const customTheme: CustomFlowbiteTheme['alert'] = {
  base: 'flex flex-col p-4 text-sm mx-auto md:w-1/2',
  color: {
    failure:
      'bg-red-200 text-red-700 transition-all duration-300 hover:bg-red-300',
  },
};

export default function MenusCanteenContainer({
  menus,
}: MenusCanteenContainerProps) {

  return (
    <>
      <div className='text-slate-800'>
        {!menus?.length ? (
          <Alert theme={customTheme} color='failure' icon={HiInformationCircle}>
            <p className='px-3'>All Menus will be displayed here.</p>
          </Alert>
        ) : (
          menus.map((menu) => <MenusCard key={menu.id} menu={menu} />)
        )}
      </div>
    </>
  );
}
