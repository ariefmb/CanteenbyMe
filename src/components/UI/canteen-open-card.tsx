import { TCanteens } from '@/libs/types';
import { Popover } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CanteenCardProps {
  canteen: TCanteens;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export default function CanteenOpenCard({ canteen }: CanteenCardProps) {
  const pathname = usePathname();
  const content = (
    <div className='w-fit h-fit text-[8px] md:text-[10px] text-slate-200 bg-slate-800 rounded-md overflow-hidden'>
      <div className='p-2'>
        {canteen.signatureMenu.map((signature, index) => (
          <p key={index}>{signature}</p>
        ))}
      </div>
    </div>
  );

  return (
    <section className='group relative h-[105px] w-[327px] md:w-[498px] md:h-[160px] rounded-lg overflow-hidden'>
      <div
        className='absolute inset-0 z-0 w-full h-full transition-transform duration-500 bg-center bg-cover transform group-hover:scale-110'
        style={{ backgroundImage: `url(${canteen.imageUrl})` }}
      >
        <Link href={`${pathname}/${canteen.id}`}>
          <div className='relative z-10 w-full h-full rounded-lg transition-transform duration-500 bg-gradient-to-t from-slate-900 text-white flex items-end justify-center group-hover:scale-95'>
            <div className='flex h-1/2 w-full items-end'>
              <div className='w-full h-[50px] flex gap-2 justify-between items-end md:h-[60px]'>
                <div className='w-[200px] h-full flex items-center px-5'>
                  <h1 className='text-lg font-bold text-white leading-tight'>
                    {canteen.name}
                  </h1>
                </div>
                <Popover
                  aria-labelledby='default-popover'
                  content={content}
                  arrow={false}
                  trigger='hover'
                >
                  <div className='w-[96px] h-[35px] flex items-center justify-center px-2 py-5 bg-slate-600/20 backdrop-blur rounded-lg md:w-[146px] md:h-[53px]'>
                    <div className='text-[6px] w-full text-left md:text-[11px]'>
                      {canteen.signatureMenu.map((signature, index) => (
                        <p key={index}>
                          {canteen.signatureMenu.length > 1
                            ? truncateText(signature, 11)
                            : truncateText(signature, 16)}
                        </p>
                      ))}
                    </div>
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
                </Popover>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
