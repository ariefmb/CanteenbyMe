import Head from "next/head";
import Canteens from "./canteens/page";

export default function Home() {
  return (
    <main className='min-h-screen bg-background py-10 px-5'>
      <Head>
        <title>CanteenbyMe</title>
        <meta name="description" content="CanteenbyMe is a solution for efficient food menu ordering in the UPNVJ canteen. With CanteenbyMe, we hope to facilitate the ordering process and build social relationships between sellers and consumers in the UPNVJ canteen"/>
        <meta name="keywords" content="Food, Beverage, NextJS, TailwindCSS"/>
      </Head>
      <Canteens />
    </main>
  );
}
