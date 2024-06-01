'use client';

import { Button, Card, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: 'flex rounded-t-xl bg-primary overflow-hidden',
      children: 'flex h-full justify-center items-center gap-4 py-3 px-5 md:px-3',
      horizontal: {
        off: 'flex-col',
        on: 'flex-col md:max-w-xl md:flex-row',
      },
      href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    },
  },
  button: {
    base: 'flex items-center justify-center h-[40px] shadow-[0px_1px_5px_#000]',
    fullSized: 'w-full',
    color: {
      buttonPrimary: 'bg-[#B5BEE3]',
    },
    inner: {
      base: 'flex items-center w-full gap-2 text-slate-800 font-bold transition-all duration-200',
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

export default function CartSection() {
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlCartBar = () => {
    if (window.scrollY !== lastScrollY) {
      setVisible(false);
      setTimeout(() => {
        setVisible(true);
      }, 1000);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlCartBar);
    return () => {
      window.removeEventListener('scroll', controlCartBar);
    };
  }, [lastScrollY]);

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Card
        className={`fixed w-full h-[62px] transition-all duration-500 ${
          isVisible ? 'bottom-0' : '-bottom-20'
        } md:absolute md:bottom-5 md:w-[350px] md:rounded-xl`}
      >
        <div className='flex h-[40px] items-center font-bold justify-between bg-white rounded-[10px] px-5 w-2/3 shadow-[0px_1px_5px_#000,inset_0_1px_5px_#000]'>
          <p className='text-sm text-gray-800'>n item</p>
          <p className='text-sm text-gray-800'>Rp 000</p>
        </div>
        <Button color='buttonPrimary'>
          Bayar
          <HiShoppingCart size={25} />
        </Button>
      </Card>
    </Flowbite>
  );
}