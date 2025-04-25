import React from "react";
import Banner from "../../../components/global/Banner";
import ProductsCard from "../../../components/products-and-solutions-card/ProductsCard";

const data = {
  title: "Voice Alarm",
  subtitle: "Integral CUBUS",
  description: "Reliable, powerful and flexible",
  content:
    "Cooperation is important. It's also important to be able to react to situations individually as well. This applies to daily business life, especially in the event of fire. That's why we offer you a comprehensive portfolio for all system sizes for every type of  Public Address and Voice alarm application, which can be seamlessly networked with our Integral EvoxX fire alarm control panel.",
};

const productData = [
  {
    id: 1,
    title: "System solution APS®-APROSYS",
    description:
      "An intelligent system solution that sets international standards and is absolutely user-friendly and future-oriented. Thanks to features such as LAN networking and DSP technology, the system meets your highest demands for speech-based alarm systems SAA, electronic emergency warning systems ENS and general public address solutions.",
    features: [
      "Shopping and exhibition centres",
      "Office buildings and hotels",
      "Sports and event facilities",
      "Airports and railway stations",
    ],
    image: "/images/FireAlaram/csm_APS-Aprosys_470x265_x2_01_8087064fdf (1).webp",
  },
  {
    id: 2,
    title: "New and future-oriented controller APS-9000",
    description:
      "The APS-9000 controller is used as the central functional unit for controlling, monitoring and processing audio signals of the above listed APS®-APROSYS system. With sophisticated integration of all functions, the new APS-9000 significantly reduces the effort and risks involved in the realization of PA/VA projects. Its open system architecture as well as real-time audio transmission according to AES67 ensure user future-proofness.",
    // features: [
    //   "Direct and indirect triggering",
    //   "Robust and impact resistant",
    //   "Comprehensible pictograms for clear operation",
    // ],
    image: "/images/FireAlaram/APS-9000_NEU_400x265.webp",
  },
];

const Product = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/csm_hero_brandmeldezentrale_7835838fa0.webp"
        currentPage="Fire Alaram"
        pageTitle="Fire Alaram"
        previousPage="Home"
      />
      <div className="lg:container lg:mx-auto lg:mt-8">
        <div className="flex flex-col md:flex-row lg:items-start lg:justify-between lg:p-8 p-4">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-[#BF1E2E] text-start">
              {data.title}
            </h1>
            {/* <h2 className="text-3xl font-bold text-[#0f75bc] mt-2 ">
              {data.subtitle}
            </h2> */}
            <p className="text-xl text-[#0f75bc] mt-4">{data.description}</p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-justify leading-relaxed">
              {data.content}
            </p>
          </div>
        </div>
      </div>

      <ProductsCard productData={productData} />
    </div>
  );
};

export default Product;
