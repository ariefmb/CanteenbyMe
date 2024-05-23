import { TCanteens } from '@/libs/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { usePathname } from 'next/navigation';

interface CanteenCardProps {
  canteen: TCanteens;
}
export default function CanteenCard({ canteen }: CanteenCardProps) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <section
      className={`h-[105px] w-[327px] bg-center bg-cover bg-no-repeat rounded-lg md:w-[498px] md:h-[160px]`}
      style={{ backgroundImage: `url(${canteen.imageUrl})` }}
    >
      <Link href={`${pathname}canteens/${canteen.id}`} target='_blank'>
        <div className='h-full rounded-lg overflow-hidden bg-gradient-to-t from-slate-900 flex flex-col text-white'>
          <div className='flex h-1/2 justify-end'>
            {!canteen.open ? (
              <Badge
                variant='destructive'
                className='w-[64px] h-[24px] md:w-[98px] md:h-[37px] flex justify-center md:text-lg rounded-md'
              >
                CLOSE
              </Badge>
            ) : null}
          </div>
          <div className='flex h-1/2 items-end'>
            <div className='w-full h-[50px] flex gap-2 justify-between items-end md:h-[60px]'>
              <div className='w-[200px] h-full flex items-center px-5'>
                <h1 className='text-lg font-bold text-white leading-tight'>
                  {canteen.name}
                </h1>
              </div>
              <div className='w-[96px] h-[35px] flex items-center justify-center px-2 py-5 bg-slate-600/20 backdrop-blur rounded-lg overflow-hidden md:w-[146px] md:h-[53px]'>
                <p className='text-[8px] w-full text-center md:text-[11px]'>
                  {canteen.signatureMenu.map((signature, index) => (
                    <p key={index}>{signature}</p>
                  ))}
                </p>
                <svg
                  className='w-16 h-16 ms-2 text-yellow-300'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
