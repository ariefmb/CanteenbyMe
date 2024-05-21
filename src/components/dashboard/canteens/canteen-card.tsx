import { TCanteens } from '@/libs/types';
import Image from 'next/image';
import React from 'react';

interface CanteenCardProps {
  canteen: TCanteens;
}
export default function CanteenCard({ canteen }: CanteenCardProps) {
  return (
    <div>
      <div className=''>
        <Image src={`${canteen?.imageUrl}`} alt='Canteen Banner' width={200} height={200}/>
      </div>
      <div className="">
        <h1>{canteen.name}</h1>
      </div>
    </div>
  );
}
