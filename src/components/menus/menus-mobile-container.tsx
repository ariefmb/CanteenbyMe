import { TMenus } from '@/libs/types';
import CartSection from '../UI/cart-section';
import MenusCanteenContainer from './menus-canteen-container';
import DropdownComponent from '../UI/dropdown';

interface MenusContainerProps {
  menus: TMenus[];
  isLoading: boolean;
  error?: string;
}

export default function MenusMobileContainer({
  menus,
  isLoading,
  error,
}: MenusContainerProps) {
  return (
    <>
      <section className='flex items-center justify-center w-full mb-3'>
        <DropdownComponent />
      </section>
      <section>
        <MenusCanteenContainer
          menus={menus}
          isLoading={isLoading}
          error={error}
        />
      </section>
      <section className='w-full flex justify-center'>
        <CartSection isLoading={isLoading} />
      </section>
    </>
  );
}
