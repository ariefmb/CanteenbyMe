'use client';

import { useFetchOrderHistory } from '@/hook/useFetchOrderHistory';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import HistoryOrderCard from '../history/history-order-card';
import HistoryOrderNotFound from '../history/history-order-notfound';
import HistoryCardSkeleton from '../skeletons/history-card-skeleton';

export default function HistoryOrdersContainer() {
  const {
    data: fetchOrderHistory,
    isLoading: fetchOrderHistoryIsLoading,
    error: fetchOrderHistoryError,
  } = useFetchOrderHistory();

  useEffect(() => {
    toast.error(fetchOrderHistoryError?.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: 'light',
    });
  }, [fetchOrderHistoryError]);

  return (
    <div className='w-full h-full'>
      {fetchOrderHistoryIsLoading ? (
        <HistoryCardSkeleton cards={3} />
      ) : !fetchOrderHistory || fetchOrderHistoryError ? (
        <HistoryOrderNotFound />
      ) : (
        <div className='w-full h-full'>
          <div className='w-full py-3'>
            <h1 className='text-center text-xl font-bold text-slate-800'>
              Riwayat Pesanan
            </h1>
          </div>
          {fetchOrderHistory.map((historyOrder) => (
            <HistoryOrderCard historyOrder={historyOrder} />
          ))}
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
