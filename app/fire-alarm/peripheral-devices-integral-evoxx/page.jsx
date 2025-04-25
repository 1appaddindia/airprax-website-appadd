import React from "react";
import Banner from "../../../components/global/Banner";
import ProductsCard from "../../../components/products-and-solutions-card/ProductsCard";

const data = {
  title: "Peripheral devices",
  subtitle: "Integral CUBUS",
  description: "For one of the best fire alarm control panels in the world",
  content:
    "Our peripheral devices combine output and alarm notification in perfection – just right for our fire alarm control panel Integral EvoxX and exactly as you can expect from us as a long-standing innovation leader . Around 200 available components ensure reliable fire alarm applications to protect lives and assets through an ideal combination of intelligent sensor technology and optical and acoustic signal generator and various control modules.",
};

const productData = [
  {
    id: 1,
    title: "Sirens and flashing lights",
    description:
      "For the acoustic and optical signal notification of a fire alarm, we have a large number of alarm transmitters in various colours and designs. Pitch, flash frequency and volume can be selected individually for each device. ",
    features: [
      "Loop or conventional connection",
      "Combined alarm device or flashing lights according to EN 54-23",
    ],
    image: "/images/FireAlaram/csm_BX-SOL_470x265_x2_01_9940ae460e.webp",
  },
  {
    id: 2,
    title: "Manual call point and button",
    description:
      "For manual triggering of a fire alarm, we offer a variety of manual call points in different colours, designs and protection classes. In addition, stop and release buttons are also available for manually triggering an extinguishing process.",
    features: [
      "Direct and indirect triggering",
      "Robust and impact resistant",
      "Comprehensible pictograms for clear operation",
    ],
    image: "/images/FireAlaram/csm_MCP545X-1R_470x265_x2_01_34bed589f1.webp",
  },
  {
    id: 3,
    title: "Input and output modules",
    description:
      "We offer intelligent input and output modules on the loop for all types of output in the event of a fire and/or extinguishing. These enable the simple connection of special fire alarm systems and any external elements such as fire prevention doors and ventilation flaps as well as the monitoring of hazardous areas.",
    features: [
      "Powerful components",
      "Unrestricted function in case of short circuit, wire break or sabotage",
      "Considerable minimisation of the installation effort",
    ],
    image: "/images/FireAlaram/csm_BX-OI3_470x265_x2_50209aac81 (1).webp",
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
