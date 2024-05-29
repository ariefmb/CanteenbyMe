import { useCanteenContext } from '@/context/data.context';
import { AlgoliaHit } from 'instantsearch.js';
import { FC } from 'react';
import { useInstantSearch } from 'react-instantsearch';

type HitProps = {
  hit: AlgoliaHit<{
    canteen_id?: string;
    name?: string;
    image_url?: string;
    type?: string;
    price?: number;
  }>;
};

const SearchResults: FC = () => {
  const { results } = useInstantSearch();
  const { canteens } = useCanteenContext();

  return canteens?.map((canteen) => {
    return <p>{canteen.name}</p>;
  });
  // <div className='text-slate-500'>
  //   {results?.hits.map((hit) => (
  //     <div>
  //       <div>
  //         <p>{hit.name}</p>
  //       </div>
  //       <div>
  //         <p>{hit.image_url}</p>
  //       </div>
  //     </div>
  //   ))}
  // </div>
};

export default SearchResults;
