'use client';

import { useCartContext } from '@/context/cart.context';
import { useSearchContext } from '@/context/search.context';
import { TCanteens, TMenus } from '@/libs/types';
import {
  Button,
  Card,
  CustomFlowbiteTheme,
  Flowbite,
  Modal,
} from 'flowbite-react';
import { AlgoliaHit } from 'instantsearch.js';
import Image from 'next/image';
import { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi2';
import { Hits, SearchBoxProps } from 'react-instantsearch';
import SearchInput from './search-input';

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: 'flex rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
      children: 'flex h-full flex-col justify-center p-5',
      horizontal: {
        off: 'flex-col',
        on: 'flex-col md:max-w-xl md:flex-row',
      },
      href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
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
      xs: 'p-1 text-xs',
      sm: 'p-2 text-xs',
      md: 'px-4 py-2 text-lg',
    },
  },
};

export default function SearchModal({ canteens }: { canteens?: TCanteens[] }) {
  const queryHook: SearchBoxProps['queryHook'] = (query, search) => {
    search(query);
  };

  type HitProps = {
    hit: AlgoliaHit<{
      id?: string;
      canteen_id?: string;
      name?: string;
      image_url?: string;
      type?: string;
      price?: number;
    }>;
  };

  type CartProps = {
    id?: string;
    canteen_id?: string;
    name?: string;
    image_url?: string;
    type?: string;
    price?: number;
  };

  const { onShow, setOnShow } = useSearchContext();

  const [cart, setCart] = useState<CartProps[]>([]);
  const totalHarga = cart.reduce((acc, item) => acc + item.price!!, 0);

  const SearchResult = ({ hit }: HitProps) => {
    const canteen = canteens?.find((canteen) => canteen.id === hit.canteen_id);
    const { cart, addToCart, updateQuantity, removeFromCart } =
      useCartContext();
    const cartItem = cart.find((item) => item.id === hit.id);
    const quantity = cartItem ? cartItem.quantity || 0 : 0;

    const handleAddClick = (menu:TMenus) => {
      addToCart(menu);
    };

    const handlePlusQuantity = (menu:TMenus) => {
      updateQuantity(menu.id, quantity + 1);
    };

    const handleMinusQuantity = (menu:TMenus) => {
      quantity > 1
        ? updateQuantity(menu.id, quantity - 1)
        : removeFromCart(menu.id);
    };

    const handleAddToChart = (menu: CartProps) => {
      setCart((prevChart) => [...prevChart, menu]);
    };

    // useEffect(() => {}, [cart]);

    return (
      <article className='hit-item flex m-3 text-slate-800' key={hit.id}>
        <Image
          src={`${hit.image_url}`}
          width={82}
          height={70}
          className='rounded-md bg-cover'
          alt={canteen?.name || 'Image'}
        />
        <div className='ml-2 col-span-5 w-full'>
          <h1 className='menu-name w-fit h-fit text-[16px] font-bold md:text-[16px] text-slate-700 text-overflow-ellipsis '>
            {hit?.name || 'No Name'}
          </h1>
          <p className='canteen-name w-fit h-fit text-[15px] md:text-[16px] text-slate-700 text-overflow-ellipsis'>
            {canteen?.name}
          </p>
          <p className='menu-price w-fit h-fit text-[15px] md:text-[16px] text-slate-700 text-overflow-ellipsis text-overflow-ellipsis'>
            Rp {hit?.price !== undefined ? hit?.price : 'N/A'}
          </p>
        </div>
        {/* <div className='max-w-xs h-full grid justify-items-end items-center'>
          <Badge
            size='sm'
            onClick={() => handleAddToChart(hit!!)}
            className=' bg-[#A8B2DE]/50 mr-4 text-slate-700 hover:none my-5 mx-2 cursor-pointer'
          >
            Tambah
          </Badge>
        </div> */}
        {/* <div className='w-fit px-2 h-12 flex justify-center items-center transition-all duration-500 transform'>
          {quantity === 0 ? (
            <Button color='primary' size='sm' onClick={() => handleAddClick(menu)} pill>
              <HiPlus />
              Tambah
            </Button>
          ) : (
            <div className='flex items-center gap-1'>
              <Button
                color='primary'
                size='sm'
                onClick={handleMinusQuantity}
                pill
              >
                <HiMinus />
              </Button>
              <p className='w-8 text-center'>{quantity}</p>
              <Button
                color='primary'
                size='sm'
                onClick={handlePlusQuantity}
                pill
              >
                <HiPlus />
              </Button>
            </div>
          )}
        </div> */}
      </article>
    );
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Modal
        show={onShow}
        dismissible
        size='2xl'
        position='top-center'
        onClose={() => {
          setCart([]);
          setOnShow(false);
        }}
      >
        <Modal.Header prefix='text-sm'>
          <SearchInput props={{ queryHook: queryHook }} />
        </Modal.Header>
        <Modal.Body>
          <div className='space-y-6 min-h-screen'>
            <Hits hitComponent={SearchResult} />
          </div>
        </Modal.Body>
        {cart.length > 0 && (
          <Modal.Footer className='bg-[#6B76AD] rounded-lg'>
            <div className='w-full h-10 flex text-slate-700'>
              <Card className='w-full '>
                <div className='flex '>
                  <p className='flex-1'>{cart.length} item</p>
                  <p className='flex-2'>Rp{totalHarga}</p>
                </div>
              </Card>
              <Button className='bg-[#A8B2DE]/50 w-[120px] ml-4 border-none shadow-md hover:shadow-none p-2'>
                <HiShoppingCart className='mr-2 h-5 w-5' />
                Pesan
              </Button>
            </div>
            {/* <Button
              color='white'
              onClick={() => setOnClick(false)}
              className='bg-zinc-500 '
            >
              PESAN
            </Button>
            <Button
              color='white'
              onClick={() => setOnClick(false)}
              className='bg-zinc-500'
            >
              KEMBALI
            </Button> */}
          </Modal.Footer>
        )}
      </Modal>
    </Flowbite>
  );
}
