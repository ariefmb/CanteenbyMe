'use client';
import { retrieveDetailCanteenWithId } from '@/libs/apis';
import { useQuery } from '@tanstack/react-query';

interface IUseFetchMenus {
  canteensId: string;
  onError?: (err: Error) => void;
}

export const useFetchMenus = ({ canteensId }: IUseFetchMenus) => {
  return useQuery({
    queryKey: [canteensId],
    queryFn: () => retrieveDetailCanteenWithId(canteensId),
    throwOnError: true,
  });
};
