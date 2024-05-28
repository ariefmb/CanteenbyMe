'use client';
import { modalTheme } from '@/components/themes/modal-theme';
import { useSearchContext } from '@/context/search.context';
import { TCanteens } from '@/libs/types';
import { Modal } from 'flowbite-react';
import { Hit as AlgoliaHit } from 'instantsearch.js';
import { Hits, SearchBoxProps, useInstantSearch } from 'react-instantsearch';
import SearchInput from './search-input';

const SearchModal = ({ canteens }: { canteens: TCanteens[] }) => {
  const queryHook: SearchBoxProps['queryHook'] = (query, search) => {
    search(query);
  };
  const { onClick, setOnClick } = useSearchContext();

  type HitProps = {
    hit: AlgoliaHit<{
      canteen_id?: string;
      name?: string;
      image_url?: string;
      type?: string;
      price?: number;
    }>;
  };

  const SearchResult = ({ hit }: HitProps) => {
    const { status } = useInstantSearch();
    // if (status === 'idle') {
    //   return <p>Loading search results</p>;
    // }
    const canteen = canteens?.find((canteen) => canteen.id === hit?.canteen_id);

    return (
      <article className='hit-item flex m-3 text-slate-800'>
        {hit.image_url ? (
          <img
            src={canteen?.imageUrl}
            width={70}
            height={70}
            className='hit-image rounded-md'
            alt={canteen?.name || 'Image'}
          />
        ) : (
          <div
            className='placeholder-image w-[70] round-md'
            style={{
              width: 70,
              height: 70,
              backgroundColor: '#ccc',
            }}
          />
        )}
        <div className='ml-2 col-span-5'>
          <h1 className='hit-name'>{hit?.name || 'No Name'}</h1>
          <p className='hit-canteen-name'>{canteen?.name}</p>
          <p className='hit-price'>
            Rp{hit?.price !== undefined ? hit?.price : 'N/A'}
          </p>
        </div>
      </article>
    );
  };

  return (
    <>
      <Modal
        theme={modalTheme}
        show={onClick}
        size='2xl'
        position='top-center'
        onClose={() => setOnClick(false)}
      >
        <Modal.Header className='w-full'>
          <SearchInput props={{ queryHook: queryHook }} />
        </Modal.Header>
        <Modal.Body>
          <div className='space-y-6'>
            <Hits hitComponent={SearchResult} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button
            color='white'
            onClick={() => setOnClick(false)}
            className='bg-zinc-500 '
          >
            PESAN
          </Button>
          <Button
            color='white'
            onClick={() => setOnClick(false)}
            className='bg-zinc-500'
          >
            KEMBALI
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SearchModal;
