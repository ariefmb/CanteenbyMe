import { Card, CustomFlowbiteTheme } from 'flowbite-react';

interface CardSkeletonProps {
  cards: number;
}

const customCardTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'flex flex-grow w-[327px] rounded-xl border border-gray-200 bg-white shadow-md md:w-[721px] md:h-[185px]',
    children:
      'flex justify-center items-center w-full h-full overflow-hidden gap-4 px-3 py-5',
  },
};

export default function MenusCardSkeleton({ cards }: CardSkeletonProps) {
  return (
    <div className='w-full flex flex-col items-center gap-5 md:items-start md:px-5'>
      <div className='flex flex-col items-center gap-5 mx-auto'>
        <div className='w-full font-bold text-base text-left md:text-xl'>
          <h1 className='h-7 bg-gray-200 rounded-lg w-48'></h1>
        </div>
        {Array(cards)
          .fill(0)
          .map((_, i) => (
            <Card key={i} theme={customCardTheme} className='flex md:px-10'>
              <div
                role='status'
                className='w-full h-full flex items-center justify-center animate-pulse gap-4'
              >
                <div className='w-2/3 pl-3 flex flex-col gap-5 justify-center'>
                  <div className='w-[30%] h-5 bg-gray-200 rounded-full'></div>
                  <div className='w-[50%] h-5 bg-gray-200 rounded-full'></div>
                  <div className='w-[100%] h-5 bg-gray-200 rounded-full max-w-[440px]'></div>
                  <div className='w-[30%] h-5 bg-gray-200 rounded-full max-w-[460px]'></div>
                </div>
                <div className='flex flex-col items-center justify-center w-1/3 gap-2'>
                  <div className='rounded-[10px] w-[94px] h-[82px] md:w-[101px] md:h-[89px] bg-gray-300 flex items-center justify-center'>
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
                  <div className='w-[85px] px-2 h-8 flex justify-center items-center transition-all duration-500 transform bg-gray-200 rounded-full'></div>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
