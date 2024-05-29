'use client';
import { useSearchContext } from '@/context/search.context';
import { Button } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';

const SearchButton = () => {
  const { setOnShow, onShow } = useSearchContext();

  return (
    <div className='flex justify-center w-full'>
      <div className='relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl'>
        <Button
          onClick={() => setOnShow(true)}
          className='block mx-auto w-full bg-zinc-100 p-4 my-2 text-sm rounded-lg outline placeholder-gray-400 text-zinc-500  focus:border-[#E0E4F9]'
        >
          <FaSearch className='mr-4 ' size={18} />
          Mau makan apa?
        </Button>
      </div>
    </div>
  );
};

export default SearchButton;
