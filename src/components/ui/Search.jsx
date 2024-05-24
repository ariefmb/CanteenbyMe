import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite.css';
import { Hits, InstantSearch, SearchBox, Configure } from 'react-instantsearch';

import { Hit } from './Hit';

const searchClient = algoliasearch(
  'UWFDQE2MRW',
  '92fc3ed93bbc1802ec1d6aabe121db38'
);

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName='canteens'>
      <Configure hitsPerPage={5} />
      <div className='ais-InstantSearch'>
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};
