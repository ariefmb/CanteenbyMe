import { TCanteens } from '@/libs/types';
import AlgoliaProvider from '../search/algolia-search';
import SearchInput from '../search/search-input';
import SearchButton from '../search/search-button';
import {
  Highlight,
  Hits,
  InstantSearch,
  InstantSearchSSRProvider,
  SearchBoxProps,
} from 'react-instantsearch';
import { useState } from 'react';
import { SearchProvider } from '@/context/search.context';
import SearchModal from '../search/search-modal';
import { Autocomplete } from '../search/AutoCompletion';

const SearchBar = ({ canteens }: { canteens: TCanteens[] }) => {
  const queryHook: SearchBoxProps['queryHook'] = (query, search) => {
    search(query);
  };

  return (
    <InstantSearchSSRProvider>
      <AlgoliaProvider>
        <SearchProvider>
          <SearchButton />
          <SearchModal canteens={canteens} />
        </SearchProvider>
      </AlgoliaProvider>
    </InstantSearchSSRProvider>
  );
};

export default SearchBar;
