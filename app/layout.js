// pages/_app.js (or wherever your RootLayout component is used)

import { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import CustomScriptComponent from "../components/CustomScriptComponent"; // Adjust the path as per your structure
import "../styles/globals.css"; // Adjust the path as per your structure

const RootLayout = ({ children }) => {
  useEffect(() => {
    // Any client-side initialization or custom scripts can go here
  }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon[0].href} />
        {/* Include any additional <meta>, <link>, or <script> tags here */}
      </Head>

      <Navbar />
      <main className="lg:mt-[128px] mt-[60px]">{children}</main>
      <Footer />
      <CustomScriptComponent />
    </>
  );
};

export default RootLayout;
