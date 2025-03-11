
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Search } from "lucide-react";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { IconCompras } from "./components/iconCompras";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TICSTORY",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`} >
        <header className="  h-[80] items-center px-16  justify-between flex  bg-[#fff]">
          <h1 className=" text-5xl font-normal  text-[#5D5D6D]">Tic Story</h1>
          <div className="flex items-center gap-3" >

            <div className="w-[352] h-[42] items-center rounded-lg px-4 bg-[#F3F5F6] text-[#737380] flex ">
              <input className="w-[352] placeholder-[#737380] outline-none bg-transparent h-[42]" type="search" placeholder="Procurando por algo específico?" />
              <Search className="cursor-pointer" />
            </div>
            <Link href={'Carrinho'}>
              <div className="flex items-center ">
                <ShoppingBagIcon className="text-[#737380] cursor-pointer"  />
                <p className="relative  top-4 left-[-10] text-xs rounded-full p-[3] px-[8] cursor-pointer text-[#fff] bg-[#DE3838]" ></p>
              </div>
            </Link>
          
          </div>
        </header>
        
        {children}

      

      </body>
    </html>
  );
}
