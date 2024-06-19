'use client';
import { getHistoryOrderByUserId } from '@/libs/apis';
import { useQuery } from '@tanstack/react-query';

export const useFetchOrderHistory = () => {
  return useQuery({
    queryKey: ['fetch.history'],
    queryFn: () => getHistoryOrderByUserId(),
  });
};
