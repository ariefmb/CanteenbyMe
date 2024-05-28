import Image from 'next/image';
import React from 'react';
import { CustomFlowbiteTheme, Spinner } from 'flowbite-react';
import CanteenbyMeLogo from '@/images/logo/cbm-logo-only.png';
import CanteenbyMeText from '@/images/logo/cbm-text-only.png';
import WaveofLove from '@/images/background/wave-of-love.png';

const customTheme: CustomFlowbiteTheme['spinner'] = {
  base: 'animate-spin text-gray-500',
  color: {
    load: 'fill-slate-800',
  },
  size: {
    xl: 'h-24 w-24',
  },
};

export default function Loading() {
  return (
    <div className='absolute inset-0 flex flex-col justify-center items-center bg-background'>
      <Image
        src={WaveofLove}
        alt='Wave of Love Background'
        className='absolute -top-2 w-full rotate-180'
        priority
      />
      <div className='absolute flex items-center justify-center'>
        <Spinner
          theme={customTheme}
          color='load'
          size='xl'
          className='relative -top-8'
        />
        <Image
          src={CanteenbyMeLogo}
          alt='CanteenbyMe Logo'
          width={70}
          className='absolute bottom-[54px]'
          priority
        />
      </div>
      <div className='font-extrabold text-xl text-slate-900 mt-[80px]'>
        Loading...
      </div>
      <Image
        src={CanteenbyMeText}
        alt='Canteen by Me Text'
        width={180}
        className='absolute bottom-28'
        priority
      />
      <Image
        src={WaveofLove}
        alt='Wave of Love Background'
        className='absolute -bottom-2 w-full'
        priority
      />
    </div>
  );
}
