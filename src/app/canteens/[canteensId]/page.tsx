import MenusCanteenContainer from '@/components/container/menus-canteen-container';
import { retrieveDetailCanteenWithId } from '@/libs/apis';
import { TMenus } from '@/libs/types';

interface CanteenProps {
  params: {
    canteensId: string;
  };
}

export default async function Canteen({ params }: CanteenProps) {
  const { canteensId } = params;
  const menus: TMenus[] = await retrieveDetailCanteenWithId(canteensId);

  return (
    <section className='mx-auto min-h-screen py-5 px-10 bg-background'>
      <section className='dropdown'></section>
      <section>
        <MenusCanteenContainer menus={menus} />
      </section>
    </section>
  );
}
