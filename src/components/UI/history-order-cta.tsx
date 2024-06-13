'use client';

import { Button, CustomFlowbiteTheme } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const customTheme: CustomFlowbiteTheme['button'] = {
  base: 'flex gap-5 items-center justify-center w-full h-full',
  fullSized: 'w-full',
  color: {
    primary:
      'bg-primary transition-all duration-300 hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
  },
  inner: {
    base: 'flex items-center justify-center gap-3 text-3xl transition-all duration-200',
  },
  size: {
    sm: 'text-xl font-bold tracking-wide',
  },
};

export default function HistoryOrderCta() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

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

  const handleClick = () => {
    router.push(`/pay-bill?${params}`);
  };

  return (
    <div
      className={`fixed w-[90%] h-10 rounded-xl transition-all duration-500 shadow-[0_2px_5px_2px_#000] ${
        isVisible ? 'bottom-5' : '-bottom-20'
      }`}
    >
      <Button theme={customTheme} color='primary' size='sm' onClick={handleClick}>
        <HiShoppingCart size={25} />
        PESANAN SAYA
      </Button>
    </div>
  );
}
