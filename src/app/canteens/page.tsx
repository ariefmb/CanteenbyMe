'use client';

import CanteensContainer from '@/components/container/canteens-container';
import AlgoliaProvider from '@/components/search/algolia-search';
import SearchBar from '@/components/UI/search-bar';
import { useCanteenContext } from '@/context/data.context';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import { useEffect, useState } from 'react';

export default async function Canteens() {
  const { canteens, setCanteens } = useCanteenContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCanteens = async () => {
      try {
        const canteens: TCanteens[] = await retrieveAllCanteens();

        setCanteens(canteens);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch canteens', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCanteens();
  }, []);

  return (
    <section className='mx-auto py-5 px-10 bg-background'>
      <section>
        <AlgoliaProvider>
          <SearchBar canteens={canteens} />
        </AlgoliaProvider>
      </section>
      <section>
        <CanteensContainer loading={loading} canteens={canteens} />
      </section>
    </section>
  );
}
