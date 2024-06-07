import React from 'react';
import BackCTA from '@/components/UI/back-cta';
import { useSession } from 'next-auth/react';

export default function OrderHeader() {
  const { data: session } = useSession();
  const userSession = session?.user;

  return (
    <div className='w-full flex items-center gap-5 font-bold text-base mb-5 text-slate-800 md:text-2xl'>
      <BackCTA />
      <div className='md:ml-5'>
        <h1 className='font-extrabold text-xl md:text-2xl'>
          Hi, {userSession?.name}
        </h1>
        <h3 className='text-lg md:text-xl'>Berikut rincian pesan anda.</h3>
      </div>
    </div>
  );
}
