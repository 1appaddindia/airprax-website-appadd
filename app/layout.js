import { Inter } from "next/font/google";
import Plugin from "../components/Plugin";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import "./globals.css";
import Head from "next/head";
import SEO from "../app/_common/SEO.jsx"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: [
      {
        url: "/Airprax-logo-01-fotor-20240620112445.png",
        href: "/Airprax-logo-01-fotor-20240620112445.png",
      },
    ],
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
    
      <Head>
      <SEO />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main className="lg:mt-[128px] mt-[60px]">{children}</main>
        <Footer />
        <Plugin />
      </body>
    </html>
  );
}
