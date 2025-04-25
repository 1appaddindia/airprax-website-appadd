import React from "react";
import Banner from "../../components/global/Banner";
import ProductsCard from "../../components/products-and-solutions-card/ProductsCard";

const productData = [
  {
    id: 1,
    title: "Fire alarm system Integral EvoxX",
    description:
      "Our fire alarm control panel offers high-performance fire protection and does what no other can do: Complete fail safety.",
    features: [
      "For all system sizes",
      "Modular and redundant",
      "Extendable at any time",
    ],
    image:
      "/images/FireAlaram/csm_Integral-EvoxX_Brandmelderzentralen_800x800_2ec4cffbd3.webp", // Replace with actual image path
    buttonText: "SHOW DETAILS",
    buttonLink: "/fire-alarm/fire-alarm-system-integral-evoxx/",
    link: "/fire-alarm/fire-alarm-system-integral-evoxx/",
  },
  {
    id: 2,
    title: "Special fire alarm systems",
    description:
      "Our special fire detectors for extraordinary challenges, boast the earliest possible fire detection and maximum deceptive-alarm security.",
    features: ["Heat, humidity, dust, steam or gas", "For hazardous areas"],
    image: "/images/FireAlaram/csm_ASD535_470x265_x2_01_9ea8cc9385.webp", // Replace with actual image path
    buttonText: "SHOW DETAILS",
    buttonLink: "/fire-alarm/special-fire-alarm-systems/",
    link: "/fire-alarm/special-fire-alarm-systems",
  },
  {
    id: 3,
    title: "Automatic fire detectors",
    description:
      "Reliable and rapid alarm notification, if there's a fire, thanks to fire detection technology that's proven millions of times over.",
    features: [
      "Reliable early fire detection",
      "Permanent self-control",
      "False alarm security",
    ],
    image: "/images/FireAlaram/csm_MTD533X_470x265_x2_01_404b75a2ed.webp", // Replace with actual image path
    buttonText: "SHOW DETAILS",
    buttonLink: "/fire-alarm/automatic-fire-detectors-integral-cubus/",
    link: "/fire-alarm/automatic-fire-detectors-integral-cubus/",
  },
  {
    id: 4,
    title: "Peripherals",
    description:
      "Reliable fire alarm systems need one thing above all: The perfect combination of fire detectors, sirens, flashing lights, manual call points and modules.",
    features: ["Intelligent and flexible", "Freely programmable", "Powerful"],
    image: "/images/FireAlaram/csm_BX-OI3_470x265_x2_50209aac81.webp", // Replace with actual image path
    buttonText: "SHOW DETAILS",
    buttonLink: "/fire-alarm/peripheral-devices-integral-evoxx/",
    link: "/fire-alarm/peripheral-devices-integral-evoxx/",
  },
  {
    id: 5,
    title: "Voice Alarm",
    description:
      "Essential for public space: The right solution for efficient evacuation of buildings in an emergency and situation-specific distribution of information.",
    features: [
      "Fast and efficient evacuation",
      "Situation-specific reaction to events",
    ],
    image: "/images/FireAlaram/csm_APS-Aprosys_470x265_x2_01_8087064fdf.webp", // Replace with actual image path
    buttonText: "SHOW DETAILS",
    buttonLink: "/fire-alarm/speech-based-alarm/",
    link: "/fire-alarm/speech-based-alarm/",
  },
  {
    id: 6,
    title: "Extinguishing control panels Integral EvoxX",
    description:
      "The only extinguishing control panel that can be implemented with a fire alarm control panel in one case - and combines fire detection, alarm notification and control of an extinguishing system.",
    features: [
      "Highest availability and secure extinguishing",
      "Suitable for all extinguishing technologies",
    ],
    image:
      "/images/FireAlaram/csm_EvoxX_Loescherzentralen_800x800_b05b290f2a.webp", // Replace with actual image path
    buttonText: "SHOW DETAILS",
    buttonLink: "/fire-alarm/extinguishing-control-panel-integral-evoxx/",
    link: "/fire-alarm/extinguishing-control-panel-integral-evoxx/",
  },
];

const FireAlaram = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/csm_hero_brandmeldezentrale_7835838fa0.webp"
        currentPage="Fire Alaram"
        pageTitle="Fire Alaram"
        previousPage="Home"
      />
      <ProductsCard productData={productData} />
    </div>
  );
};

export default FireAlaram;
