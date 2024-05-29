'use client';
import { modalTheme } from '@/components/themes/modal-theme';
import { useSearchContext } from '@/context/search.context';
import { TCanteens } from '@/libs/types';
import {
  Badge,
  Button,
  Card,
  CustomFlowbiteTheme,
  Dropdown,
  Modal,
} from 'flowbite-react';
import { Hit as AlgoliaHit } from 'instantsearch.js';
import { Hits, SearchBoxProps, useInstantSearch } from 'react-instantsearch';
import SearchInput from './search-input';
import { CanteenProvider } from '@/context/data.context';
import { useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi2';

const badgeTheme: CustomFlowbiteTheme['badge'] = {
  root: {
    color: {
      purple: 'bg-[#A8B2DE]/50 hover:bg-purple-500 ',
    },
  },
};

const cardTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'flex rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
    children: 'flex h-full flex-col justify-center p-5',
    horizontal: {
      off: 'flex-col',
      on: 'flex-col md:max-w-xl md:flex-row',
    },
    href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
  },
};

const SearchModal = ({ canteens }: { canteens?: TCanteens[] }) => {
  const queryHook: SearchBoxProps['queryHook'] = (query, search) => {
    search(query);
  };

  type HitProps = {
    hit: AlgoliaHit<{
      id?: string;
      canteen_id?: string;
      name?: string;
      image_url?: string;
      type?: string;
      price?: number;
    }>;
  };

  type ChartProps = {
    id?: string;
    canteen_id?: string;
    name?: string;
    image_url?: string;
    type?: string;
    price?: number;
  };

  const { onShow, setOnShow } = useSearchContext();
  const [chart, setChart] = useState<ChartProps[]>([]);
  const totalHarga = chart.reduce((acc, item) => acc + item.price!!, 0);
  const SearchResult = ({ hit }: HitProps) => {
    // if (status === 'idle') {
    //   return <p>Loading search results</p>;
    // }
    const canteen = canteens?.find((canteen) => canteen.id === hit?.canteen_id);
    const { status, results, renderState } = useInstantSearch();

    console.log('search status : ', renderState);

    const handleAddToChart = (menu: ChartProps) => {
      setChart((prevChart) => [...prevChart, menu]);
    };

    useEffect(() => {
      console.log('chart : ', chart);
    }, [chart]);

    return (
      <article className='hit-item flex m-3 text-slate-800' key={hit.id}>
        {hit.image_url ? (
          <img
            src={hit.image_url}
            width={70}
            className='hit-image rounded-md '
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
        <div className='ml-2 col-span-5 w-full'>
          <h1 className='menu-name w-fit h-fit text-[16px] font-bold md:text-[16px] text-slate-700 text-overflow-ellipsis '>
            {hit?.name || 'No Name'}
          </h1>
          <p className='canteen-name w-fit h-fit text-[15px] md:text-[16px] text-slate-700 text-overflow-ellipsis'>
            {canteen?.name}
          </p>
          <p className='menu-price w-fit h-fit text-[15px] md:text-[16px] text-slate-700 text-overflow-ellipsis text-overflow-ellipsis'>
            Rp {hit?.price !== undefined ? hit?.price : 'N/A'}
          </p>
        </div>
        <div className='max-w-xs h-full grid justify-items-end items-center'>
          <Badge
            theme={badgeTheme}
            size='sm'
            onClick={() => handleAddToChart(hit!!)}
            className=' bg-[#A8B2DE]/50 mr-4 text-slate-700 hover:none my-5 mx-2 cursor-pointer'
          >
            Tambah
          </Badge>
        </div>
      </article>
    );
  };

  return (
    <>
      <Modal
        theme={modalTheme}
        show={onShow}
        size='2xl'
        position='top-center'
        onClose={() => {
          setChart([]);
          setOnShow(false);
        }}
      >
        <Modal.Header className='w-full' prefix='text-sm'>
          <SearchInput props={{ queryHook: queryHook }} />
        </Modal.Header>
        <Modal.Body>
          <CanteenProvider>
            <div className='space-y-6'>
              <Hits hitComponent={SearchResult} />
            </div>
          </CanteenProvider>
        </Modal.Body>
        {chart.length > 0 && (
          <Modal.Footer className='bg-[#6B76AD] rounded-lg'>
            <div className='w-full h-10 flex text-slate-700'>
              <Card theme={cardTheme} className='w-full '>
                <div className='flex '>
                  <p className='flex-1'>{chart.length} item</p>
                  <p className='flex-2'>Rp{totalHarga}</p>
                </div>
              </Card>
              <Button className='bg-[#A8B2DE]/50 w-[120px] ml-4 border-none shadow-md hover:shadow-none p-2'>
                <HiShoppingCart className='mr-2 h-5 w-5' />
                Pesan
              </Button>
            </div>
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
        )}
      </Modal>
    </>
  );
};

export default SearchModal;
