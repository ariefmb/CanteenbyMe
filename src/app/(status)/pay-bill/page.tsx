'use client'

import circleLeftBottom from '@/images/background/circle-left-bottom.png';
import circleTopRight from '@/images/background/circle-top-right.png';
import payBill from '@/images/icon/pay-the-bill.png';
import { Button, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { HiHome } from 'react-icons/hi';
import { HiArrowLeftCircle } from 'react-icons/hi2';

const customTheme: CustomFlowbiteTheme = {
  button: {
    base: 'flex items-center justify-center h-[40px] shadow-[0px_1px_5px_#000]',
    fullSized: 'w-full',
    color: {
      buttonOrder:
        'bg-[#8B97CB] transition-all duration-200 hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
      buttonHome:
        'bg-[#6B76AD] transition-all duration-200 hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
    },
    inner: {
      base: 'flex items-center justify-center w-full gap-2 text-white font-bold transition-all duration-200',
      position: {
        none: '',
        start: 'rounded-r-none',
        middle: 'rounded-none',
        end: 'rounded-l-none',
      },
      outline: 'border border-transparent',
      isProcessingPadding: {
        xs: 'pl-8',
        sm: 'pl-10',
        md: 'pl-12',
        lg: 'pl-16',
        xl: 'pl-20',
      },
    },
  },
};

export default function Cash() {
  const params = useSearchParams()
  
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className='bg-background max-h-screen'>
        <Image
          src={circleTopRight}
          alt='background top right'
          width={160}
          height={160}
          className='absolute top-0 right-0'
          priority
        />
        <div className='flex flex-col w-full min-h-screen items-center justify-between py-10'>
          <div className='w-full text-left flex'>
            <Link
              href={'/'}
              className='w-full h-full flex items-center px-5 gap-3 font-bold text-slate-700 text-2xl'
            >
              <HiArrowLeftCircle size={40} />
              PAYMENT
            </Link>
          </div>
          <div className='flex flex-col items-center justify-evenly bg-gradient-to-b from-white to-primary rounded-[20px] mx-auto w-[336px] h-[375px] md:h-[325px] z-10'>
            <Image
              src={payBill}
              alt='background top right'
              width={232}
              height={189}
              className='block z-10'
              priority
            />
            <div className='text-center font-bold text-slate-700 text-2xl'>
              <h1 className=''>Silahkan lakukan</h1>
              <h1 className=''>pembayaran ke kasir</h1>
            </div>
          </div>
          <Button className='text-white' color='buttonHome'>
            <Link
              href={`/?${params}`}
              className='w-full h-full flex items-center tracking-wider justify-center gap-2 md:w-36'
            >
              <HiHome size={30} />
              BERANDA
            </Link>
          </Button>
        </div>
        <Image
          src={circleLeftBottom}
          alt='background top right'
          width={100}
          height={100}
          className='absolute bottom-0 left-0'
          priority
        />
      </div>
    </Flowbite>
  );
}
