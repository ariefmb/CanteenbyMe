'use client';

import SearchButton from '@/components/search/search-button';
import SearchModal from '@/components/search/search-modal';
import { SearchProvider } from '@/context/search.context';
import { TCanteens } from '@/libs/types';

const SearchBar = ({ canteens }: { canteens?: TCanteens[] }) => {
  return (
    <SearchProvider>
      <SearchButton />
      <SearchModal canteens={canteens} />
    </SearchProvider>
  );
};

export default SearchBar;
