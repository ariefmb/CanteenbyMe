// import { useSession } from 'next-auth/react';
import {
  Button,
  CustomFlowbiteTheme,
  Flowbite,
  Label,
  Radio,
  TextInput,
} from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { HiMinus, HiPlus, HiShoppingCart } from 'react-icons/hi';

const customTheme: CustomFlowbiteTheme = {
  button: {
    base: 'border-none',
    color: {
      primary: 'bg-[#A8B2DE]',
      buttonAdd:
        'bg-[#B5BEE3] transition-all duration-200 hover:bg-[#A2AACB]  active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
      buttonPrimary:
        'w-2/3 bg-[#B5BEE3] transition-all duration-200 hover:rounded-xl hover:bg-[#A2AACB] active:bg-[#868EAF] active:ring-2 active:ring-[#6878BA]',
    },
    isProcessing: 'cursor-drop',
    spinnerSlot: 'h-full flex items-center animate-fade-in',
    inner: {
      base: 'w-full font-bold text-slate-800 flex justify-center gap-2 items-center transition-all duration-200 hover:bg-primary',
      isProcessingPadding: {
        xs: 'px-4',
        sm: 'px-4',
        md: 'px-4',
        lg: 'px-4',
        xl: 'px-4',
      },
    },
    pill: {
      off: 'rounded-xl',
      on: 'rounded-full',
    },
    size: {
      xs: 'p-1 text-xs',
      sm: 'p-2 text-xs',
      md: 'px-4 py-2 text-lg',
    },
  },
  textInput: {
    base: 'flex',
    addon:
      'inline-flex items-center border-2 border-slate-300 rounded-l-md bg-gray-100 px-3 text-sm text-gray-800',
    field: {
      base: 'relative w-full',
      input: {
        base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
        sizes: {
          sm: 'py-1 px-2 text-xs',
          md: 'p-2.5 text-sm',
          lg: 'p-4 sm:text-base',
        },
      },
    },
  },
  radio: {
    root: {
      base: 'h-4 w-4 border border-gray-500 text-cyan-600 focus:ring-2 focus:ring-cyan-500',
    },
  },
};

