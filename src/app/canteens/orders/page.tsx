'use client';

import OrderContainer from '@/components/orders/orders-container';
import OrderHeader from '@/components/orders/order-header';

export default function Orders() {
  return (
    <section className='w-full min-h-screen bg-background p-10'>
      <section>
        <OrderHeader />
      </section>
      <hr className='w-full h-1 bg-slate-300 rounded-xl my-3' />
      <section>
        <OrderContainer />
      </section>
    </section>
  );
}
