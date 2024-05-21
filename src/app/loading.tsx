import Image from "next/image";
import CanteenbyMeLogo from "@/images/logo/cbm-logo.png";

export default function Loading() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[#F1F6F9]">
      <div className="flex flex-col justify-center items-center gap-y-2 text-sm font-bold text-slate-800">
        <Image
          src={CanteenbyMeLogo}
          alt="CanteenbyMe Logo"
          className="animate-bounce"
          width={150}
          priority
        />
        <div>Loading...</div>
      </div>
    </div>
  );
}
