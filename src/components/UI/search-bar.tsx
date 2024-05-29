'use client';

import SearchModal from '@/components/search/search-modal';
import { SearchProvider } from '@/context/search.context';
import { TCanteens } from '@/libs/types';
import { InstantSearchSSRProvider, SearchBoxProps } from 'react-instantsearch';
import AlgoliaProvider from '@/components/search/algolia-search';
import SearchButton from '@/components/search/search-button';

const SearchBar = ({ canteens }: { canteens?: TCanteens[] }) => {
  return (
    <SearchProvider>
      <SearchButton />
      <SearchModal canteens={canteens} />
    </SearchProvider>
  );
};

export default SearchBar;
