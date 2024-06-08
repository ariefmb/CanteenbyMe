import { useCartContext } from '@/context/cart.context';
import { CustomFlowbiteTheme, Label, Radio } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const customTheme: CustomFlowbiteTheme['radio'] = {
  root: {
    base: 'h-4 w-4 border border-gray-500 text-primary focus:ring-2 focus:ring-primary',
  },
};

export default function OrderDetail() {
  const { getTotalPrice } = useCartContext();
  const [totalPesanan, setTotalPesanan] = useState('Rp 0,00');
  const [fee, setFee] = useState('Rp 0,00');
  const [totalBayar, setTotalBayar] = useState('Rp 0,00');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const totalPrice = getTotalPrice();
    const fees = totalPrice !== 0 ? 500 : 0;

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
  }, [getTotalPrice]);

  const handleSelectedPaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

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
            theme={customTheme}
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
            theme={customTheme}
            id='Cash'
            name='payment-method'
            value='Cash'
            onChange={handleSelectedPaymentMethod}
          />
        </Label>
      </div>
    </>
  );
}
