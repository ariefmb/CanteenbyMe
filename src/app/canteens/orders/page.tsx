'use client';

import OrderContainer from '@/components/container/orders-container';
import OrderHeader from '@/components/orders/order-header';
import { useCartContext } from '@/context/cart.context';

// interface OrdersProps {
//   cart: {
//     id: string;
//     name: string;
//     price: number;
//     quantity?: number;
//   };
// }

export default function Orders() {
  // const { data: session } = useSession();
  // const userSession = session?.user;
  // const { cart, getTotalPrice } = useCartContext();
  const { getTotalPrice } = useCartContext();

  // const totalPesanan = new Intl.NumberFormat('id', {
  //   style: 'currency',
  //   currency: 'IDR',
  // }).format(getTotalPrice());

  // const fee = new Intl.NumberFormat('id', {
  //   style: 'currency',
  //   currency: 'IDR',
  // }).format(500);

  // const totalBayar = new Intl.NumberFormat('id', {
  //   style: 'currency',
  //   currency: 'IDR',
  // }).format(getTotalPrice() + 500);

  return (
    // <Flowbite theme={{ theme: customTheme }}>
    //   <div className='bg-background min-h-screen'>
    //     <div className='container mx-auto p-5 min-h-screen text-slate-800'>
    //       <div className='w-full flex items-center gap-5 font-bold text-base mb-5 text-slate-800 md:text-2xl'>
    //         <BackCTA />
    //         <div className=''>
    //           <h1 className='font-extrabold text-xl md:text-2xl'>
    //             Hi, {userSession?.name}
    //           </h1>
    //           <h3 className='text-lg md:text-xl'>
    //             Berikut rincian pesan anda.
    //           </h3>
    //         </div>
    //       </div>
    //       <hr className='w-full h-px bg-black my-3' />
    //       <div className='w-full p-3 flex flex-col gap-6'>
    //         {cart.map((cart) => (
    //           <div
    //             key={cart.id}
    //             className='flex items-center gap-3 md:m-3 text-slate-800 mb-5 sm:px-10 md:px-5'
    //           >
    //             <Image
    //               src={cart.imageUrl}
    //               alt='Menu Image'
    //               width={94}
    //               height={82}
    //               className='rounded-[10px] w-[94px] h-[82px] md:w-[101px] md:h-[89px]'
    //             />
    //             <div className='p-2'>
    //               <h1 className='font-bold text-lg text-left text-slate-800 md:text-2xl'>
    //                 {cart.name}
    //               </h1>
    //               <div className='flex items-center my-3 w-full gap-1 justify-items-start'>
    //                 <Button
    //                   color='primary'
    //                   size='sm'
    //                   // onClick={handleMinusQuantity}
    //                   pill
    //                 >
    //                   <HiMinus />
    //                 </Button>
    //                 <p className='w-8 text-center'>1</p>
    //                 <Button
    //                   color='primary'
    //                   size='sm'
    //                   // onClick={handlePlusQuantity}
    //                   pill
    //                 >
    //                   <HiPlus />
    //                 </Button>
    //               </div>
    //               <div className='w-full max-w-md'>
    //                 <TextInput
    //                   id='base'
    //                   placeholder='Tulis jika ada catatan...'
    //                   addon='Note'
    //                   sizing='sm'
    //                 />
    //               </div>
    //             </div>

    //             {/* <div className='w-[150px] h-[100px] rounded-lg overflow-hidden md:col-start-4 relative group hover:scale-90 transition-all duration-500'>
    //             <div
    //               className={`h-full w-full bg-[url('https://source.unsplash.com/150x100?food')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500`}
    //             ></div>
    //           </div>
    //           <div className='flex flex-col gap-2 items-center justify-center text-center'>
    //             <h1 className='font-bold text-xl text-left md:text-2xl'>
    //               Ayam geprek spesial
    //             </h1>
    //           </div>
    //         </div>
    //         <div className='flex gap-5 items-center justify-center'>
    //           <Image
    //         src={`https://source.unsplash.com/150x100?food`}
    //         alt='placeholder'
    //         width={150}
    //         height={100}
    //         className='rounded-xl overflow-hidden hover:scale-95 transition-all duration-500'
    //       /> */}
    //           </div>
    //         ))}
    //       </div>
    //       <div className='w-full mt-3 mb-6 flex items-center justify-center'>
    //         <Button color='buttonAdd' pill>
    //           <HiPlus />
    //           <h1 className='font-bold text-sm md:text-lg'>
    //             Tambah item lainnya
    //           </h1>
    //         </Button>
    //       </div>
    //       <div className='w-full flex flex-col rounded-xl border border-slate-800 p-3 my-3 gap-2'>
    //         <h2 className='font-bold text-sm md:text-xl'>Rincian Pesanan</h2>
    //         <div className='w-full flex items-center justify-between px-3 text-sm'>
    //           <div>
    //             <p>Total Pesanan:</p>
    //             <p>Fee:</p>
    //           </div>
    //           <div>
    //             <p>{totalPesanan}</p>
    //             <p>{fee}</p>
    //           </div>
    //         </div>
    //         <hr className='w-full h-px bg-black my-3' />
    //         <div className='w-full flex items-center justify-between px-3'>
    //           <p className='text-sm'>Total Bayar:</p>
    //           <p className='font-bold'>{totalBayar} </p>
    //         </div>
    //       </div>
    //       <h1 className='font-bold text-sm my-3 text-slate-800 w-full pl-5'>
    //         Metode Pembayaran
    //       </h1>
    //       <div className='flex flex-col gap-3'>
    //         <div className='w-full flex items-center justify-between rounded-xl border border-slate-800 py-3 px-10 gap-2'>
    //           <Label
    //             htmlFor='E-Wallet'
    //             className='font-bold text-sm md:text-xl'
    //           >
    //             E-Wallet
    //           </Label>
    //           <Radio
    //             id='E-Wallet'
    //             name='payment-method'
    //             value='E-Wallet'
    //             defaultChecked
    //           />
    //         </div>
    //         <div className='w-full flex items-center justify-between rounded-xl border border-slate-800 py-3 px-10 gap-2'>
    //           <Label htmlFor='Cash' className='font-bold text-sm md:text-xl'>
    //             Cash
    //           </Label>
    //           <Radio
    //             id='Cash'
    //             name='payment-method'
    //             value='Cash'
    //             defaultChecked
    //           />
    //         </div>
    //       </div>
    //       <div className='w-full my-3 py-3 flex items-center justify-center'>
    //         <Button color='buttonPrimary' className='hover:rounded-xl'>
    //           Buat Pesanan
    //           <HiShoppingCart size={25} />
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </Flowbite>
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
