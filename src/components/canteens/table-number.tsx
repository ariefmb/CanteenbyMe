'use client';

import { Card } from 'flowbite-react';

export function TableNumber({ tableNumber }: { tableNumber: string }) {
  return (
    <Card href='#' className='max-w-sm mx-auto'>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mx-auto'>
        Table : {tableNumber}
      </h5>
    </Card>
  );
}
