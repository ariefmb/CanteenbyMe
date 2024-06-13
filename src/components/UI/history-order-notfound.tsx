import Image from 'next/image';
import React from 'react';
import OrderNotFoundIcon from '@/images/icon/order-not-found.png';

export default function HistoryOrderNotFound() {
  return (
    <div className='w-full h-full p-3 text-slate-800 flex flex-col items-center justify-around'>
      <h1 className='text-2xl text-center font-extrabold'>Order Not Found</h1>
      <p className='text-[15px] text-center font-bold'>
        Upss, sepertinya anda belum memesan apapun.
      </p>
      <Image
        src={OrderNotFoundIcon}
        alt='Order Not Found'
        width={197}
        height={36}
        priority
      />
      <p className='text-[15px] text-center font-bold'>
        Yuk pesan makan sekarang juga!
      </p>
    </div>
  );
}
