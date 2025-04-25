import React from "react";
import Banner from "../../../components/global/Banner";
import ProductsCard from "../../../components/products-and-solutions-card/ProductsCard";

const data = {
  title: "Fire alarm system",
  subtitle: "Integral EvoxX",
  description: "High-performance fire safety for all sizes of facilities",
  content:
    "In the event of a fire, many events happen simultaneously and it is important that you can rely completely on one system. The fire alarm control panel Integral EvoxX takes over the reliable detection of the fire, the triggering of the fire control management system and the forwarding to the responsible authorities, so that you and the action force can concentrate fully on your tasks in an emergency. And this from the smallest facility to globally networked systems.",
};

const data2 = {
  title: "Fire alarm control panel Integral EvoxX with the Integral IMAP",
  description:
    "Our modular and flexible solution Integral EvoxX is suitable for all sizes of facilities and does what no other can do: It is completely configurable in a redundant way and, if necessary, the redundant system takes over operation seamlessly. This means you are protected at all times.",
  features: [
    "Highest availability and secure alarm notification",
    "Compatibility over several generations",
    "Intuitive operating concept",
  ],
  buttonText: "LEARN MORE",
  buttonLink: "#",
  image:
    "/images/FireAlaram/csm_Integral-EvoxX_Brandmelderzentralen_800x800_2ec4cffbd3.webp",
};

const data3 = {
  title: "More information",
  description: "Applications and components for Integral EvoxX",
  content:
    "From hardware to software, we supply all system components and ensure that your investment in a Schrack Seconet fire alarm system remains economical and profitable throughout its entire life cycle. A perfectly coordinated integrated solution is thereby created in combination with our accompanying services.",
};

const productData = [
  {
    id: 1,
    title: "Integral Remote: Remote access",
    description:
      "Stay informed and react quickly whenever – intelligent remote access via Integral Remote allows the system to be displayed and operated remotely, convenient monitoring directly at the workplace, flexible real-time notifications on smartphones or tablets and much more.",
    features: [
      "Real-time information with push notification, email or VoIP call",
      "Operation independent of location",
      "Documentation of all events",
      "Highest security",
      "Faster support from support staff",
    ],
    image: "/images/FireAlaram/csm_Integral_Mobile_470x265_x2_69f2c9731f.webp",
  },
  {
    id: 2,
    title: "Alarm management system",
    description:
      "Our alarm management system solution SecoLOG IP combines your various hazard detection systems into one and allows monitoring and operation at a central location. Particularly in critical situations, SecoLOG IP supports problem solving and guides through any danger as an intuitive, secure tool.",
    features: [
      "All alarms and messages at a glance",
      "User-friendly operation",
      "Multiuser system accelerates workflows",
      "Modularly expandable",
    ],
    image: "/images/FireAlaram/csm_icon-alarm-01_c7ace237af.webp",
  },
  {
    id: 3,
    title: "Integral X-LINE",
    description:
      "Our automatic fire detectors, sirens, flashing lights, manual call points and intelligent input and output modules are connected to the Integral EvoxX fire alarm control panel via the powerful Integral X-LINE loop. Up to 3500 meters loop length and up to 250 devices are possible. Short starting times – even when fully expanded.",
    features: [
      "Reliable transmission",
      "Highest fail safety",
      "Easy installation",
      "Flexibly expandable",
    ],
    image:
      "/images/FireAlaram/csm_Integral_EvoxX_Integral-X-LINE_470x265_x2_d519ee8033.webp",
  },
  {
    id: 4,
    title: "Networking",
    description:
      "From large buildings to remote locations – with Integral LAN or Integral WAN, Schrack Seconet offers a networking solution that can be expanded as required for all types of system configurations. Up to 4,049 fire alarm control panels of different generations can be integrated into one system.",
    features: [
      "Diverse transmission technologies",
      "Highest fail safety due to duplicated structure",
      "Integration into existing network structures",
    ],
    image:
      "/images/FireAlaram/csm_Integral_EvoxX-LAN-WAN_470x265_x2_ac3f863f06.webp",
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

      <div className=" bg-[#0f75bc] text-white lg:pt-16 p-4">
        <div className="lg:container mx-auto flex flex-col md:flex-row  justify-between">
          <div className="w-full md:w-1/2 flex justify-center lg:mt-0 mt-10 md:mb-0">
            <img src={data2.image} alt="Fire Alarm Panel" className="w-[70%]" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-white">
              {data2.title}
            </h2>
            <p className="mb-6">{data2.description}</p>
            <ul className="space-y-2 mb-6">
              {data2.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-red-500 mr-2">➡️</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:container lg:mx-auto lg:mt-8">
        <div className="flex flex-col md:flex-row lg:items-start lg:justify-between lg:p-8 p-4">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-[#BF1E2E] text-start">
              {data3.title}
            </h1>
            <p className="text-xl text-[#0f75bc] mt-4">{data3.description}</p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 text-justify leading-relaxed">
              {data3.content}
            </p>
          </div>
        </div>
      </div>
      <ProductsCard productData={productData} />
    </div>
  );
};

export default Product;
