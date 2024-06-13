'use client';

import { getHistoryOrderByUserId } from '@/libs/apis';
import { THistoryOrders } from '@/libs/types';
import { useEffect, useState } from 'react';
import HistoryOrderCard from '../UI/history-order-card';
import HistoryOrderNotFound from '../UI/history-order-notfound';

interface HistoryContainerProps {
  userId: string;
}

export default function HistoryOrdersContainer() {
  const [historyOrders, setHistoryOrders] = useState<
    THistoryOrders[] | undefined
  >();

  useEffect(() => {
    const getAllHistoryOrders = async () => {
      try {
        const historyOrders: THistoryOrders[] = await getHistoryOrderByUserId();
        setHistoryOrders(historyOrders);
      } catch (error) {
        console.error('error when fetching canteens', error);
      }
    };

    getAllHistoryOrders();
  }, []);

  return (
    <div className='w-full h-full'>
      {!historyOrders ? (
        <HistoryOrderNotFound />
      ) : (
        <div className='w-full h-full'>
          <div className='w-full py-3'>
            <h1 className='text-center text-xl font-bold text-slate-800'>
              Riwayat Pesanan
            </h1>
          </div>
          {historyOrders.map((historyOrder) => (
            <HistoryOrderCard historyOrder={historyOrder} />
          ))}
        </div>
      )}
    </div>
  );
}
