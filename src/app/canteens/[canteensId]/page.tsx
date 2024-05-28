import MenusCanteenContainer from '@/components/container/menus-canteen-container';
import { retrieveDetailCanteenWithId } from '@/libs/apis';
import { TMenus } from '@/libs/types';

type TResponse = {
  success: boolean;
  data: TMenus[];
  message?: string;
};

interface CanteenProps {
  params: {
    canteensId: string;
  };
}

export default async function Canteen({ params }: CanteenProps) {
  const { canteensId } = params;
  const response: TResponse = await retrieveDetailCanteenWithId(canteensId);
  const menus = response.data as TMenus[];
  console.log(`menus: ${menus}`);

  return (
    <section className='mx-auto min-h-screen py-5 px-10 bg-background'>
      <section className='dropdown'></section>
      <section>
        <MenusCanteenContainer menus={menus} />
      </section>
    </section>
  );
}
