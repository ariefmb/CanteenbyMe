//import InstantSearch component from the hooks library we just installed
import { InstantSearch } from 'react-instantsearch';
// import newly created Algolia client
import { algoliaClient } from '@/libs/apis/search.services';
import { FC, PropsWithChildren } from 'react';

const AlgoliaProvider: FC<PropsWithChildren> = ({ children }) => {
  const indexName = 'menus';
  return (
    <InstantSearch
      searchClient={algoliaClient}
      indexName={indexName}
      future={{ preserveSharedStateOnUnmount: true }}
    >
      {children}
    </InstantSearch>
  );
};

export default AlgoliaProvider;
