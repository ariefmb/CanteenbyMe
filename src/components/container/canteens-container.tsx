'use client';

import { TCanteens } from '@/libs/types';
import CanteenCard from '../UI/canteen-card';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';

interface CanteensContainerProps {
  canteens?: TCanteens[];
}

const customTheme: CustomFlowbiteTheme['alert'] = {
  base: 'flex flex-col p-4 text-sm mx-auto md:w-1/2',
  color: {
    failure:
      'bg-red-200 text-red-700 transition-all duration-300 hover:bg-red-300',
  },
};

export default function CanteensContainer({
  canteens,
}: CanteensContainerProps) {
  return (
    <>
      <h1 className='text-slate-800 font-extrabold text-lg'>
        List kantin UPNVJ
      </h1>
      <div className='flex flex-wrap py-5 justify-center gap-5 md:justify-around'>
        {!canteens?.length ? (
          <Alert theme={customTheme} color='failure' icon={HiInformationCircle}>
            <p className='px-3'>All Menus will be displayed here.</p>
          </Alert>
        ) : (
          canteens.map((canteen) => (
            <CanteenCard key={canteen.id} canteen={canteen} />
          ))
        )}
      </div>
    </>
  );
}
