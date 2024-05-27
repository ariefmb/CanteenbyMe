'use client';

import { TCanteens } from '@/libs/types';
import CanteenCard from '../canteens/canteen-card';

interface CanteensContainerProps {
  canteens?: TCanteens[];
}

export default function CanteensContainer({
  canteens,
}: CanteensContainerProps) {
  return (
    <>
      <h1 className='text-slate-800 font-extrabold text-lg bg-background'>
        List kantin UPNVJ
      </h1>
      <div className='flex flex-wrap py-5 justify-center gap-5 md:justify-around bg-background'>
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
