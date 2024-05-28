import SearchModal from '@/components/search/search-modal';
import { SearchProvider } from '@/context/search.context';
import { TCanteens } from '@/libs/types';
import { InstantSearchSSRProvider, SearchBoxProps } from 'react-instantsearch';
import AlgoliaProvider from '@/components/search/algolia-search';
import SearchButton from '@/components/search/search-button';

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
