import { useCartContext } from '@/context/cart.context';
import { CustomFlowbiteTheme, Label, Radio } from 'flowbite-react';
import React from 'react';

const customTheme: CustomFlowbiteTheme['radio'] = {
  root: {
    base: 'h-4 w-4 border border-gray-500 text-cyan-600 focus:ring-2 focus:ring-cyan-500',
  },
};

export default function OrderDetail() {
  const { getTotalPrice } = useCartContext();
  const fees = getTotalPrice() !== 0 ? 500 : 0

  const totalPesanan = new Intl.NumberFormat('id', {
    style: 'currency',
    currency: 'IDR',
  }).format(getTotalPrice());


  const fee = new Intl.NumberFormat('id', {
    style: 'currency',
    currency: 'IDR',
  }).format(fees);

  const totalBayar = new Intl.NumberFormat('id', {
    style: 'currency',
    currency: 'IDR',
  }).format(getTotalPrice() + fees);

  return (
    <>
      <div className='w-full flex flex-col rounded-xl border border-slate-800 text-slate-800 p-3 my-3 gap-2'>
        <h2 className='font-bold text-sm md:text-xl'>Rincian Pesanan</h2>
        <div className='w-full flex items-center justify-between px-3 text-sm'>
          <div>
            <p>Total Pesanan:</p>
            <p>Fee:</p>
          </div>
          <div>
            <p>{totalPesanan}</p>
            <p>{fee}</p>
          </div>
        </div>
        <hr className='w-full h-1 bg-slate-300 rounded-xl my-3' />
        <div className='w-full flex items-center justify-between px-3'>
          <p className='text-sm'>Total Bayar:</p>
          <p className='font-bold'>{totalBayar} </p>
        </div>
      </div>
      <h1 className='font-bold text-sm my-3 text-slate-800 w-full pl-5'>
        Metode Pembayaran
      </h1>
      <div className='flex flex-col gap-3'>
        <Label
          htmlFor='E-Wallet'
          className='w-full flex items-center justify-between rounded-xl border border-slate-800 py-3 px-10 gap-2'
        >
          <h1 className='font-bold text-sm md:text-xl'>E-Wallet</h1>
          <Radio
            theme={customTheme}
            id='E-Wallet'
            name='payment-method'
            value='E-Wallet'
            defaultChecked
          />
        </Label>
        <Label
          htmlFor='Cash'
          className='w-full flex items-center justify-between rounded-xl border border-slate-800 py-3 px-10 gap-2'
        >
          <h1 className='font-bold text-sm md:text-xl'>Cash</h1>
          <Radio
            theme={customTheme}
            id='Cash'
            name='payment-method'
            value='Cash'
            defaultChecked
          />
        </Label>
      </div>
    </>
  );
}
