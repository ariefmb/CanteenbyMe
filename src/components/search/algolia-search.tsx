import { InstantSearch, InstantSearchSSRProvider } from 'react-instantsearch';

import { algoliaClient } from '@/libs/apis/search.services';
import { FC, PropsWithChildren } from 'react';

const AlgoliaProvider: FC<PropsWithChildren> = ({ children }) => {
  const indexName = 'menus';
  return (
    <InstantSearchSSRProvider>
      <InstantSearch
        searchClient={algoliaClient}
        indexName={indexName}
        future={{ preserveSharedStateOnUnmount: true }}
      >
        {children}
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
};

export default AlgoliaProvider;
