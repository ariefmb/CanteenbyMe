'use client';

import { TCanteens } from '@/libs/types';
import CanteenCloseCard from './canteen-close-card';
import CanteenOpenCard from './canteen-open-card';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Card } from 'flowbite-react';

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
