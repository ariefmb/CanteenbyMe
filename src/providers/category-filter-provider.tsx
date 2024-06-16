'use client';

import { CategoryContext } from '@/context/category-filter.context';
import React, { useState } from 'react';

export default function CategoryFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categoryFilter, setCategoryFilter] = useState<string>(
    'Pilih Kategori Menu'
  );

  return (
    <CategoryContext.Provider value={{ categoryFilter, setCategoryFilter }}>
      {children}
    </CategoryContext.Provider>
  );
}
