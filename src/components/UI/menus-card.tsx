import { TMenus } from '@/libs/types';
import React from 'react';

interface MenuCardProps {
  menu: TMenus;
}
export default function MenusCard({ menu }: MenuCardProps) {
  return (
    <section>
      <div className="">{menu.name}</div>
    </section>
  );
}
