'use client';

import { useCartContext } from '@/context/cart.context';
import { Button, Card, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import { signIn, useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';

interface CartSectionProps {
  isLoading: boolean;
}

const customCardTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'flex rounded-t-xl bg-primary overflow-hidden',
    children: 'flex h-full justify-center items-center gap-4 py-3 px-5 md:px-3',
    horizontal: {
      off: 'flex-col',
      on: 'flex-col md:max-w-xl md:flex-row',
    },
    href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
  },
};

const customButtonTheme: CustomFlowbiteTheme['button'] = {
  base: 'flex items-center justify-center h-[40px] shadow-[0px_1px_5px_#000]',
  fullSized: 'w-full',
  color: {
    buttonPrimary:
      'bg-[#B5BEE3] transition-all duration-200 hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
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
  pill: {
    off: 'rounded-[10px]',
    on: 'rounded-full',
  },
};

// const customTheme: CustomFlowbiteTheme = {
//   card: {
//     root: {
//       base: 'flex rounded-t-xl bg-primary overflow-hidden',
//       children:
//         'flex h-full justify-center items-center gap-4 py-3 px-5 md:px-3',
//       horizontal: {
//         off: 'flex-col',
//         on: 'flex-col md:max-w-xl md:flex-row',
//       },
//       href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
//     },
//   },
//   button: {
//     base: 'flex items-center justify-center h-[40px] shadow-[0px_1px_5px_#000]',
//     fullSized: 'w-full',
//     color: {
//       buttonPrimary:
//         'bg-[#B5BEE3] transition-all duration-200 hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
//     },
//     inner: {
//       base: 'flex items-center w-full gap-2 text-slate-800 font-bold transition-all duration-200',
//       position: {
//         none: '',
//         start: 'rounded-r-none',
//         middle: 'rounded-none',
//         end: 'rounded-l-none',
//       },
//       outline: 'border border-transparent',
//       isProcessingPadding: {
//         xs: 'pl-8',
//         sm: 'pl-10',
//         md: 'pl-12',
//         lg: 'pl-16',
//         xl: 'pl-20',
//       },
//     },
//   },
// };

export default function CartSection({ isLoading }: CartSectionProps) {
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { cart, getTotalItems, getTotalPrice } = useCartContext();
  const session = useSession();
  const userSession = session.status;
  const pathname = usePathname();
  const params = useSearchParams();
  const prevPathname = pathname.substring(0, pathname.indexOf('/canteens') + 9);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handlePayment = () => {
    userSession !== 'authenticated'
      ? signIn('google', { callbackUrl: `${prevPathname}/orders?${params}` })
      : router.push(`${prevPathname}/orders?${params}`);
  };

  if (!mounted) {
    return null;
  }

  return (
    // <Flowbite theme={{ theme: customTheme }}>
    <Card
      theme={customCardTheme}
      className={`fixed w-full h-[62px] transition-all duration-500 ${
        isVisible ? 'bottom-0' : '-bottom-20'
      } ${
        !cart.length ? 'translate-y-20' : 'translate-y-0'
      } md:absolute md:translate-y-0 md:bottom-3 md:w-[350px] md:rounded-xl`}
    >
      {isLoading ? (
        <div
          role='status'
          className='animate-pulse flex h-[40px] items-center font-bold bg-white justify-between rounded-[10px] w-2/3 shadow-[0px_1px_5px_#000,inset_0_1px_5px_#000] overflow-hidden'
        ></div>
      ) : (
        <div className='flex h-[40px] items-center font-bold justify-between bg-white rounded-[10px] px-5 w-2/3 shadow-[0px_1px_5px_#000,inset_0_1px_5px_#000]'>
          <p className='text-sm text-slate-800'>{getTotalItems()} item</p>
          <p className='text-sm text-slate-800'>Rp {getTotalPrice()} ,-</p>
        </div>
      )}
      <Button
        theme={customButtonTheme}
        color='buttonPrimary'
        onClick={handlePayment}
      >
        Bayar
        <HiShoppingCart size={25} />
      </Button>
    </Card>
    // </Flowbite>
  );
}
