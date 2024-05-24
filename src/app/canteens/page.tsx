import CanteensContainer from '@/components/canteens/canteens-container';
import SearchBar from '@/components/canteens/search-bar';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import React from 'react';

export default async function Canteens() {
  const canteens: TCanteens[] = await retrieveAllCanteens();
  return (
    <section>
      <section className='searchBar'>
        <SearchBar />
      </section>
      <section className='CanteensContainer'>
        <CanteensContainer canteens={canteens} />
      </section>
    </section>
  );
}
