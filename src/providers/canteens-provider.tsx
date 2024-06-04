'use client';

import { CanteenContext } from '@/context/canteens-context';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import React, { useEffect, useState } from 'react';

export default function CanteensProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [canteens, setCanteens] = useState<TCanteens[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllCanteens = async () => {
      try {
        const canteensRes: TCanteens[] = await retrieveAllCanteens();

        setCanteens(canteensRes);
        setLoading(false);
      } catch (error) {
        console.error('error when fetching canteens', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCanteens();
  }, []);

  return (
    <CanteenContext.Provider value={{ canteens, loading }}>
      {children}
    </CanteenContext.Provider>
  );
}
