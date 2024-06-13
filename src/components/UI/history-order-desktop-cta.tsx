import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

export default function HistoryOrderDesktopCTA() {
  const params = useSearchParams();

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Link href={`/canteens/history?${params}`}>
        <HiShoppingCart size={40} />
      </Link>
    </div>
  );
}
