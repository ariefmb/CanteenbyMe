//import InstantSearch component from the hooks library we just installed
import { InstantSearch } from 'react-instantsearch-hooks-web';
// import newly created Algolia client
import { alogliaClient } from '@/libs/apis/search.services';
import { FC, PropsWithChildren } from 'react';

const AlgoliaProvider: FC<PropsWithChildren> = ({ children }) => {
  const indexName = 'Your Algolia Index Name';
  return (
    <InstantSearch searchClient={alogliaClient} indexName={indexName}>
      {children}
    </InstantSearch>
  );
};

export default AlgoliaProvider;
