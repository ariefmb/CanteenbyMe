'use client';

import HomeButton from '@/components/UI/home-button';
import HistoryOrdersContainer from '@/components/history/history-orders-container';
import circleLeftBottom from '@/images/background/circle-left-bottom.png';
import Image from 'next/image';

export default function History() {
  return (
    <section className='w-full h-full flex flex-col gap-5 items-center justify-center bg-background p-14 md:py-10 md:p-0'>
      <div className='w-[336px] min-h-[401px] md:w-[461px] flex items-center justify-center rounded-xl bg-gradient-to-b from-white to-primary z-10 shadow-[0_0_5px_1px_#555]'>
        <HistoryOrdersContainer />
      </div>
      <HomeButton />
      <Image
        src={circleLeftBottom}
        alt='background left bottom'
        width={100}
        height={100}
        className='fixed bottom-0 left-0'
        priority
      />
    </section>
  );
}
