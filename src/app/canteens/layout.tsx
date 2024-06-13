import Header from '@/components/header/header';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-dvh bg-background'>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}
