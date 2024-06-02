'use client';

import { TCanteens } from '@/libs/types';
import CanteenCard from '@/components/UI/canteen-card';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert, CustomFlowbiteTheme } from 'flowbite-react';
import Skeleton from 'react-loading-skeleton';
import { Card } from 'flowbite-react';
import 'react-loading-skeleton/dist/skeleton.css';

interface CanteensContainerProps {
  canteens?: TCanteens[];
  loading?: boolean;
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
}: CanteensContainerProps) {
  return (
    <>
      <h1 className='text-slate-800 font-extrabold text-lg'>
        List kantin UPNVJ
      </h1>
      <div className='flex flex-wrap py-5 justify-center gap-5 md:justify-around'>
        {loading ? (
          Array(4)
            .fill(null)
            .map((_, index) => (
              <Card
                key={index}
                className='w-[327px] md:w-[498px] h-[160px] rounded-lg'
              >
                <Skeleton height='100%' width='100%' />
              </Card>
            ))
        ) : !canteens?.length ? (
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
