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
import { AlgoliaHit, Hit } from 'instantsearch.js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { HiShoppingCart } from 'react-icons/hi2';
import { Hits, SearchBoxProps } from 'react-instantsearch';
import SearchInput from './search-input';
import MenusCard from '@/components/UI/menus-card';
import CartSection from '../UI/cart-section';

const customTheme: CustomFlowbiteTheme = {
  card: {
    root: {
      base: 'flex bg-primary overflow-hidden',
      children:
        'flex h-full justify-center items-center gap-4 py-3 px-5 md:px-0 md:gap-5',
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
      primary: 'bg-[#A8B2DE] transition-all duration-200 hover:bg-[#959DC2]',
      buttonCart: 'bg-[#B5BEE3] transition-all duration-200 hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
    },
    isProcessing: 'cursor-drop',
    spinnerSlot: 'h-full flex items-center animate-fade-in',
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
  },
};

export default function SearchModal({ canteens }: { canteens?: TCanteens[] }) {
  const queryHook: SearchBoxProps['queryHook'] = (query, search) => {
    search(query);
  };
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

  // type HitProps = {
  //   hit: AlgoliaHit<{
  //     id?: string;
  //     canteen_id?: string;
  //     name?: string;
  //     image_url?: string;
  //     type?: string;
  //     price?: number;
  //   }>;
  // };

  // type HitProps = {
  //   hit: AlgoliaHit<{
  //     hitted: TMenus;
  //   }>;
  // };

  type HitProps = {
    hit: AlgoliaHit<{
      id: string;
      canteen_id: string;
      type: string;
      name: string;
      price: number;
      signature: boolean;
      image_url?: string;
      description?: string;
      updateAt: Date;
      createdAt: Date;
    }>;
  };

  // type CartProps = {
  //   // id?: string;
  //   // canteen_id?: string;
  //   // name?: string;
  //   // image_url?: string;
  //   // type?: string;
  //   // price?: number;
  //   // quantity?: number;
  //   menu: TMenus;
  // };

  const { onShow, setOnShow } = useSearchContext();
  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    getTotalItems,
    getTotalPrice,
  } = useCartContext();
  // const [carts, setCart] = useState<CartProps[]>([]);
  // const totalHarga = cart.reduce((acc, item) => acc + item.price!!, 0);

  const SearchResult = ({ hit }: HitProps) => {
    const canteen = canteens?.find((canteen) => canteen.id === hit.canteen_id);
    const cartItem = cart.find((item) => item.id === hit.id);
    const quantity = cartItem ? cartItem.quantity || 0 : 0;
    console.log(`image: ${hit.name}`);

    // const {menu}: CartProps = cart.find((item) => item.id === hit.id);

    const handleAddClick = () => {
      addToCart(hit);
    };

    const handlePlusQuantity = () => {
      updateQuantity(hit.id, quantity + 1);
    };

    const handleMinusQuantity = () => {
      quantity > 1
        ? updateQuantity(hit.id, quantity - 1)
        : removeFromCart(hit.id);
    };

    // const handlePlusQuantity = () => {
    //   updateQuantity(menu.id, quantity + 1);
    // };

    // const handleMinusQuantity = () => {
    //   quantity > 1
    //     ? updateQuantity(menu.id, quantity - 1)
    //     : removeFromCart(menu.id);
    // };

    // useEffect(() => {}, [cart]);

    return (
      <Flowbite theme={{ theme: customTheme }}>
        <article
          className='flex items-center gap-3 md:m-3 text-slate-800 mb-5'
          key={hit.id}
        >
          <Image
            src={`${hit.image_url}`}
            alt={canteen?.name || 'Image'}
            width={82}
            height={70}
            className='rounded-md bg-cover w-[80px] h-[70px] md:min-w-[100px]'
          />
          <div className='md:ml-5 col-span-5 w-full'>
            <h1 className='menu-name w-fit h-fit text-sm font-bold md:text-base text-slate-700 text-overflow-ellipsis '>
              {hit?.name || 'No Name'}
            </h1>
            <p className='canteen-name w-fit h-fit text-sm md:text-base text-slate-700 text-overflow-ellipsis'>
              {canteen?.name}
            </p>
            <p className='menu-price w-fit h-fit font-bold text-base text-slate-700 text-overflow-ellipsis text-overflow-ellipsis'>
              Rp {hit?.price !== undefined ? hit?.price : 'N/A'}
            </p>
          </div>

          <div className='w-[100%] h-12 md:w-fit md:px-2 flex justify-center items-center transition-all duration-500'>
            {quantity === 0 ? (
              <Button
                color='primary'
                size='sm'
                className='hover:rounded-full'
                onClick={handleAddClick}
                pill
              >
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
          </div>
        </article>
      </Flowbite>
    );
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Modal
        show={onShow}
        dismissible
        size='2xl'
        position='top-center'
        className='backdrop-blur-sm overflow-hidden'
        onClose={() => {
          setOnShow(false);
        }}
      >
        <Modal.Header prefix='text-sm'>
          <SearchInput props={{ queryHook: queryHook }} />
        </Modal.Header>
        <Modal.Body>
          <div className='min-h-screen flex flex-col'>
            <Hits hitComponent={SearchResult} />
          </div>
        </Modal.Body>
        <Modal.Footer
          className={`p-0 overflow-hidden rounded-md transition-all duration-500 origin-bottom md:border-none ${
            !cart.length ? 'border-t-2 h-20 rounded-none' : 'h-[400px] py-2' || 'h-[500px]'
          }`}
        >
          <Card
            className={`w-full bg-primary overflow-hidden flex items-center justify-center gap-4 py-8 transition-all duration-500 px-0 origin-bottom ${
              !cart.length ? 'translate-y-24' : 'translate-y-0'
            }`}
          >
            <div className='flex h-[40px] w-[200px] sm:w-[400px] items-center font-bold justify-between bg-white rounded-[10px] px-5 shadow-[0px_1px_5px_#000,inset_0_1px_5px_#000]'>
              <p className='text-sm text-slate-800'>{getTotalItems()} item</p>
              <p className='text-sm text-slate-800'>Rp {getTotalPrice()} ,-</p>
            </div>
            <Button
              color='buttonCart'
              className='flex items-center justify-center h-[40px] shadow-[0px_1px_5px_#000]'
              size='md'
            >
              Bayar
              <HiShoppingCart size={25} />
            </Button>
          </Card>
        </Modal.Footer>
      </Modal>
    </Flowbite>
  );
}
