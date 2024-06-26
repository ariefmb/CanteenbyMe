'use client';

import { useCartContext } from '@/context/cart.context';
import { TMenus } from '@/libs/types';
import {
  Badge,
  Button,
  Card,
  CustomFlowbiteTheme
} from 'flowbite-react';
import Image from 'next/image';
import { HiMinus, HiPlus } from 'react-icons/hi';

interface MenuCardProps {
  menu: TMenus;
}

const customCardTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'flex flex-grow w-[327px] rounded-xl border border-gray-200 bg-white shadow-md md:w-[721px]',
    children:
      'flex justify-center items-center w-full h-full overflow-hidden gap-4 px-3 py-5',
  },
};

const customBadgeTheme: CustomFlowbiteTheme['badge'] = {
  root: {
    base: 'flex w-fit h-fit items-center font-semibold',
    color: {
      bestSeller: 'bg-[#B90707] text-slate-100',
    },
  },
  icon: {
    off: 'rounded-lg px-3 py-0.5',
    on: 'rounded-full p-1.5',
    size: {
      xs: 'h-3 w-3',
      sm: 'h-3.5 w-3.5',
    },
  },
};

const customButtonTheme: CustomFlowbiteTheme['button'] = {
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
    xs: 'p-1 text-xs',
    sm: 'p-2 text-xs',
    md: 'px-4 py-2 text-lg',
  },
};

export default function MenusCard({ menu }: MenuCardProps) {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCartContext();
  const cartItem = cart.find((item) => item.id === menu.id);
  const quantity = cartItem ? cartItem.quantity || 0 : 0;

  const handleAddClick = () => {
    addToCart({
      id: menu.id,
      name: menu.name,
      imageUrl: menu.imageUrl!!,
      price: menu.price,
    });
  };

  const handlePlusQuantity = () => {
    updateQuantity(menu.id, quantity + 1);
  };

  const handleMinusQuantity = () => {
    quantity > 1
      ? updateQuantity(menu.id, quantity - 1)
      : removeFromCart(menu.id);
  };

  return (
    <Card theme={customCardTheme} className='flex md:px-10'>
      <div className='w-2/3 pl-3 flex flex-col gap-2 justify-center'>
        {menu.signature && (
          <Badge theme={customBadgeTheme} color='bestSeller'>
            Best Seller
          </Badge>
        )}
        <h3 className='text-sm font-bold text-primary md:text-lg'>
          {menu.name}
        </h3>
        <p className='text-xs md:text-base'>{menu.description}</p>
        <h4 className='text-[15px] pl-3 text-slate-800 font-bold'>
          Rp. {menu.price},-
        </h4>
      </div>
      <div className='flex flex-col items-center justify-center w-1/3'>
        <Image
          src={`${menu.imageUrl}`}
          alt='Menu Image'
          width={94}
          height={82}
          className='rounded-[10px] w-[94px] h-[82px] md:w-[101px] md:h-[89px]'
        />
        <div className='w-fit px-2 h-12 flex justify-center items-center transition-all duration-500 transform'>
          {quantity === 0 ? (
            <Button
              theme={customButtonTheme}
              color='primary'
              size='sm'
              onClick={handleAddClick}
              pill
            >
              <HiPlus />
              Tambah
            </Button>
          ) : (
            <div className='flex items-center gap-1'>
              <Button
                theme={customButtonTheme}
                color='primary'
                size='sm'
                onClick={handleMinusQuantity}
                pill
              >
                <HiMinus />
              </Button>
              <p className='w-8 text-center'>{quantity}</p>
              <Button
                theme={customButtonTheme}
                color='primary'
                size='sm'
                onClick={handlePlusQuantity}
                pill
              >
                <HiPlus />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
