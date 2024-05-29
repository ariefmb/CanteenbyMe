'use client';

import CBMHeader from '@/images/logo/cbm-upnvj-header.png';
import Image from 'next/image';
import { Badge, CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['badge'] = {
  root: {
    base: 'w-[63px] h-[63px] flex items-center justify-center text-center font-normal text-slate-900 md:w-[70px] md:h-[70px] md:text-xl',
    color: {
      purple: 'bg-[#A8B2DE]/50 rounded-2xl',
    },
  },
  icon: {
    off: 'rounded-2xl py-5 px-2',
  },
};

export default function Header({
  tableNumber,
}: {
  tableNumber: string | null;
}) {
  return (
    <div className='bg-background h-24'>
      <div className='w-full bg-[#E0E4F9] h-full rounded-b-[50px] flex items-center px-5 justify-between md:px-10'>
        <Image
          src={CBMHeader}
          alt='CanteenbyMe Header Logo'
          className='w-[235px] md:w-[350px]'
          priority
        />
        {tableNumber === null ? null : (
          <Badge
            theme={customTheme}
            color='purple'
            className='w-[63px] h-[63px] rounded-2xl text-center py-5 px-2 font-normal text-slate-800'
          >
            Meja <span className='font-extrabold'>{tableNumber}</span>
          </Badge>
        )}
      </div>
    </div>
  );
}
