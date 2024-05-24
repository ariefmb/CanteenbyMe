// SearchBar.js
'use client';
import React, { useContext } from 'react';
import { Autocomplete } from '../search/AutoCompletion';
import router, { useRouter } from 'next/router';
import { useLazyRef } from '@/hook/useLazyRef';
// import { SearchContext } from '@/context/SearchContext';

const SearchBar = () => {
  return (
    <form>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      <div className='relative'>
        <Autocomplete
          initialState={
            {
              // query: (router.query.query as string) || '',
            }
          }
          openOnFocus={true}
          placeholder='Mau makan apa?'
          detachedMediaQuery='(max-width: 1024px)'
          classNames={{
            form: 'relative rounded-md ',
            inputWrapperPrefix:
              'absolute inset-y-0 left-0 flex items-center pl-3',
            inputWrapperSuffix:
              'absolute inset-y-0 right-0 flex items-center pr-2',
            label: 'flex items-center ',
            // submitButton: 'h-5 w-5 text-gray-400',
            // clearButton: 'h-5 w-5 text-gray-400 ',
            input:
              'block h-[50px] w-full rounded-md border-black  pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
            panel:
              'flex-1 lg:flex-none lg:absolute lg:mt-2 lg:py-1 z-10 lg:ring-1 lg:ring-black lg:ring-opacity-5 lg:text-sm text-gray-500 bg-white lg:shadow-lg lg:rounded-md overflow-y-scroll lg:max-h-96',
            // detachedSearchButton: 'p-2 text-gray-400 hover:text-gray-500',
            // detachedSearchButtonPlaceholder: 'sr-only',
            // detachedSearchButtonIcon:
            //   'w-6 h-6 flex items-center justify-center',
            // detachedContainer:
            //   'fixed inset-0 flex flex-col divide-y divide-gray-200/50 ',
            // detachedFormContainer: 'flex p-2 bg-white ',
            // detachedCancelButton:
            //   'bg-white px-2 ml-2 text-gray-500 hover:text-gray-600 transition-colors',
          }}
          className='lg:w-4/6 mx-auto '
          navigator={{
            navigate({ itemUrl }) {
              router.push(itemUrl);
            },
          }}
          onSubmit={({ state }) => {
            router.push(`/search/?query=${state.query}`);
          }}
          //   plugins={[getRecentSearchesPlugin(), getQuerySuggestionsPlugin()]}
        />
      </div>
    </form>
  );
};

export default SearchBar;
