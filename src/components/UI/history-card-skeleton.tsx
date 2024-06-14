import React from 'react';

interface CardSkeletonProps {
  cards: number;
}

export default function HistoryCardSkeleton({ cards }: CardSkeletonProps) {
  return (
    <div className='w-full h-full'>
      <div className='w-full py-3'>
        <h1 className='text-center text-xl font-bold text-slate-800'>
          Riwayat Pesanan
        </h1>
      </div>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <section
            role='status'
            key={i}
            className='animate-pulse text-slate-800'
          >
            <hr className='w-full h-1 bg-slate-300 rounded-xl' />
            <div className='my-3 px-1'>
              <div className='flex justify-center items-center text-wrap'>
                <div className='flex w-32 h-full items-center justify-center'>
                  <div className='rounded-full overflow-hidden w-[33px] h-[33px] bg-gray-300 flex items-center justify-center'>
                    <svg
                      className='w-10 h-10 text-gray-200'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 18'
                    >
                      <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
                    </svg>
                  </div>
                </div>
                <div className='w-full text-sm flex flex-col text-wrap text-slate-800 gap-2'>
                  <div className='w-[80%] h-5 bg-gray-200 rounded-full'></div>
                  <div className='w-[80%] h-5 bg-gray-200 rounded-full'></div>
                  <div className='w-[80%] h-5 bg-gray-200 rounded-full'></div>
                  <div className='w-[80%] h-5 bg-gray-200 rounded-full'></div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </div>
  );
}
