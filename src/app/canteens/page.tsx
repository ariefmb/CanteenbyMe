'use client';
import SearchBar from '@/components/UI/search-bar';
import { AuthToast } from '@/components/UI/toast/auth-toast';
import CanteensContainer from '@/components/container/canteens-container';
import AlgoliaProvider from '@/components/search/algolia-search';
<<<<<<< HEAD
import { useCanteenContext } from '@/context/canteens-context';
=======
import { useCanteenContext } from '@/context/canteens.context';
>>>>>>> 054741667edaad6c437564bab8444503b5f74e93
import { useSession } from 'next-auth/react';

export default function Canteens() {
  const { canteens, loading } = useCanteenContext();
  const { data: session } = useSession();
  const userSession = session?.user;

  return (
    <section className='mx-auto py-5 px-10 bg-background'>
      <section>
        <AlgoliaProvider>
          <SearchBar canteens={canteens} />
        </AlgoliaProvider>
      </section>
<<<<<<< HEAD
=======

>>>>>>> 054741667edaad6c437564bab8444503b5f74e93
      <section className='auth toast'>{userSession && <AuthToast />}</section>
      <section className='CanteensContainer'>
        <CanteensContainer loading={loading} canteens={canteens} />
      </section>
    </section>
  );
}
