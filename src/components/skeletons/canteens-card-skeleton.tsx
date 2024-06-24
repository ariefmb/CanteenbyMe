import React from 'react';

interface CardSkeletonProps {
  cards: number;
}

export default function CanteensCardSkeleton({ cards }: CardSkeletonProps) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <section
        key={i}
        role='status'
        className='animate-pulse group relative h-[105px] w-[327px] md:w-[498px] md:h-[160px] rounded-lg overflow-hidden'
      >
        <div className='absolute inset-0 z-0 w-full h-full transition-transform duration-500 bg-center bg-cover transform group-hover:scale-110'>
          <div className='relative z-10 w-full h-full rounded-lg transition-transform duration-500 bg-gradient-to-t from-slate-900 text-white flex items-end justify-center group-hover:scale-95'>
            <div className='flex h-1/2 w-full items-end'>
              <div className='w-full h-[50px] flex gap-2 justify-between items-end md:h-[60px]'>
                <div className='w-[200px] h-full flex flex-col items-start justify-center px-5 gap-1'>
                  <div className='w-[80%] h-5 rounded-full bg-gray-500'></div>
                  <div className='w-[80%] h-5 rounded-full bg-gray-500'></div>
                </div>
                <div className='w-[96px] h-[35px] flex items-center justify-center px-2 py-5 gap-3 bg-slate-600/20 backdrop-blur rounded-lg md:w-[146px] md:h-[53px]'>
                  <div className='flex flex-col gap-1 w-[80%]'>
                    <div className='w-full h-3 bg-gray-500 rounded-full'></div>
                    <div className='w-full h-3 bg-gray-500 rounded-full'></div>
                  </div>
                  <div className='rounded-full overflow-hidden w-fit h-fit bg-gray-300 flex items-center justify-center'>
                    <svg
                      className='w-14 h-10 text-gray-200'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 18'
                    >
                      <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ));
}
