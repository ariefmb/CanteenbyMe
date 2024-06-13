import { THistoryOrders } from '@/libs/types';
import React from 'react';
import TimerIcon from '@/images/icon/timer-icon.png';
import Image from 'next/image';

interface HistoryOrderCardProps {
  historyOrder: THistoryOrders;
}

export default function HistoryOrderCard({
  historyOrder,
}: HistoryOrderCardProps) {
  return (
    <section>
      <h1>Riwayat Pesanan</h1>
      <hr className='w-full h-1 bg-slate-300 rounded-xl my-3' />
      <div className='flex flex-col items-center'>
        <div className='flex'>
          <Image src={TimerIcon} alt='Timer Icon' width={100} />
          <div className='text-xl text-slate-800'>
            <h1>No Pesanan: {historyOrder.id}</h1>
            <h1>No Meja: {historyOrder.tableNumber}</h1>
            <h1>Waktu Pembayaran: {historyOrder.paidAt}</h1>
            <h1>Jenis Pembayaran: {historyOrder.paymentMethod}</h1>
            <h1>Status: {historyOrder.status}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
