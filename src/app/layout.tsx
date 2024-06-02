import { TableProvider } from '@/context/table.context';
import Providers from '@/providers';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';

const poppins = Poppins({ subsets: ['latin'], weight: '400', display: 'swap' });

export const metadata: Metadata = {
  title: 'CanteenbyMe',
  description:
    'CanteenbyMe is a solution for efficient food menu ordering in the UPNVJ canteen. With CanteenbyMe, we hope to facilitate the ordering process and build social relationships between sellers and consumers in the UPNVJ canteen',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Providers>
        <TableProvider>
          <body className={poppins.className}>{children}</body>
        </TableProvider>
      </Providers>
    </html>
  );
}
