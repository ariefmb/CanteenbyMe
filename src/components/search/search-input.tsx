'use client';

import { useRef, useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { UseSearchBoxProps, useSearchBox } from 'react-instantsearch';

export default function SearchInput({ props }: { props: UseSearchBoxProps }) {
  const { query, refine } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  return (
    <form
      className='flex justify-center w-full md:w-[200%] outline-none'
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();

        if (inputRef.current) {
          inputRef.current.blur();
        }
      }}
    >
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
          <HiSearch className='text-gray-500' />
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
          className='block w-full p-4 pl-10 my-2 text-sm rounded-lg placeholder-gray-400 text-zinc-500'
          placeholder='Mau makan apa?'
        />
      </div>
    </form>
  );
}
