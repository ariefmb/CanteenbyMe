import { TCanteens } from '@/libs/types';
import { Hit as AlgoliaHit } from 'instantsearch.js';

type HitProps = {
  hit: AlgoliaHit<{
    canteen_id: string;
    name: string;
    image_url: string;
    type: string;
    price: number;
  }>;
};

const SearchResult = ({
  hit,
  canteens,
}: {
  hit: HitProps;
  canteens: TCanteens[];
}) => {
  const canteen = canteens?.find(
    (canteen) => canteen.id === hit.hit.canteen_id
  );

  return (
    <article className='hit-item flex m-3 '>
      <img
        src={canteen?.imageUrl}
        alt={canteen?.name}
        width={70}
        className='hit-image rounded-md'
      />
      <div className='ml-2 col-span-5'>
        <p className='hit-canteen-name'>{canteen?.name}</p>
        <h1 className='hit-name'>{hit.hit.name}</h1>
        <p className='hit-price'>Rp{hit.hit.price}</p>
      </div>
    </article>
  );
};

export default SearchResult;
