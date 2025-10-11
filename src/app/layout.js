import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Lenis from "lenis";
import { Toaster } from "react-hot-toast";
import { Poppins } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Towhid Ahmed",
  description: "Portfolio of Towhid Ahmed",
};

const poppins = Poppins({ weight: ['400','500','600','700'], subsets: ['latin'] });

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/features_cus/SmoothScrollProvider";

config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${poppins.className} bg-[#EEEEEE]`}
      >
        {/* <SmoothScrollProvider> */}
          {children}
          <Toaster position="top-center" />
        {/* </SmoothScrollProvider> */}
      </body>
    </html>
  );
}
