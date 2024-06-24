'use client';

import SearchButton from '@/components/search/search-button';
import SearchModal from '@/components/search/search-modal';
import { TCanteens } from '@/libs/types';
import SearchProvider from '@/providers/search-provider';

const SearchBar = ({ canteens }: { canteens?: TCanteens[] }) => {
  return (
    <SearchProvider>
      <SearchButton />
      <SearchModal canteens={canteens} />
    </SearchProvider>
  );
};

export default SearchBar;
