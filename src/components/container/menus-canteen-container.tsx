import { TCanteens, TMenus } from '@/libs/types';
import { Alert, CustomFlowbiteTheme } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import MenusCard from '../UI/menus-card';
import { ToastContainer } from 'react-toastify';
import MenusCardSkeleton from '../skeletons/menus-card-skeleton';
import Skeleton from 'react-loading-skeleton';

interface MenusCanteenContainerProps {
  menus: TMenus[];
  isLoading: boolean;
}

const customTheme: CustomFlowbiteTheme['alert'] = {
  base: 'flex flex-col p-4 text-sm mx-auto md:w-1/2',
  color: {
    failure:
      'bg-red-200 text-red-700 transition-all duration-300 hover:bg-red-300',
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
  const sortedMenus = sortMenus(menus);

  return (
    <div className='text-slate-800'>
      {isLoading ? (
        <MenusCardSkeleton cards={5} />
      ) : !menus?.length ? (
        <Alert theme={customTheme} color='failure' icon={HiInformationCircle}>
          <p className='px-3'>All Menus will be displayed here.</p>
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