export default function Orders() {
  // const { data: session } = useSession();
  // const userSession = session?.user;

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className='bg-background min-h-screen'>
        <div className='container mx-auto p-5 min-h-screen text-slate-800'>
          {/* {userSession && <h1>Hi, {userSession.name}</h1>} */}
          <h1 className='font-extrabold text-xl md:text-2xl'>Hi, Arief</h1>
          <h3 className='text-lg md:text-xl'>Berikut rincian pesan anda.</h3>
          <hr className='w-full h-px bg-black my-3' />
          <div className='w-full p-3 flex flex-col gap-6'>
            <div className='flex gap-5 items-center justify-center'>
              {/* <Image
            src={`https://source.unsplash.com/150x100?food`}
            alt='placeholder'
            width={150}
            height={100}
            className='rounded-xl overflow-hidden hover:scale-95 transition-all duration-500'
          /> */}
              <div className='w-[150px] h-[100px] rounded-lg overflow-hidden md:col-start-4 relative group hover:scale-90 transition-all duration-500'>
                <div
                  className={`h-full w-full bg-[url('https://source.unsplash.com/150x100?food')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500`}
                ></div>
              </div>
              <div className='flex flex-col gap-2 items-center justify-center text-center'>
                <h1 className='font-bold text-xl text-left md:text-2xl'>
                  Ayam geprek spesial
                </h1>
                <div className='flex items-center w-full gap-1'>
                  <Button
                    color='primary'
                    size='sm'
                    // onClick={handleMinusQuantity}
                    pill
                  >
                    <HiMinus />
                  </Button>
                  {/* <p className='w-8 text-center'>{quantity}</p> */}
                  <p className='w-8 text-center'>1</p>
                  <Button
                    color='primary'
                    size='sm'
                    // onClick={handlePlusQuantity}
                    pill
                  >
                    <HiPlus />
                  </Button>
                </div>
                <div className='max-w-md'>
                  <TextInput
                    id='base'
                    placeholder='Tulis jika ada catatan...'
                    addon='Note'
                    sizing='sm'
                  />
                </div>
              </div>
            </div>
            <div className='flex gap-5 items-center justify-center'>
              {/* <Image
            src={`https://source.unsplash.com/150x100?food`}
            alt='placeholder'
            width={150}
            height={100}
            className='rounded-xl overflow-hidden hover:scale-95 transition-all duration-500'
          /> */}
              <div className='w-[150px] h-[100px] rounded-lg overflow-hidden md:col-start-4 relative group hover:scale-90 transition-all duration-500'>
                <div
                  className={`h-full w-full bg-[url('https://source.unsplash.com/150x100?food')] bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500`}
                ></div>
              </div>
              <div className='flex flex-col gap-2 items-center justify-center text-center'>
                <h1 className='font-bold text-xl text-left md:text-2xl'>
                  Ayam geprek spesial
                </h1>
                <div className='flex items-center w-full gap-1'>
                  <Button
                    color='primary'
                    size='sm'
                    // onClick={handleMinusQuantity}
                    pill
                  >
                    <HiMinus />
                  </Button>
                  {/* <p className='w-8 text-center'>{quantity}</p> */}
                  <p className='w-8 text-center'>1</p>
                  <Button
                    color='primary'
                    size='sm'
                    // onClick={handlePlusQuantity}
                    pill
                  >
                    <HiPlus />
                  </Button>
                </div>
                <div className='max-w-md'>
                  <TextInput
                    id='base'
                    placeholder='Tulis jika ada catatan...'
                    addon='Note'
                    sizing='sm'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full mt-3 mb-6 flex items-center justify-center'>
            <Button color='buttonAdd' pill>
              <HiPlus />
              <h1 className='font-bold text-sm md:text-lg'>
                Tambah item lainnya
              </h1>
            </Button>
          </div>
          <div className='w-full flex flex-col rounded-xl border border-slate-800 p-3 my-3 gap-2'>
            <h2 className='font-bold text-sm md:text-xl'>Rincian Pesanan</h2>
            <div className='w-full flex items-center justify-between px-3 text-sm'>
              <div>
                <p>Total Pesanan:</p>
                <p>Fee:</p>
              </div>
              <div>
                <p>Rp 000 ,-</p>
                <p>Rp 000 ,-</p>
              </div>
            </div>
            <hr className='w-full h-px bg-black my-3' />
            <div className='w-full flex items-center justify-between px-3'>
              <p className='text-sm'>Total Bayar:</p>
              <p className='font-bold'>Rp 000 ,-</p>
            </div>
          </div>
          <h1 className='font-bold text-sm my-3 text-slate-800 w-full pl-5'>
            Metode Pembayaran
          </h1>
          <div className='flex flex-col gap-3'>
            <div className='w-full flex items-center justify-between rounded-xl border border-slate-800 py-3 px-10 gap-2'>
              <Label
                htmlFor='E-Wallet'
                className='font-bold text-sm md:text-xl'
              >
                E-Wallet
              </Label>
              <Radio
                id='E-Wallet'
                name='payment-method'
                value='E-Wallet'
                defaultChecked
              />
            </div>
            <div className='w-full flex items-center justify-between rounded-xl border border-slate-800 py-3 px-10 gap-2'>
              <Label
                htmlFor='Cash'
                className='font-bold text-sm md:text-xl'
              >
                Cash
              </Label>
              <Radio
                id='Cash'
                name='payment-method'
                value='Cash'
                defaultChecked
              />
            </div>
          </div>
          <div className='w-full my-3 py-3 flex items-center justify-center'>
            <Button color='buttonPrimary' className='hover:rounded-xl'>
              Buat Pesanan
              <HiShoppingCart size={25} />
            </Button>
          </div>
        </div>
      </div>
    </Flowbite>
  );
}
