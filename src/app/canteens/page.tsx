'use client';
import SearchBar from '@/components/UI/search-bar';
import CanteensContainer from '@/components/container/canteens-container';
import AlgoliaProvider from '@/components/search/algolia-search';
import { useCanteenContext } from '@/context/canteens.context';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function Canteens() {
  const { canteens, loading } = useCanteenContext();
  const { data: session } = useSession();
  const userSession = session?.user;

  useEffect(() => {
    if (!userSession) {
      signIn('google', { redirect: true });
    }
  }, [session]);

  return (
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
          <p className='text-muted-foreground'>email : {userSession?.email}</p>
        </div>
      </section>
      <section>
        <CanteensContainer loading={loading} canteens={canteens} />
      </section>
    </section>
  );
}
