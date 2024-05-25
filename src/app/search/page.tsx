'use client';

import { useSearchParams } from 'next/navigation';

const SearchPage = () => {
  const search = useSearchParams();
  const params = search ? search.get('q') : null;

  console.log('SEARCH PARAMS', params);

  return <div>{params}</div>;
};

export default SearchPage;
