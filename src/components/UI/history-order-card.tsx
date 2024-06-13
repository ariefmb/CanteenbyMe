import { THistoryOrders } from '@/libs/types';
import React from 'react';
import TimerIcon from '@/images/icon/timer-icon.png';
import CheckIcon from '@/images/icon/check-green-icon.png';
import Image from 'next/image';

interface HistoryOrderCardProps {
  historyOrder: THistoryOrders;
}

export default function HistoryOrderCard({
  historyOrder,
}: HistoryOrderCardProps) {
  return (
    <section className='text-slate-800'>
      <hr className='w-full h-1 bg-slate-300 rounded-xl' />
      <div className='my-3 px-1 md:my-5'>
        <div className='flex justify-center items-center text-wrap'>
          <div className='flex w-32 h-full items-center justify-center'>
            {historyOrder.status !== 'PAID' ? (
              <Image
                src={TimerIcon}
                alt='Timer Icon'
                width={33}
                height={33}
                priority
              />
            ) : (
              <Image
                src={CheckIcon}
                alt='Check Icon'
                width={33}
                height={33}
                priority
              />
            )}
          </div>
          <div className='w-full text-sm flex flex-col text-wrap text-slate-800'>
            <h1>No Pesanan: {historyOrder.id}</h1>
            <h1>
              No Meja: Meja{' '}
              {historyOrder.tableNumber.length !== 2
                ? `0${historyOrder.tableNumber}`
                : historyOrder.tableNumber}
            </h1>
            <h1>Waktu Pembayaran: {historyOrder.paidAt || 'Belum Membayar'}</h1>
            <h1>Jenis Pembayaran: {historyOrder.paymentMethod || 'Cash'}</h1>
            <h1>Status: {historyOrder.status}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
