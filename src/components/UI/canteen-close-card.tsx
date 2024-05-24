import { TCanteens } from '@/libs/types';
import { Badge, CustomFlowbiteTheme, Flowbite } from 'flowbite-react';

interface CanteenCardProps {
  canteen: TCanteens;
}

const customTheme: CustomFlowbiteTheme = {
  badge: {
    root: {
      base: 'flex h-fit w-fit items-center justify-center font-semibold',
      color: {
        pink: 'bg-red-200 text-pink-800',
      },
    },
  },
};

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export default function CanteenCloseCard({ canteen }: CanteenCardProps) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <section className='relative h-[105px] w-[327px] md:w-[498px] md:h-[160px] rounded-lg overflow-hidden hover:cursor-not-allowed'>
        <div
          className='canteen-card w-full h-full rounded-lg transition-transform duration-500 bg-center bg-cover transform bg-slate-800 bg-blend-multiply'
          style={{ backgroundImage: `url(${canteen.imageUrl})` }}
        >
          <div className='w-full h-full rounded-lg transition-transform duration-500 text-white transform -z-50'>
            <div className='flex h-1/2 justify-end'>
              {!canteen.open ? (
                <Badge color='pink' size='md'>
                  CLOSE
                </Badge>
              ) : null}
            </div>
            <div className='flex h-1/2 items-end text-slate-500'>
              <div className='w-full h-[50px] flex gap-2 justify-between items-end md:h-[60px]'>
                <div className='w-[200px] h-full flex items-center px-5'>
                  <h1 className='text-lg font-bold leading-tight'>
                    {canteen.name}
                  </h1>
                </div>
                <div className='w-[96px] h-[35px] flex items-center justify-center px-2 py-5 bg-slate-600/20 backdrop-blur rounded-lg md:w-[146px] md:h-[53px]'>
                  <div className='text-[8px] w-full text-center md:text-[11px]'>
                    {canteen.signatureMenu.map((signature, index) => (
                      <p key={index}>
                        {canteen.signatureMenu.length > 1
                          ? truncateText(signature, 11)
                          : truncateText(signature, 16)}
                      </p>
                    ))}
                  </div>
                  <svg
                    className='w-16 h-16 ms-2 text-slate-500'
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
        </div>
      </section>
    </Flowbite>
  );
}
