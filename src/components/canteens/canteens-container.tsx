'use client';

import { TCanteens } from '@/libs/types';
import CanteenCard from './canteen-card';

interface CanteensContainerProps {
  canteens?: TCanteens[];
}

export default function CanteensContainer({
  canteens = [],
}: CanteensContainerProps) {
  return (
    <div className=''>
      {!canteens?.length ? (
        <span>All Canteens will be displayed here.</span>
      ) : (
        canteens.map((canteen) => (
          <CanteenCard key={canteen.id} canteen={canteen} />
        ))
      )}
    </div>
  );
}
