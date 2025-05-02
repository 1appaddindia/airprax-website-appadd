import React from "react";
import Banner from "../../components/global/Banner";

const FireAlarm = () => {
  return (
    <>
      <Banner
        imageSrc="/images/banners/csm_hero_brandmeldezentrale_7835838fa0.webp"
        currentPage="Fire Alaram"
        pageTitle="Fire Alaram"
        previousPage="Home"
      />
      <iframe
        src="/B-PR-622EN_Wallpaper_IntegralEvoxX_INTERNATIONAL_V1-1.pdf"
        className="w-[100%] lg:h-[900px] h-[800px]"
        title="Fire Alarm PDF"
      />
      <div className="p-10 text-center flex gap-3 justify-center">
        <a href="https://www.schrack-seconet.com/">
          <button className="button text-white rounded-md font-bold hover:bg-[#018CB5]  hover:text-white hover:border-none hover:transform transition-transform duration-300 ease-in-out hover:scale-105 text-sm p-4">
            View More Details
          </button>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B919742233402&text=Hello">
          <button className="button text-white rounded-md font-bold hover:bg-[#018CB5]  hover:text-white hover:border-none hover:transform transition-transform duration-300 ease-in-out hover:scale-105 text-sm p-4">
            Get In Touch
          </button>
        </a>
      </div>
    </>
  );
};

export default FireAlarm;
