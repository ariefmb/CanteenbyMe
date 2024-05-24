import CBMHeader from '@/images/logo/cbm-upnvj-header.png';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='bg-background h-24'>
      <div className='w-full bg-[#E0E4F9] h-full rounded-b-[50px] flex items-center justify-center pl-10 md:justify-start'>
        <Image src={CBMHeader} alt='CanteenbyMe Header Logo' width={350} priority/>
      </div>
    </div>
  );
}
