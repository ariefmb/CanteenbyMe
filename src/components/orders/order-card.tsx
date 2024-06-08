'use client';

import { useCanteenContext } from '@/context/canteens.context';
import { useCartContext } from '@/context/cart.context';
import { useSearchContext } from '@/context/search.context';
import {
  Button,
  CustomFlowbiteTheme,
  TextInput
} from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import SearchModal from '../search/search-modal';
import ModalAlert from './remove-cart-alert';

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}

const customNoteTheme: CustomFlowbiteTheme['textInput'] = {
  base: 'flex mb-5 w-full',
  addon:
    'flex items-center justify-center rounded-l-full border border-r-0 border-gray-900 bg-[#B5BEE3] px-2 md:px-5 text-sm text-gray-800',
  field: {
    base: 'relative w-full',
    input: {
      base: 'w-full border md:h-[37px] disabled:cursor-not-allowed disabled:opacity-50',
      sizes: {
        sm: 'px-3 text-xs md:text-sm',
        md: 'p-2.5 text-sm',
        lg: 'p-4 sm:text-base',
      },
      colors: {
        note: 'border-gray-900 bg-gray-50 text-gray-900 focus:border-primary focus:ring-primary',
      },
      withAddon: {
        on: 'rounded-r-full',
        off: 'rounded-lg',
      },
    },
  },
};

const customButtonTheme: CustomFlowbiteTheme['button'] = {
  base: 'border-none',
  color: {
    buttonAdd:
      'bg-[#B5BEE3] transition-all duration-200 hover:rounded-full hover:bg-[#A2AACB]  active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
    buttonPrimary:
      'w-2/3 bg-[#B5BEE3] transition-all duration-200 hover:rounded-xl hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
  },
  inner: {
    base: 'w-full text-slate-800 flex justify-center gap-2 items-center transition-all duration-500',
    isProcessingPadding: {
      xs: 'px-4',
      sm: 'px-4',
      md: 'px-4',
      lg: 'px-4',
      xl: 'px-4',
    },
  },
  pill: {
    off: 'rounded-md',
    on: 'rounded-full',
  },
  size: {
    xs: 'p-1 text-xs',
    sm: 'p-2 text-xs font-bold',
    md: 'px-4 py-2 text-sm font-bold',
  },
};

export default function OrderCard() {
  const { cart, updateQuantity, removeFromCart } = useCartContext();
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<CartItem | null>(null);
  const { setOnShow } = useSearchContext();
  const { canteens } = useCanteenContext();

  const handlePlusQuantity = (id: string, quantity: number) => {
    updateQuantity(id, quantity + 1);
  };

  const handleMinusQuantity = (item: CartItem) => {
    if (item.quantity && item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      setItemToRemove(item);
      setShowModal(true);
    }
  };

  const confirmRemoveCart = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id);
      setShowModal(false);
      setItemToRemove(null);
    }
  };

  const cancelRemoveCart = () => {
    setShowModal(false);
    setItemToRemove(null);
  };

  return (
    <>
      <ModalAlert
        show={showModal}
        onConfirm={confirmRemoveCart}
        onCancel={cancelRemoveCart}
      />
      <div className='w-full md:p-3 flex flex-col gap-2'>
        {cart.map((cart: CartItem) => {
          const itemQuantity = cart.quantity ?? 0;
          return (
            <div className='flex flex-col items-center justify-center'>
              <div
                key={cart.id}
                className='flex w-full items-center justify-center md:m-3 text-slate-800 md:px-5'
              >
                <div className='w-1/2 h-[120px] md:h-fit flex items-center justify-center'>
                  <Image
                    src={cart.imageUrl}
                    alt='Menu Image'
                    width={122}
                    height={108}
                    className='rounded-[10px] h-[108px] shadow-[0_0_5px_2px_gray] md:w-[171px] md:h-[151px]'
                  />
                </div>
                <div className='p-2 w-1/2 flex flex-col gap-1 md:gap-2'>
                  <h1 className='font-bold text-sm text-left text-primary sm:text-2xl tracking-wider'>
                    {cart.name}
                  </h1>
                  <h1 className='font-bold text-sm text-left text-slate-800 sm:text-2xl tracking-wider'>
                    Rp {cart.price},-
                  </h1>
                  <div className='flex items-center my-3 w-full gap-1 justify-items-start'>
                    <Button
                      theme={customButtonTheme}
                      color='buttonAdd'
                      size='sm'
                      onClick={() => handleMinusQuantity(cart)}
                      pill
                    >
                      <HiMinus />
                    </Button>
                    <p className='w-8 text-center'>{itemQuantity}</p>
                    <Button
                      theme={customButtonTheme}
                      color='buttonAdd'
                      size='sm'
                      onClick={() => handlePlusQuantity(cart.id, itemQuantity)}
                      pill
                    >
                      <HiPlus />
                    </Button>
                  </div>
                </div>
              </div>
              <TextInput
                theme={customNoteTheme}
                id='base'
                placeholder='Tulis jika ada catatan...'
                addon='Note'
                sizing='sm'
                color='note'
              />
            </div>
          );
        })}
      </div>
      <div className='w-full mt-3 flex items-center justify-center'>
        <Button
          theme={customButtonTheme}
          color='buttonAdd'
          onClick={() => setOnShow(true)}
          pill
        >
          <HiPlus />
          <h1 className='font-bold text-sm md:text-lg'>Tambah item lainnya</h1>
        </Button>
        <SearchModal canteens={canteens} />
      </div>
    </>
  );
}
