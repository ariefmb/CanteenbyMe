import { deleteCookie } from '@/libs/cookies/cookies';
import { Button, CustomFlowbiteTheme } from 'flowbite-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { HiHome } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme['button'] = {
  base: 'flex items-center justify-center h-[40px] shadow-[0px_1px_5px_#000]',
  fullSized: 'w-full',
  color: {
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
};

export default function HomeButton() {
  const params = useSearchParams();

  return (
    <Button theme={customTheme} className='text-white' color='buttonHome'>
      <Link
        onClick={() => {
          deleteCookie('invoiceId');
        }}
        href={`/?${params}`}
        className='w-full h-full md:w-36 flex items-center justify-center gap-2'
      >
        <HiHome size={30} />
        BERANDA
      </Link>
    </Button>
  );
}
