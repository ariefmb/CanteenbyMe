'use client';

import CanteenCard from './canteen-card';
import { TCanteens } from '@/libs/types';
import { Alert, CustomFlowbiteTheme } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import 'react-loading-skeleton/dist/skeleton.css';
import CanteensCardSkeleton from '../skeletons/canteens-card-skeleton';

interface CanteensContainerProps {
  canteens?: TCanteens[];
  loading?: boolean;
  error?: string;
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
  loading,
  error,
}: CanteensContainerProps) {
  return (
    <div className='w-full min-h-screen'>
      <h1 className='text-slate-800 font-extrabold text-lg'>
        List kantin UPNVJ
      </h1>
      <div className='flex flex-wrap py-5 justify-center gap-5 md:justify-around'>
        {loading ? (
          <CanteensCardSkeleton cards={6} />
        ) : error ? (
          <Alert theme={customTheme} color='failure' icon={HiInformationCircle}>
            <p className='px-3'>{error}</p>
          </Alert>
        ) : (
          canteens?.map((canteen) => (
            <CanteenCard key={canteen.id} canteen={canteen} />
          ))
        )}
      </div>
    </div>
  );
}
