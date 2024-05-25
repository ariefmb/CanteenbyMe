'use client';

import { TCanteens } from '@/libs/types';
import CanteenCard from '../UI/canteen-card';

interface CanteensContainerProps {
  canteens?: TCanteens[];
}

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
          <span>All Canteens will be displayed here.</span>
        ) : (
          canteens.map((canteen) => (
            <CanteenCard key={canteen.id} canteen={canteen} />
          ))
        )}
      </div>
    </>
  );
}