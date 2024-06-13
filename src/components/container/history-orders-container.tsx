import { getHistoryOrderByUserId } from '@/libs/apis';
import { THistoryOrders } from '@/libs/types';
import { getSessionToken } from '@/libs/utils';
import { Alert, CustomFlowbiteTheme } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import HistoryOrderCard from '../UI/history-order-card';
import OrderNotFoundIcon from '@/images/icon/order-not-found.png';
import Image from 'next/image';

interface HistoryContainerProps {
  userId: string;
}

export default async function HistoryOrdersContainer({
  userId,
}: HistoryContainerProps) {
  const [historyOrders, setHistoryOrders] = useState<
    THistoryOrders[] | undefined
  >();

  useEffect(() => {
    const getAllHistoryOrders = async () => {
      try {
        const session = await getSessionToken();
        const sessionToken = session.sessionToken;
        const historyOrders: THistoryOrders[] = await getHistoryOrderByUserId(
          userId,
          sessionToken
        );
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
      ) : (
        historyOrders.map((historyOrder) => (
          <HistoryOrderCard historyOrder={historyOrder} />
        ))
      )}
    </div>
  );
}
