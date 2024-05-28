'use client';
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
  const response: TMenus[] = await retrieveDetailCanteenWithId(canteensId);
  const menus = response as TMenus[];
  return (
    <div>
      {menus.map((menu) => (
        <div key={menu.id} className='min-h-screen bg-background text-black'>
          {menu.name}
        </div>
      ))}
    </div>
  );
}
