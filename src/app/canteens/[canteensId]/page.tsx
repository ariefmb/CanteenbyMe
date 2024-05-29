import MenusCanteenContainer from '@/components/container/menus-canteen-container';
import { retrieveAllCanteens, retrieveDetailCanteenWithId } from '@/libs/apis';
import { TCanteens, TMenus } from '@/libs/types';

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

export default async function Canteen({ params }: CanteenProps) {
  const { canteensId } = params;
  const menus: TMenus[] = await retrieveDetailCanteenWithId(canteensId);
  const canteens: TCanteens[] = await retrieveAllCanteens();
  const canteenName =
    menus.length > 0
      ? getCanteenNameById(canteens, menus[0].canteenId)
      : 'Kantin';

  return (
    <section className='mx-auto min-h-screen py-5 px-10 bg-background'>
      <h1 className='font-bold text-base mb-5 text-slate-800 md:text-2xl'>
        {canteenName}
      </h1>
      <section className='dropdown'></section>
      <section>
        <MenusCanteenContainer menus={menus} />
      </section>
    </section>
  );
}
