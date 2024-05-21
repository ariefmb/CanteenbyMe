import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CanteenbyMe",
  description:
    "CanteenbyMe is a solution for efficient food menu ordering in the UPNVJ canteen. With CanteenbyMe, we hope to facilitate the ordering process and build social relationships between sellers and consumers in the UPNVJ canteen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
