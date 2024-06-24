'use client';

import BackCTA from '@/components/UI/back-cta';
import MenusDesktopContainer from '@/components/menus/menus-desktop-container';
import MenusMobileContainer from '@/components/menus/menus-mobile-container';
import { useCanteenContext } from '@/context/canteens.context';
import { useFetchMenus } from '@/hook/useFetchMenus';
import { TCanteens, TMenus } from '@/libs/types';
import { useEffect, useState } from 'react';

interface CanteenProps {
  params: {
    canteensId: string;
  };
}

const getCanteenNameById = (
  canteens: TCanteens[],
  canteenId: string
): string | undefined => {
  const canteen = canteens.find((c) => c.id === canteenId);
  return canteen ? canteen.name : 'Kantin';
};

export default function Canteen({ params }: CanteenProps) {
  const { canteensId } = params;
  const [menus, setMenus] = useState<TMenus[]>([]);
  const [canteens, setCanteens] = useState<TCanteens[]>([]);
  const { canteens: canteensContext } = useCanteenContext();
  const {
    data: fetchMenus,
    isLoading: fetchMenusIsLoading,
    error: fetchMenusError,
  } = useFetchMenus({ canteensId });

  useEffect(() => {
    if (fetchMenus && canteensContext) {
      setMenus(fetchMenus);
      setCanteens(canteensContext);
    }
  }, [fetchMenus]);

  const canteenName =
    menus.length > 0
      ? getCanteenNameById(canteens, menus[0].canteenId)
      : 'Kantin';

  return (
    <section className='mx-auto min-h-screen py-5 px-5 md:px-10 bg-background'>
      <div className='w-full flex items-center gap-5 font-bold text-base mb-5 text-slate-800 md:text-2xl'>
        <BackCTA />
        {canteenName}
      </div>
      <div className='w-full flex flex-col gap-2 py-2 mb-5 md:hidden'>
        <MenusMobileContainer
          menus={menus}
          isLoading={fetchMenusIsLoading}
          error={fetchMenusError?.message}
        />
      </div>
      <div className='hidden md:flex justify-center w-full py-2 mb-5'>
        <MenusDesktopContainer
          menus={menus}
          isLoading={fetchMenusIsLoading}
          error={fetchMenusError?.message}
        />
      </div>
    </section>
  );
}
