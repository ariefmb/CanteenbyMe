'use client';

import HistoryButton from '@/components/UI/history-button';
import HomeButton from '@/components/UI/home-button';
import circleLeftBottom from '@/images/background/circle-left-bottom.png';
import circleTopRight from '@/images/background/circle-top-right.png';
import orderVerified from '@/images/icon/order-verified.png';
import icon404 from '@/images/icon/404-icon.png';
import CBMLogo from '@/images/logo/cbm-side-logo.png';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='bg-background max-h-screen'>
      <Image
        src={circleTopRight}
        alt='background top right'
        width={160}
        height={160}
        className='absolute top-0 right-0'
        priority
      />
      <div className='flex flex-col w-full min-h-screen items-center justify-evenly'>
        <Image
          src={CBMLogo}
          alt='background top right'
          width={216}
          height={60}
          className='block z-10'
          priority
        />
        <div className='flex flex-col items-center justify-evenly bg-gradient-to-b from-white to-primary rounded-[20px] mx-auto w-[321px] h-[402px] md:h-[325px] z-10'>
          <div className='text-center'>
            <h1 className='font-extrabold text-[56px] text-slate-800'>404</h1>
            <p className='text-sm text-slate-800 font-bold'>Page Not Found</p>
          </div>
          <Image
            src={icon404}
            alt='background top right'
            width={204}
            height={204}
            className='block z-10 md:w-[150px] md:h-[150px]'
            priority
          />
          <div className='text-center'>
            <p className='text-xs font-bold text-slate-600'>
              Halaman yang kamu cari tidak ada atau sedang mengalami perbaikan.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-3 md:flex-row'>
          <HomeButton />
        </div>
      </div>
      <Image
        src={circleLeftBottom}
        alt='background top right'
        width={100}
        height={100}
        className='fixed bottom-0 left-0'
        priority
      />
    </div>
  );
}
