'use client';

import { useCartContext } from '@/context/cart.context';
import { createOrder } from '@/libs/apis';
import { TCreateOrder, TInvoice, TOrderMenu } from '@/libs/types';
import { Button, CustomFlowbiteTheme, Label, Radio } from 'flowbite-react';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';

const customRadioTheme: CustomFlowbiteTheme['radio'] = {
  root: {
    base: 'h-4 w-4 border border-gray-500 text-primary focus:ring-2 focus:ring-primary',
  },
};

const customButtonTheme: CustomFlowbiteTheme['button'] = {
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
  const { data: session } = useSession();
  const userSession = session?.user;
  const { cart, getTotalPrice, clearCart } = useCartContext();
  const params = useSearchParams();
  const tableParams = params ? parseInt(params.get('table') || '0') : 0;
  const router = useRouter();
  const targetUrl: string = 'https://canteenbyme.vercel.app';

  const [totalPesanan, setTotalPesanan] = useState('Rp 0,00');
  const [fee, setFee] = useState('Rp 0,00');
  const [totalBayar, setTotalBayar] = useState('Rp 0,00');
  const [paymentMethod, setPaymentMethod] = useState('');
  const totalPrice = getTotalPrice();
  const fees = totalPrice !== 0 ? 500 : 0;

  useEffect(() => {
    const formattedTotalPesanan = new Intl.NumberFormat('id', {
      style: 'currency',
      currency: 'IDR',
    }).format(totalPrice);

    const formattedFee = new Intl.NumberFormat('id', {
      style: 'currency',
      currency: 'IDR',
    }).format(fees);

    const formattedTotalBayar = new Intl.NumberFormat('id', {
      style: 'currency',
      currency: 'IDR',
    }).format(totalPrice + fees);

    setTotalPesanan(formattedTotalPesanan);
    setFee(formattedFee);
    setTotalBayar(formattedTotalBayar);
  }, [totalPrice, fees]);

  const handleSelectedPaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  const handleCreateOrder = async () => {
    const orderMenus = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));

    const data: TCreateOrder = {
      redirectUrl: `${paymentMethod === 'Cash' ? `${targetUrl}/pay-bill?${params}` : `${targetUrl}`}`,
      userName: userSession?.name,
      userEmail: userSession?.email,
      tableNumber: tableParams,
      fees: totalPrice + fees,
      orderMenus: orderMenus,
    };

    try {
      const response: TInvoice = await createOrder(data);
      if (paymentMethod === 'Cash') {
        clearCart();
        router.push(`${targetUrl}/pay-bill?${params}`);
        return;
      }
      if (response && response.invoiceUrl) {
        clearCart();
        router.push(response.invoiceUrl);
      }
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  console.log('name:', userSession?.name);

  return (
    <>
      <div className='w-full flex flex-col shadow-[0_0_5px_#333] rounded-xl border border-slate-800 text-slate-600 p-3 my-3 gap-2'>
        <h2 className='font-bold text-sm text-slate-800 md:text-xl'>
          Rincian Pesanan
        </h2>
        <div className='w-full flex items-center justify-between px-3 text-sm'>
          <div>
            <p>Total Pesanan:</p>
            <p>Fee:</p>
          </div>
          <div>
            <p className='text-slate-800'>{totalPesanan}</p>
            <p className='text-slate-800'>{fee}</p>
          </div>
        </div>
        <hr className='w-full h-1 bg-slate-300 rounded-xl my-3' />
        <div className='w-full flex items-center justify-between px-3'>
          <p className='text-sm'>Total Bayar:</p>
          <p className='font-bold text-slate-800'>{totalBayar} </p>
        </div>
      </div>
      <h1 className='font-bold text-sm my-3 text-slate-800 w-full pl-5'>
        Metode Pembayaran
      </h1>
      <div className='flex flex-col gap-3 transition-all duration-500'>
        <Label
          htmlFor='E-Wallet'
          className={`w-full flex items-center justify-between rounded-xl border border-slate-500 py-3 px-10 gap-2 ${
            paymentMethod === 'E-Wallet'
              ? 'shadow-[0_0_2px_#333,inset_0px_0_10px_#A2AACB]'
              : 'border-slate-500'
          }`}
        >
          <h1 className='font-bold text-sm md:text-xl'>E-Wallet</h1>
          <Radio
            theme={customRadioTheme}
            id='E-Wallet'
            name='payment-method'
            value='E-Wallet'
            onChange={handleSelectedPaymentMethod}
          />
        </Label>
        <Label
          htmlFor='Cash'
          className={`w-full flex items-center justify-between rounded-xl border border-slate-500 py-3 px-10 gap-2 ${
            paymentMethod === 'Cash'
              ? 'shadow-[0_0_2px_#333,inset_0px_0_10px_#A2AACB]'
              : 'border-slate-500'
          }`}
        >
          <h1 className='font-bold text-sm md:text-xl'>Cash</h1>
          <Radio
            theme={customRadioTheme}
            id='Cash'
            name='payment-method'
            value='Cash'
            onChange={handleSelectedPaymentMethod}
          />
        </Label>
      </div>
      <div className='w-full my-3 py-3 flex items-center justify-center'>
        <Button
          theme={customButtonTheme}
          color='buttonPrimary'
          size='sm'
          onClick={handleCreateOrder}
        >
          Buat Pesanan
          <HiShoppingCart size={25} />
        </Button>
      </div>
    </>
  );
}
