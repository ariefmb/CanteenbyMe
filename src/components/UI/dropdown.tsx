'use client';

import { useCategoryContext } from '@/context/category-filter.context';
import { CustomFlowbiteTheme, Dropdown } from 'flowbite-react';

const customDropdownTheme: CustomFlowbiteTheme['dropdown'] = {
  arrowIcon: 'ml-2 h-6 w-6 absolute left-2 text-gray-700 hover:bg-white',
  content: 'focus:outline-none hover:bg-white',
  floating: {
    animation: 'transition-opacity w-[80%] shadow-lg hover:bg-white',
    base: 'z-10 divide-y divide-gray-100 focus:outline-none hover:bg-white',
    content:
      'text-sm text-red-700 flex justify-center w-full items-center hover:bg-white',
    divider: 'h-0 hover:bg-white',
    header:
      'block px-4 py-2 bg-[#B5BEE3] text-sm text-gray-700 font-bold hover:bg-[#A2AACB] transition-all duration-300',
    item: {
      container: ' hover:bg-white',
      base: 'flex w-full border-t-2 border-primary cursor-pointer items-center justify-start px-4 py-2 text-sm font-bold text-gray-700 bg-white focus:outline-none hover:bg-gray-200 transition-all duration-300',
    },
    target:
      'w-[90%] flex items-center justify-start h-10 bg-white text-slate-800 font-bold rounded-[10px] pl-10 relative hover:bg-[#f1f1f1] border border-slate-400 transition-all duration-300',
  },
  inlineWrapper: 'flex items-center justify-center hover:bg-white',
};

export default function DropdownComponent() {
  const { categoryFilter, setCategoryFilter } = useCategoryContext();

  return (
    <Dropdown
      theme={customDropdownTheme}
      label={categoryFilter}
      className='rounded-[10px] overflow-hidden border-2 border-primary'
    >
      <Dropdown.Header onClick={() => setCategoryFilter('Pilih Kategori Menu')}>
        Semua Kategori
      </Dropdown.Header>
      <Dropdown.Item onClick={() => setCategoryFilter('Makanan Berat')}>
        Makanan Berat
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setCategoryFilter('Snack')}>
        Snack
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setCategoryFilter('Dessert')}>
        Dessert
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={() => setCategoryFilter('Minuman')}>
        Minuman
      </Dropdown.Item>
    </Dropdown>
  );
}
