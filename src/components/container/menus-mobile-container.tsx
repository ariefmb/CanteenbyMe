import { TMenus } from '@/libs/types';
import CartSection from '../UI/cart-section';
import MenusCanteenContainer from './menus-canteen-container';

interface MenusContainerProps {
  menus: TMenus[];
  isLoading: boolean;
}

export default function MenusMobileContainer({
  menus,
  isLoading,
}: MenusContainerProps) {
  return (
    <>
      {/* <section className='dropdown w-full h-20 bg-slate-400 rounded-xl'></section> */}
      <section>
        <MenusCanteenContainer menus={menus} isLoading={isLoading} />
      </section>
      <section className='w-full flex justify-center'>
        <CartSection isLoading={isLoading} />
      </section>
    </>
  );
}
