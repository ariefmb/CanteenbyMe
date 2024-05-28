// search-bar.tsx
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import {
  Highlight,
  Hits,
  useInstantSearch,
  useSearchBox,
  UseSearchBoxProps,
} from 'react-instantsearch';

import { Button, Modal, Select } from 'flowbite-react';
import { TCanteens } from '@/libs/types';

const SearchInput = ({ props }: { props: UseSearchBoxProps }) => {
  const { query, refine } = useSearchBox(props);
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearchStalled = status === 'stalled';

  // console.log('canteen results :', canteens);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);

    refine(newQuery);
  }
  return (
    <>
      <form
        className='flex justify-center w-full outline-none'
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();

          if (inputRef.current) {
            inputRef.current.blur();
          }
        }}
      >
        <div className='relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl'>
          <div>
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
              ref={inputRef}
              type='search'
              onChange={(event) => {
                setQuery(event.currentTarget.value);
              }}
              id='default-search'
              autoComplete='off'
              value={inputValue}
              className='block w-full p-4 pl-10 my-2 text-sm rounded-lg placeholder-gray-400 text-zinc-500 focus:none'
              placeholder='Mau makan apa?'
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
