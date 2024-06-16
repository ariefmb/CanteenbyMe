'use client';

import { useCategoryContext } from '@/context/category-filter.context';
import { CustomFlowbiteTheme, Dropdown } from 'flowbite-react';

const customDropdownTheme: CustomFlowbiteTheme['dropdown'] = {
  arrowIcon: 'ml-2 h-6 w-6 absolute left-2 text-gray-700',
  content: 'focus:outline-none',
  floating: {
    animation: 'transition-opacity w-[80%] shadow-lg',
    base: 'z-10 divide-y divide-gray-100 focus:outline-none',
    content: 'text-sm text-red-700 flex justify-center w-full items-center',
    divider: 'h-0',
    item: {
      container: '',
      base: 'flex w-full border-t-2 border-primary cursor-pointer items-center justify-start px-4 py-2 text-sm font-bold text-gray-700 bg-white hover:bg-gray-200 focus:outline-none',
    },
    style: {
      auto: 'bg-white text-gray-900',
    },
    target: 'w-[90%] h-10 bg-white rounded-[10px] pl-10 relative',
  },
  inlineWrapper: 'flex items-center justify-center',
};

export default function DropdownComponent() {
  const { categoryFilter, setCategoryFilter } = useCategoryContext();

  return (
    <Dropdown
      theme={customDropdownTheme}
      label={categoryFilter}
      className='rounded-[10px] overflow-hidden border-2 border-primary'
    >
      <Dropdown.Item
        onClick={() => setCategoryFilter('Pilih Kategori Menu')}
        value='Pilih Kategori Menu'
        className='bg-[#B5BEE3] border-t-0 hover:bg-[#9CA4C5]'
      >
        Semua Kategori
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => setCategoryFilter('Makanan Berat')}
        value='Makanan Berat'
      >
        Makanan Berat
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setCategoryFilter('Snack')} value='Snack'>
        Snack
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        onClick={() => setCategoryFilter('Dessert')}
        value='Dessert'
      >
        Dessert
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        onClick={() => setCategoryFilter('Minuman')}
        value='Minuman'
      >
        Minuman
      </Dropdown.Item>
    </Dropdown>
  );
}
