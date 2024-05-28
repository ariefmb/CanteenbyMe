import { TMenus } from '@/libs/types';
import React from 'react';

interface MenuCardProps {
  menu: TMenus;
}
export default function MenusCard({ menu }: MenuCardProps) {
  console.log(`menu: ${menu}`);

  return <div>menu.name</div>;
}
