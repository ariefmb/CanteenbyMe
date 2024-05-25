// search-bar.tsx
'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);

    console.log('current query', encodedSearchQuery);
  };
  return (
    <form className='flex justify-center w-full' onSubmit={onSearch}>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      <div className='relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl'>
        <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          type='text'
          onChange={(event) => setSearchQuery(event.target.value)}
          id='default-search'
          autoComplete='off'
          value={searchQuery}
          className='block w-full bg-zinc-100 p-4 pl-10 my-2 text-sm rounded-lg placeholder-gray-400 text-zinc-500  focus:border-[#E0E4F9]'
          placeholder='Mau makan apa?'
        />
      </div>
    </form>
  );
};

export default SearchBar;
