'use client';

import CBMHeader from '@/images/logo/cbm-upnvj-header.png';
import Image from 'next/image';
import { Badge, CustomFlowbiteTheme, Flowbite, theme } from 'flowbite-react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const customTheme: CustomFlowbiteTheme['badge'] = {
  root: {
    color: {
      purple: 'bg-[#A8B2DE]/50',
    },
  },
};

export default function Header() {
  const table = useSearchParams();
  const params = table ? table.get('table') : null;
  return (
    <div className='bg-background h-24'>
      <div className='w-full bg-[#E0E4F9] h-full rounded-b-[50px] flex items-center px-5 justify-between md:px-10'>
        <Image
          src={CBMHeader}
          alt='CanteenbyMe Header Logo'
          className='w-[235px] md:w-[350px]'
          priority
        />
        <Suspense>
          <Badge
            theme={customTheme}
            color='purple'
            className='w-[63px] h-[63px] rounded-2xl text-center py-5 px-2 font-normal text-slate-800'
          >
            Meja <span className='font-extrabold'>{params}</span>
          </Badge>
        </Suspense>
      </div>
    </div>
  );
}
