'use client';

import CanteensContainer from '@/components/container/canteens-container';
import Header from '@/components/header/header';
import AlgoliaProvider from '@/components/search/algolia-search';
import SearchBar from '@/components/UI/search-bar';
import { useCanteenContext } from '@/context/data.context';
import { useTableContext } from '@/context/table.context';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CanteensPage: React.FC = () => {
  const table = useSearchParams();
  const params = table ? table.get('table') : null;
  const { tableNumber, setTableNumber } = useTableContext();
  const { canteens, setCanteens } = useCanteenContext();
  const [loading, setLoading] = useState(false);

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
        <section className='CanteensContainer'>
          <CanteensContainer loading={loading} canteens={canteens} />
        </section>
      </section>
    </>
  );
};

export default CanteensPage;
