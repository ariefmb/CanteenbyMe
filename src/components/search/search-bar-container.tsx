import { TCanteens } from '@/libs/types';
import { Button, CustomFlowbiteTheme } from 'flowbite-react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import AlgoliaProvider from './algolia-search';
import SearchBar from '../UI/search-bar';

const customTheme: CustomFlowbiteTheme['button'] = {
  base: 'w-full h-10 md:w-2/3 md:h-[54px] flex items-center justify-start px-2 md:px-4 rounded-md mb-5',
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
  disabled: 'cursor-not-allowed opacity-50',
};

interface SearchBarProps {
  canteens: TCanteens[] | undefined;
  loading?: boolean;
}

export default function SearchBarContainer({
  canteens,
  loading,
}: SearchBarProps) {
  return loading ? (
    <div role='status' className='animate-pulse flex justify-center'>
      <Button theme={customTheme} color='buttonColor' disabled>
        <FaSearch className='mr-4' size={18} />
        Mau makan apa?
      </Button>
    </div>
  ) : canteens ? (
    <AlgoliaProvider>
      <SearchBar canteens={canteens} />
    </AlgoliaProvider>
  ) : null;
}
