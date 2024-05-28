'use client';

import { TMenus } from '@/libs/types';
import React from 'react';
import {
  Badge,
  Card,
  Button,
  CustomFlowbiteTheme,
  Flowbite,
} from 'flowbite-react';
import { HiPlus } from 'react-icons/hi';
import Image from 'next/image';

interface MenuCardProps {
  menu: TMenus;
}

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: 'flex w-[327px] rounded-xl border border-gray-200 bg-white shadow-md',
      children:
        'flex justify-center items-center w-full h-full overflow-hidden gap-4 px-3 py-5',
    },
  },
  badge: {
    root: {
      base: 'flex w-fit h-fit items-center gap-1 font-semibold',
      color: {
        bestSeller: 'bg-red-500 text-slate-100',
      },
    },
  },
  button: {
    base: 'border-none',
    color: {
      primary: 'bg-[#A8B2DE]',
    },
    isProcessing: 'cursor-drop',
    spinnerSlot: 'h-full flex items-center animate-fade-in',
    inner: {
      base: 'w-full font-bold text-slate-800 flex justify-center gap-2 items-center transition-all duration-200 hover:bg-primary hover:rounded-full',
      isProcessingPadding: {
        xs: 'px-4',
        sm: 'px-4',
        md: 'px-4',
        lg: 'px-4',
        xl: 'px-4',
      },
    },
    pill: {
      off: 'rounded-full',
      on: 'rounded-full',
    },
    size: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-lg',
    },
  },
};

export default function MenusCard({ menu }: MenuCardProps) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Card className='max-w-sm flex'>
        <div className='w-2/3 pl-3 flex flex-col gap-2 justify-center'>
          {menu.signature && <Badge color='bestSeller'>Best Seller</Badge>}
          <h3 className='text-[14px] font-bold text-primary'>{menu.name}</h3>
          <p className='text-[11px]'>{menu.description}</p>
          <h4 className='text-[15px] text-slate-800 font-bold'>
            Rp. {menu.price},-
          </h4>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center w-1/3'>
          <Image
            src={`${menu.imageUrl}`}
            alt='Menu Image'
            width={94}
            height={82}
            className='rounded-[10px] w-[94px] h-[82px]'
          />
          <Button color='primary' size='sm' pill>
            <HiPlus />
            Tambah
          </Button>
          <div className='flex items-center gap-2'>
            <Button color='primary' size='xs' pill>-</Button>
            1
            <Button color='primary' size='xs' pill>+</Button>
          </div>
        </div>
      </Card>
    </Flowbite>
  );
}
