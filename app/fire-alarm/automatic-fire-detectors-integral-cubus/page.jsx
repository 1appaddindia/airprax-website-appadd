import React from "react";
import Banner from "../../../components/global/Banner";
import ProductsCard from "../../../components/products-and-solutions-card/ProductsCard";

const data = {
  title: "Fire detectors",
  subtitle: "Integral CUBUS",
  description: "Fire detection technology for every use",
  content:
    "Fire detectors watch over a building, almost invisibly, and fulfil a clear task: The reliable and deceptive alarm-proof detection of all fires in the formation phase. The multiple sensor detectors from Schrack Seconet have been tried and tested millions of times and are suitable for all types of systems - even in a wide range of ambient conditions.  ",
};

const productData = [
  {
    id: 1,
    title: "Multiple sensor detector MTD 533X",
    description:
      "A combined fire detector with smoke and heat sensor, optionally with integrated acoustics and / or voice output in 15 languages as well as different base variants. The sensors can be individually activated or deactivated depending on the area of use. ",
    features: [
      "Reliable early fire detection",
      "Highest deceptive alarm security",
      "Permanent self-monitoring",
    ],
    image: "/images/FireAlaram/csm_MTD533X_470x265_x2_01_404b75a2ed (1).webp",
  },
  {
    id: 2,
    title: "Multiple sensor detector CMD 533X",
    description:
      "Improved early fire detection combined with reliable protection against carbon monoxide poisoning: The CMD 533X fire detector combines a smoke and heat sensor with CO detection and ensures reliable detection even with dust and steam.",
    features: [
      "Reliable early fire detection",
      "Elimination of deceptive alarms",
      "Permanent self-monitoring",
    ],
    image: "/images/FireAlaram/csm_CMD533X_470x265_x2_01_fce2ebd6fd.webp",
  },
  {
    id: 3,
    title: "Multiple sensor detector MMD 130 Ex-i",
    description:
      "The combined smoke and heat detector MMD 130 Ex-i is used for fire detection in case of explosion hazard and meets the applicable requirements for hazardous building areas of zones 1, 2 and 22.",
    features: [
      "Smoke and heat detection",
      "Reliable early fire detection",
      "Highest deceptive alarm security",
    ],
    image: "/images/FireAlaram/csm_MMD130EX-I_470x265_x2_01_06fa3c21aa.webp",
  },
  {
    id: 4,
    title: "Duct smoke detector LKM 593X",
    description:
      "For fire smoke detectionin ventilation systems and at locations with high air velocity and high smoke dilution. Thanks to early smoke detection, an immediate message to the fire alarm control panel prevents fire and smoke from spreading through the ventilation system within the building.",
    features: [
      "Reliable early fire detection",
      "Complete set with transparent case",
      "Easy service from outside",
      "Direct connection to the loop",
    ],
    image: "/images/FireAlaram/csm_LKM593X_470x265_x2_01_dac0921b95.webp",
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
            <h2 className="text-3xl font-bold text-[#0f75bc] mt-2 ">
              {data.subtitle}
            </h2>
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
