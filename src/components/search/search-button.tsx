'use client';
import { useSearchContext } from '@/context/search.context';
import { Button, CustomFlowbiteTheme } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';

const customTheme: CustomFlowbiteTheme['button'] = {
  base: 'h-10 w-full md:h-[54px] md:w-2/3 flex items-center justify-center pl-2 rounded-md',
  fullSized: 'w-full',
  color: {
    base: 'bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 transition-all duration-200 text-zinc-500 border border-zinc-500 active:ring-2 active:ring-primary',
  },
  inner: {
    base: 'flex w-full text-left',
  },
};

const SearchButton = () => {
  const { setOnShow } = useSearchContext();

  return (
    <div className='flex justify-center items-center w-full px-5 mb-5'>
      <Button theme={customTheme} onClick={() => setOnShow(true)} color='base'>
        <FaSearch className='mr-4' size={18} />
        Mau makan apa?
      </Button>
    </div>
  );
};

export default SearchButton;
