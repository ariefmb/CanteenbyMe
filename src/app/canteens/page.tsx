'use client';

import CanteensContainer from '@/components/container/canteens-container';
import AlgoliaProvider from '@/components/search/algolia-search';
import SearchBar from '@/components/UI/search-bar';
import { useCanteenContext } from '@/context/canteens-context';

export default function Canteens() {
  const { canteens, loading } = useCanteenContext();

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
