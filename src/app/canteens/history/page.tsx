'use client';

import HomeButton from '@/components/UI/home-button';
import HistoryOrdersContainer from '@/components/container/history-orders-container';
import React from 'react';
import circleLeftBottom from '@/images/background/circle-left-bottom.png';
import Image from 'next/image';

interface HistoryProps {
  params: {
    userId: string;
  };
}

export default function History({ params }: HistoryProps) {
  const { userId } = params;
  return (
    <section className='w-full h-full flex flex-col gap-5 items-center justify-center bg-background p-14 md:p-0 md:gap-0'>
      <div className='w-[336px] h-[401px] md:scale-90 flex items-center justify-center rounded-xl bg-gradient-to-b from-white to-primary'>
        <HistoryOrdersContainer userId={userId} />
      </div>
      <HomeButton />
      <Image
        src={circleLeftBottom}
        alt='background top right'
        width={100}
        height={100}
        className='absolute bottom-0 left-0'
        priority
      />
    </section>
  );
}
