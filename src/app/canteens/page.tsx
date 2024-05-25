'use client';
import CanteensContainer from '@/components/canteens/canteens-container';
import SearchBar from '@/components/canteens/search-bar';
import { TableNumber } from '@/components/canteens/table-number';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default async function Canteens() {
  const table = useSearchParams();
  const params = table ? table.get('num') : null;
  const canteens: TCanteens[] = await retrieveAllCanteens();

  return (
    <section>
      <section className='searchBar'>
        <TableNumber tableNumber={params!!} />
        <SearchBar />
      </section>
      <section className='CanteensContainer'>
        <CanteensContainer canteens={canteens} />
      </section>
    </section>
  );
}
