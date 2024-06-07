import { Button, CustomFlowbiteTheme } from 'flowbite-react';
import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme['button'] = {
  base: 'border-none',
  color: {
    primary: 'bg-[#A8B2DE]',
    buttonAdd:
      'bg-[#B5BEE3] transition-all duration-200 hover:bg-[#A2AACB]  active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
    buttonPrimary:
      'w-2/3 bg-[#B5BEE3] transition-all duration-200 hover:rounded-xl hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
  },
  isProcessing: 'cursor-drop',
  spinnerSlot: 'h-full flex items-center animate-fade-in',
  inner: {
    base: 'w-full font-bold text-slate-800 flex justify-center gap-2 items-center transition-all duration-200 hover:bg-primary',
    isProcessingPadding: {
      xs: 'px-4',
      sm: 'px-4',
      md: 'px-4',
      lg: 'px-4',
      xl: 'px-4',
    },
  },
  pill: {
    off: 'rounded-xl',
    on: 'rounded-full',
  },
  size: {
    xs: 'p-1 text-xs',
    sm: 'p-2 text-xs',
    md: 'px-4 py-2 text-lg',
  },
};

export default function OrderCreate() {
  return (
    <div className='w-full my-3 py-3 flex items-center justify-center'>
      <Button
        theme={customTheme}
        color='buttonPrimary'
        className='hover:rounded-xl'
      >
        Buat Pesanan
        <HiShoppingCart size={25} />
      </Button>
    </div>
  );
}
