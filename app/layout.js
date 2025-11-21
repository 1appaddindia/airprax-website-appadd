import { Inter } from "next/font/google";
import Script from "next/script";
import Plugin from "../components/Plugin";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import TawkTo from "../components/TawkTo";
import "./globals.css";
import SEO from "../app/common/SEO.jsx";
import { Suspense } from "react";

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
      <head>
        <Suspense fallback={<div>Loading SEO...</div>}>
          <SEO />
        </Suspense>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DVHCWTRCK6"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DVHCWTRCK6');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <Navbar />
        <main className="lg:mt-[128px] mt-[60px]">{children}</main>
        <TawkTo />
        <Footer />
        {/* <Plugin /> */}
      </body>
    </html>
  );
}
