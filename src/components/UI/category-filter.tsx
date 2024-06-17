'use client';

import { useCategoryContext } from '@/context/category-filter.context';
import React from 'react';

export default function CategoryFilter() {
  const { setCategoryFilter } = useCategoryContext();
  return (
    <>
      <div
        className='border border-slate-400 rounded-[10px] bg-[#B5BEE3] w-full text-center py-2 cursor-pointer transition-all duration-300 hover:bg-[#A2AACB]'
        onClick={() => setCategoryFilter('Pilih Kategori Menu')}
      >
        Semua Kategori
      </div>
      <div
        className='border border-slate-400 rounded-[10px] bg-white w-full text-center py-2 cursor-pointer transition-all duration-300 hover:bg-gray-200'
        onClick={() => setCategoryFilter('Makanan Berat')}
      >
        Makanan Berat
      </div>
      <div
        className='border border-slate-400 rounded-[10px] bg-white w-full text-center py-2 cursor-pointer transition-all duration-300 hover:bg-gray-200'
        onClick={() => setCategoryFilter('Snack')}
      >
        Snack
      </div>
      <div
        className='border border-slate-400 rounded-[10px] bg-white w-full text-center py-2 cursor-pointer transition-all duration-300 hover:bg-gray-200'
        onClick={() => setCategoryFilter('Dessert')}
      >
        Dessert
      </div>
      <div
        className='border border-slate-400 rounded-[10px] bg-white w-full text-center py-2 cursor-pointer transition-all duration-300 hover:bg-gray-200'
        onClick={() => setCategoryFilter('Minuman')}
      >
        Minuman
      </div>
    </>
  );
}
