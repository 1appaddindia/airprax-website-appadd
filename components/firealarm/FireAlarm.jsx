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
      <div className="pdf-container">
        {/* PDF viewer for desktop */}
        <iframe
          src="/B-PR-622EN_Wallpaper_IntegralEvoxX_INTERNATIONAL_V1-1.pdf"
          className="w-[100%] lg:h-[900px] h-[500px] hidden lg:block"
          title="Fire Alarm PDF"
        />
        {/* Download button for mobile */}
        <div className="lg:hidden text-center py-8">
          {/* <a
            href="/B-PR-622EN_Wallpaper_IntegralEvoxX_INTERNATIONAL_V1-1.pdf"
            download
            className="bg-[#0f75bc] text-white py-3 px-6 rounded-md inline-block hover:bg-[#bf1e2e] transition-colors duration-300"
          >
            Download PDF
          </a> */}
          <div className="">
            <div className="lg:col-span-3 p-4">
              <a
                // key={index}
                href="/B-PR-622EN_Wallpaper_IntegralEvoxX_INTERNATIONAL_V1-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <div className="flex items-center justify-center space-x-2 bg-white shadow-2xl p-5 rounded-md">
                  <img
                    src="/images/pdf-icon/pdf.png"
                    alt=""
                    className="h-10 w-10"
                  />
                  <span className="text-gray-600 font-semibold hover:text-black-800 text-sm transition-colors">
                    B-PR-622EN_Wallpaper_IntegralEvoxX_ <br />INTERNATIONAL_V1-1.pdf
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 text-center flex gap-3 justify-center">
        <a href="https://www.schrack-seconet.com/">
          <button className="button text-white rounded-md font-bold hover:bg-[#018CB5] hover:text-white hover:border-none hover:transform transition-transform duration-300 ease-in-out hover:scale-105 text-sm p-4">
            View More Details
          </button>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=%2B919742233402&text=Hello">
          <button className="button text-white rounded-md font-bold hover:bg-[#018CB5] hover:text-white hover:border-none hover:transform transition-transform duration-300 ease-in-out hover:scale-105 text-sm p-4">
            Get In Touch
          </button>
        </a>
      </div>
    </>
  );
};

export default FireAlarm;
