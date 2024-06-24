'use client';

import { TCanteens } from '@/libs/types';
import CanteenOpenCard from '@/components/canteens/canteen-open-card';
import CanteenCloseCard from '@/components/canteens/canteen-close-card';

interface CanteenCardProps {
  canteen: TCanteens;
}

export default function CanteenCard({ canteen }: CanteenCardProps) {
  return (
    <>
      {canteen.open ? (
        <CanteenOpenCard canteen={canteen} />
      ) : (
        <CanteenCloseCard canteen={canteen} />
      )}
    </>
  );
}
