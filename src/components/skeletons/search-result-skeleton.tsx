import React from 'react';

interface CardSkeletonProps {
  cards: number;
}

export default function SearchResultSkeleton({ cards }: CardSkeletonProps) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className='flex items-center gap-3 md:m-3 text-slate-800 mb-5 sm:px-10 md:px-5 animate-pulse'>
        <div className='w-[80px] h-[70px] md:min-w-[100px] bg-gray-300 rounded-md'></div>
        <div className='md:ml-5 col-span-5 w-full'>
          <div className='h-4 bg-gray-300 rounded w-3/4 mb-2'></div>
          <div className='h-4 bg-gray-300 rounded w-1/2 mb-2'></div>
          <div className='h-4 bg-gray-300 rounded w-1/4'></div>
        </div>
        <div className='w-[100%] h-12 sm:w-[50%] sm:px-5 md:px-2 flex justify-center items-center'>
          <div className='h-8 w-24 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    ));
}
