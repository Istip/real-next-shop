import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ECommerce",
  description: "Nextjs ecommerce shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${font.className} text-stone-900 bg-stone-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
