import { retrieveAllCanteens, retrieveDetailCanteenWithId } from '@/libs/apis';
import { TCanteens } from '@/libs/types';
import React from 'react';

type TResponse = {
  success: boolean;
  data: TCanteens;
  message?: string;
};

interface CanteenProps {
  params: {
    canteenId: string;
  };
}

export default async function Canteen({ params }: CanteenProps) {
  const { canteenId } = params;
  const response: TResponse = await retrieveDetailCanteenWithId(canteenId);
  const canteen = response.data as TCanteens;
  return <div>{canteen.name}</div>;
}
