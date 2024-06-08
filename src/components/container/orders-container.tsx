import SearchProvider from '@/providers/search-provider';
import OrderCard from '../orders/order-card';
import OrderCreate from '../orders/order-create';
import OrderDetail from '../orders/order-detail';
import AlgoliaProvider from '../search/algolia-search';

export default function OrderContainer() {
  return (
    <section className='flex flex-col md:flex-row gap-5 md:gap-20'>
      <div className='md:w-1/2'>
        <section>
          <AlgoliaProvider>
            <SearchProvider>
              <OrderCard />
            </SearchProvider>
          </AlgoliaProvider>
        </section>
      </div>
      <div className='md:w-1/2'>
        <section>
          <OrderDetail />
        </section>
        <section>
          <OrderCreate />
        </section>
      </div>
    </section>
  );
}
