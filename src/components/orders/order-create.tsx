import { Button, CustomFlowbiteTheme } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme['button'] = {
  base: 'border-none',
  color: {
    buttonPrimary:
      'w-full md:w-2/3 bg-primary transition-all duration-200 hover:bg-[#58628E] active:bg-[#495076] active:ring-2 active:ring-[#6878BA]',
  },
  inner: {
    base: 'w-full text-gray-50 tracking-widest flex justify-center gap-2 items-center transition-all duration-500',
    isProcessingPadding: {
      xs: 'px-4',
      sm: 'px-4',
      md: 'px-4',
      lg: 'px-4',
      xl: 'px-4',
    },
  },
  pill: {
    off: 'rounded-[10px]',
    on: 'rounded-full',
  },
  size: {
    sm: 'p-2 text-lg md:text-xl font-bold',
  },
};

export default function OrderCreate() {
  return (
    <div className='w-full my-3 py-3 flex items-center justify-center'>
      <Button
        theme={customTheme}
        color='buttonPrimary'
        size='sm'
      >
        Buat Pesanan
        <HiShoppingCart size={25} />
      </Button>
    </div>
  );
}
