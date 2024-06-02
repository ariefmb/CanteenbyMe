'use client';
import SearchBar from '@/components/UI/search-bar';
import CanteensContainer from '@/components/container/canteens-container';
import Header from '@/components/header/header';
import AlgoliaProvider from '@/components/search/algolia-search';
import { useCanteenContext } from '@/context/data.context';
import { useTableContext } from '@/context/table.context';
import { retrieveAllCanteens } from '@/libs/apis';
import { signIn, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


const CanteensPage: React.FC = async () => {
  const table = useSearchParams();
  const params = table ? table.get('table') : null;
  const { tableNumber, setTableNumber } = useTableContext();
  const { canteens, setCanteens } = useCanteenContext();
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const userSession = session?.user;

  useEffect(() => {
    if (!userSession) {
      signIn('google', { redirect: true });
    }
  }, [session]);

  useEffect(() => {
    const queryTable = () => {
      setTableNumber(params);
    };
    queryTable();
  }, [params, setTableNumber]);

  useEffect(() => {
    const fetchCanteens = async () => {
      try {
        setLoading(true);
        const canteens = await retrieveAllCanteens();
        setCanteens(canteens);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Failed to fetch canteens', error);
      }
    };
    fetchCanteens();
  }, []);

  return (
    <>
      <Header tableNumber={tableNumber} />
      <section className='mx-auto py-5 px-10 bg-background'>
        <section>
          <AlgoliaProvider>
            <SearchBar canteens={canteens} />
          </AlgoliaProvider>
        </section>
        <section className='Test Auth User'>
          {/* Buat Test user aja, kalo udah boleh dihapus */}
          <div className='mx-3 my-10 flex flex-col items-center gap-3 text-slate-700'>
            <h1 className='text-center text-xl font-bold'>
              name : {userSession?.name || `User ${userSession?.id}`}
            </h1>
            <p className='text-muted-foreground'>
              email : {userSession?.email}
            </p>
          </div>
        </section>
        <section className='CanteensContainer'>
          <CanteensContainer loading={loading} canteens={canteens} />
        </section>
      </section>
    </>
  );
};

export default CanteensPage;
