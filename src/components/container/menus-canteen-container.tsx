import { TMenus } from '@/libs/types';
import { Alert, CustomFlowbiteTheme } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import { ToastContainer } from 'react-toastify';
import MenusCard from '../UI/menus-card';
import MenusCardSkeleton from '../skeletons/menus-card-skeleton';
import { useCategoryContext } from '@/context/category-filter.context';
import { useEffect, useState } from 'react';

interface MenusCanteenContainerProps {
  menus: TMenus[];
  isLoading: boolean;
}

const customTheme: CustomFlowbiteTheme['alert'] = {
  base: 'flex flex-col p-4 text-sm mx-auto md:w-fit',
  color: {
    failure:
      'bg-red-200 text-red-700 transition-all duration-300 hover:bg-red-300',
    info: 'bg-primary text-white transition-all duration-300 hover:bg-[#58628E]',
  },
};

const sortMenus = (menus: TMenus[]): Record<string, TMenus[]> => {
  const sorted = menus.reduce((groups, menu) => {
    if (!groups[menu.type]) {
      groups[menu.type] = [];
    }
    groups[menu.type].push(menu);
    return groups;
  }, {} as Record<string, TMenus[]>);

  Object.keys(sorted).forEach((type) => {
    sorted[type].sort((a, b) =>
      a.signature === b.signature ? 0 : a.signature ? -1 : 1
    );
  });

  return sorted;
};

export default function MenusCanteenContainer({
  menus,
  isLoading,
}: MenusCanteenContainerProps) {
  const { categoryFilter } = useCategoryContext();
  const [loading, setLoading] = useState(isLoading);
  const [filteredMenus, setFilteredMenus] = useState<TMenus[]>([]);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      if (categoryFilter === 'Pilih Kategori Menu') {
        setFilteredMenus(menus);
      } else {
        const filtered = menus.filter((menu) => menu.type === categoryFilter);
        setFilteredMenus(filtered);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [categoryFilter, menus]);

  const sortedMenus = sortMenus(filteredMenus);

  return (
    <div className='text-slate-800'>
      {loading ? (
        <MenusCardSkeleton cards={5} />
      ) : !menus?.length ? (
        <Alert theme={customTheme} color='failure' icon={HiInformationCircle}>
          <p className='px-3'>All Menus will be displayed here.</p>
        </Alert>
      ) : !filteredMenus.length ? (
        <Alert theme={customTheme} color='info' icon={HiInformationCircle}>
          <p className='px-3'>
            Tidak ada kategori {categoryFilter}.
          </p>
        </Alert>
      ) : (
        <div className='flex flex-col items-center gap-5 mx-auto'>
          {Object.keys(sortedMenus).map((type) => (
            <div
              key={type}
              className='w-full flex flex-col items-center gap-5 md:items-start md:px-5'
            >
              <h1 className='w-full font-bold text-base text-left md:text-xl'>
                {type}
              </h1>
              {sortedMenus[type].map((menu) => (
                <MenusCard key={menu.id} menu={menu} />
              ))}
            </div>
          ))}
          <ToastContainer />
        </div>
      )}
    </div>
  );
}
