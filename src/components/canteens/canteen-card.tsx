'use client';

import { TCanteens } from '@/libs/types';
import CanteenOpenCard from './canteen-open-card';
import CanteenCloseCard from './canteen-close-card';

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
