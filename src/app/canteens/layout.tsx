import Header from '@/components/header/header';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className='bg-red-500'>{children}</main>
    </>
  );
}
