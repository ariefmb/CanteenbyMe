'use client'

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { HiArrowLeftCircle } from 'react-icons/hi2';

export default function BackCTA() {
  const pathname = usePathname();
  const params = useSearchParams()
  const prevPathname = pathname.substring(
    0,
    pathname.indexOf('/canteens') + 9
  );

  return (
    <Link href={`${prevPathname}?${params}`}>
      <HiArrowLeftCircle className='scale-[2]' />
    </Link>
  );
}
