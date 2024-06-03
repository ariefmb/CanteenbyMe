'use client';

import { useSearchContext } from '@/context/search.context';
import { Button, CustomFlowbiteTheme, Flowbite, theme } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';

const customTheme: CustomFlowbiteTheme = {
  button: {
    base: 'w-full h-10 md:w-2/3 md:h-[54px] flex items-center justify-start px-2 md:px-4 rounded-md',
    fullSized: 'w-full',
    color: {
      buttonColor:
        'bg-zinc-100 hover:bg-zinc-200 transition-all duration-200 border border-zinc-500 text-zinc-500 active:ring-2 active:ring-primary',
    },
    inner: {
      base: 'flex items-center',
    },
    pill: {
      off: 'rounded-md',
    },
  },
};

export default function SearchButton() {
  const { setOnShow } = useSearchContext();

  return (
    <Flowbite theme={{theme: customTheme}}>
      <div className='flex justify-center'>
        <Button
          onClick={() => setOnShow(true)}
          color='buttonColor'
        >
          <FaSearch className='mr-4' size={18} />
          Mau makan apa?
        </Button>
      </div>
    </Flowbite>
  );
}
