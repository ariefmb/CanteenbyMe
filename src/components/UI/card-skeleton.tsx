import { Card, CustomFlowbiteTheme } from 'flowbite-react';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

interface CardSkeletonProps {
  cards: number;
}

const customCardTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'flex flex-grow w-[327px] rounded-xl border border-gray-200 bg-white shadow-md md:w-[721px]',
    children:
      'flex justify-center items-center w-full h-full overflow-hidden gap-4 px-3 py-5',
  },
};

export default function CardSkeleton({ cards }: CardSkeletonProps) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
        <Card key={i} theme={customCardTheme} className='flex md:px-10'>
          <div className='w-2/3 h-full pl-3 flex flex-col gap-2 justify-center bg-violet-400 rounded-[10px]'>
            <Skeleton count={4} width={40} height={40} duration={1000}/>
          </div>
          <div className='flex flex-col items-center justify-center w-1/3 gap-3'>
            <div className='rounded-[10px] w-[94px] h-[82px] md:w-[101px] md:h-[89px] bg-blue-300 overflow-hidden'>
              <Skeleton
                count={4}
                width={94}
                height={82}
                duration={1000}
                className='w-full h-full'
              />
            </div>
            <div className='md:w-[101px] px-2 h-10 rounded-[10px] flex justify-center items-center transition-all duration-500 transform bg-yellow-300'></div>
          </div>
        </Card>
      </SkeletonTheme>
    ));
}
