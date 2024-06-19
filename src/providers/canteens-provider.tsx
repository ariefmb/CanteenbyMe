'use client';

import { CanteenContext } from '@/context/canteens.context';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';

export default function CanteensProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [canteens, setCanteens] = useState<TCanteens[] | undefined>();
  const [loading, setLoading] = useState<boolean | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const fetchAllCanteens = async () => {
      try {
        setLoading(true);
        const canteensRes: TCanteens[] = await retrieveAllCanteens();

        setCanteens(canteensRes);
        setLoading(false);
      } catch (error: any) {
        if (error instanceof Error) {
          setError(error.message);
        }
        console.error('error when fetching canteens', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCanteens();
  }, []);

  return (
    <CanteenContext.Provider value={{ canteens, loading, error }}>
      {children}
    </CanteenContext.Provider>
  );
}
