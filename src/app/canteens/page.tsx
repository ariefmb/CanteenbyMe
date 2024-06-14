'use client';

import HistoryOrderDesktopCTA from '@/components/UI/history-order-desktop-cta';
import HistoryOrderMobileCta from '@/components/UI/history-order-mobile-cta';
import { AuthToast } from '@/components/UI/toast/auth-toast';
import CanteensContainer from '@/components/container/canteens-container';
import SearchBarContainer from '@/components/container/search-bar-container';
import { useCanteenContext } from '@/context/canteens.context';
import { useSession } from 'next-auth/react';

export default function Canteens() {
  const { canteens, loading } = useCanteenContext();
  const { data: session } = useSession();
  const userSession = session?.user;

  return (
    <section className='mx-auto py-5 px-10 bg-background'>
      <section className='hidden bg-primary rounded-full w-[75px] h-[75px] shadow-[0_0_5px_#000] hover:scale-105 transition-all duration-500 md:block absolute right-10'>
        <HistoryOrderDesktopCTA />
      </section>
      <section>
        <SearchBarContainer canteens={canteens} loading={loading} />
      </section>
      <section className='auth toast'>{userSession && <AuthToast />}</section>
      <section className='CanteensContainer'>
        <CanteensContainer loading={loading} canteens={canteens} />
      </section>
      <section className='flex items-center justify-center md:hidden'>
        <HistoryOrderMobileCta />
      </section>
    </section>
  );
}
