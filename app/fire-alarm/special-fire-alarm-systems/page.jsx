import React from "react";
import Banner from "../../../components/global/Banner";
import ProductsCard from "../../../components/products-and-solutions-card/ProductsCard";

const data = {
  title: "Special fire alarm systems",
  description: "Reliable detection under the most difficult conditions",
  content:
    "Extreme humidity, pollution, high temperatures or great heights? Schrack Seconet offers the right solution for every application with its range of special fire alarm technology products, thereby guaranteeing security, even under the most difficult ambient conditions. Even in hazardous areas, our special solutions ensure exact detection and high-speed reaction. The products and systems best suited to your application will be developed together with you, during a personal consultation and planning phase. ",
};

const productData = [
  {
    id: 1,
    title: "Aspirating smoke detector",
    description:
      "Our ASD product family are among the most precise and reliable fire early warning systems in modern fire detection. The detectors boast unrivalled performance, robustness and detection reliability and can react highly sensitively to fires. ",
    features: [
      "Data centres and clean rooms",
      "Low temperature ranges",
      "Historical buildings",
      "Large room heights",
    ],
    image: "/images/FireAlaram/csm_ASD535_470x265_x2_01_9ea8cc9385 (1).webp",
  },
  {
    id: 2,
    title: "Line-type heat detector ADW",
    description:
      "In chemically aggressive ambient conditions, acid, humidity, dust as well as steam or gas development and extreme disturbance variables, line-type heat detectors prove to be particularly reliable and enable an application-optimised sensor design in copper, stainless steel or Teflon.",
    features: [
      "Food production",
      "Open parking decks and loading ramps",
      "Hazardous areas",
    ],
    image: "/images/FireAlaram/csm_ADW535_470x265_x2_01_a8cfb97b06.webp",
  },
  {
    id: 3,
    title: "Line-type heat detector LIST",
    description:
      "The sensor cable has sensors at defined, tailor-made distances along the entire cable length. It is characterised by precise detection down to 0.1 degree, high reaction speed, simple installation, commissioning and repair as well as long service life with stable evaluation characteristics.",
    features: [
      "Industrial applications",
      "Conveyor belts and waste disposal",
      "Cable trays and shafts",
      "Road and rail tunnels",
    ],
    image: "/images/FireAlaram/csm_SCU835_470x265_x2_8a50e9acce.webp",
  },
  {
    id: 4,
    title: "Linear smoke detectors",
    description:
      "Where the maximum installation height of conventional fire detectors is not sufficient, the visual appearance should not be affected and/or when large areas need to be monitored: Then the field of application of the linear smoke detectors with reflector or transmitter/receiver principle begins.",
    features: [
      "Halls and extensive areas",
      "Shopping centres and atriums",
      "Historical buildings",
      "Theatres and museums",
    ],
    image: "/images/FireAlaram/csm_Fireray-One_470x265_x2_0cb91e792c.webp",
  },
  {
    id: 5,
    title: "Flame detector",
    description:
      "Are used for the detection of smokeless liquid and gas fires as well as smoke-forming open fires. A microprocessor-controlled signal evaluation system ensures excellent deceptive alarm security - even in solar radiation or light from other potential disturbance source.",
    features: [
      "Oil and gas industry",
      "Chemical plants and warehouses",
      "Waste disposal",
      "Aircraft hangars",
    ],
    image:
      "/images/FireAlaram/csm_IR3_lameSpec_Flammenmelder_470x265_x2_85e09fd9d8.webp",
  },
  {
    id: 6,
    title: "Radio detector",
    description:
      "The ideal solution for rooms and buildings under heritage conservation or where the laying of cables is not feasible due to structural aspects or special operating procedures. Installation is possible without interrupting operation.",
    features: [
      "Historical buildings / museums",
      "Sacred buildings",
      "Construction site monitoring",
      "Temporary facilities",
    ],
    image: "/images/FireAlaram/csm_FDM273_470x265_x2_01_be8c8e228f.webp",
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
