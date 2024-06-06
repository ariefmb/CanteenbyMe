import circleLeftBottom from '@/images/background/circle-left-bottom.png';
import circleTopRight from '@/images/background/circle-top-right.png';
import orderVerified from '@/images/icon/order-verified.png';
import CBMLogo from '@/images/logo/cbm-side-logo.png';
import { Button, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { HiHome, HiShoppingCart } from 'react-icons/hi';

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

export default function Verified() {
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
        <div className='flex flex-col w-full min-h-screen items-center justify-evenly'>
          <Image
            src={CBMLogo}
            alt='background top right'
            width={216}
            height={60}
            className='block z-10'
            priority
          />
          <div className='flex flex-col items-center justify-evenly bg-gradient-to-b from-white to-primary rounded-[20px] mx-auto w-[321px] h-[402px] z-10'>
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
              className='block z-10'
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
          <div className='flex flex-col gap-3'>
            <Button className='text-white' color='buttonOrder'>
              <Link
                href={'/'}
                className='w-full h-full flex items-center justify-center gap-2'
              >
                <HiShoppingCart size={30} />
                PESANAN SAYA
              </Link>
            </Button>
            <Button className='text-white' color='buttonHome'>
              <Link
                href={'/'}
                className='w-full h-full flex items-center justify-center gap-2'
              >
                <HiHome size={30} />
                BERANDA
              </Link>
            </Button>
          </div>
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