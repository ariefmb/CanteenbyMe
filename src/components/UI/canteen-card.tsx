'use client';

import { TCanteens } from '@/libs/types';
import { Badge, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CanteenOpenCard from './canteen-open-card';
import CanteenCloseCard from './canteen-close-card';

interface CanteenCardProps {
  canteen: TCanteens;
}

const customTheme: CustomFlowbiteTheme = {
  badge: {
    root: {
      base: 'flex h-fit w-fit items-center justify-center font-semibold',
      color: {
        pink: 'bg-red-200 text-pink-800',
      },
    },
  },
};

export default function CanteenCard({ canteen }: CanteenCardProps) {
  const pathname = usePathname();

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
