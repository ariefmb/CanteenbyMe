import CanteensContainer from '@/components/container/canteens-container';
import { retrieveAllCanteens } from '@/libs/apis';
import { TCanteens } from '@/libs/types';

export default async function Canteens() {
  const canteens: TCanteens[] = await retrieveAllCanteens();
  return (
    <section className='mx-auto py-5 px-10 bg-background'>
      <section className='searchBar'></section>
      <section className='CanteensContainer'>
        <CanteensContainer canteens={canteens} />
      </section>
    </section>
  );
}
