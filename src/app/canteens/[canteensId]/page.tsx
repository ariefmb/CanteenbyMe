import { retrieveDetailCanteenWithId } from '@/libs/apis';
import { TMenus } from '@/libs/types';

type TResponse = {
  success: boolean;
  data: TMenus;
  message?: string;
};

interface CanteenProps {
  params: {
    canteensId: string;
  };
}

export default async function Canteen({ params }: CanteenProps) {
  
  const { canteensId } = params;
  console.log(`canteensId: ${canteensId}`);
  
  const response: TMenus = await retrieveDetailCanteenWithId(canteensId);
  console.log(`response: ${response}`);
  
  const menu = response as TMenus;
  console.log(`menu ${menu}`);
  
  return <div className='text-black'>{menu.name}</div>;
}
