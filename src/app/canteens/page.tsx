import CanteensContainer from '@/components/container/canteens-container';
import SearchBar from '@/components/UI/search-bar';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import React from 'react';

export default async function Canteens() {
  const canteens: TCanteens[] = await retrieveAllCanteens();

  return (
    <section className='mx-auto py-5 px-10 bg-background'>
      <section>
        <SearchBar canteens={canteens} />
      </section>
      <section className='CanteensContainer'>
        <CanteensContainer canteens={canteens} />
      </section>
    </section>
  );
}
