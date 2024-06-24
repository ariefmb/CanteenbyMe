'use client';

import HistoryButton from '@/components/UI/history-button';
import HomeButton from '@/components/UI/home-button';
import circleLeftBottom from '@/images/background/circle-left-bottom.png';
import circleTopRight from '@/images/background/circle-top-right.png';
import orderVerified from '@/images/icon/order-verified.png';
import CBMLogo from '@/images/logo/cbm-side-logo.png';
import { getCookie } from '@/libs/cookies/cookies';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Verified() {
  const [invoiceId, setInvoiceId] = useState<string | undefined>();

  useEffect(() => {
    const invoiceId = getCookie('invoiceId');
    setInvoiceId(invoiceId);
  }, []);

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
            <h1 className='font-extrabold text-lg text-slate-800'>
              Pembayaran Terverifikasi
            </h1>
            <p className='text-lg text-slate-800'>
              No pesanan anda: xxx-xxx-xxx
            </p>
          </div>
          <Image
            src={orderVerified}
            alt='background top right'
            width={204}
            height={204}
            className='block z-10 md:w-[150px] md:h-[150px]'
            priority
          />
          <div className='flex flex-col items-center justify-evenly bg-gradient-to-b from-white to-primary rounded-[20px] mx-auto w-[321px] h-[402px] md:h-[325px] z-10'>
            <div className='text-center'>
              <h1 className='font-extrabold text-lg text-slate-800'>
                Pembayaran Terverifikasi
              </h1>
              <Suspense
                fallback={
                  <Skeleton width={200} height={100} baseColor='#495076' />
                }
              >
                <p className='text-lg text-slate-800'>
                  No pesanan anda: {invoiceId}
                </p>
              </Suspense>
            </div>
            <Image
              src={orderVerified}
              alt='background top right'
              width={204}
              height={204}
              className='block z-10 md:w-[150px] md:h-[150px]'
              priority
            />
            <div className='text-center'>
              <h1 className='font-extrabold text-lg text-slate-800'>
                Mohon tunggu,
              </h1>
              <p className='text-sm font-bold text-slate-800'>
                pesanan anda sedang diproses
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-3 md:flex-row'>
            <HistoryButton />
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
    </div>
  );
}
