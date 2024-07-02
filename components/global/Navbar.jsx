"use client";
import Header from "../../components/global/Header";

const moreItems = [
  { name: "Medical Oxygen Plant", href: "/medical-oxygen-plant" },
  // { name: "Careers", href: "/careers" },
  { name: "Our Customers", href: "/customers" },
];

const productsItems = [
  {
    id: 1,
    name: "Air Compressors",
    href: "/products?tab=compressors",
    subProducts: [
      {
        name: "Air compressor industrial models and solutions",
        href: "/products/airspacecompressorspaceindustrialspacemodelsspaceandspacesolutions?tab=compressors",
      },
      {
        name: "Air Dryers",
        href: "/products/airspacedryers?tab=compressors",
      },
      {
        name: "Oil Free Air Blowers",
        href: "/products/oilspacefreespaceairspaceblowers?tab=compressors",
      },
      {
        name: "Industrial Condensate Treatment Solutions Range",
        href: "/products/industrialspacecondensatespacetreatmentspacesolutionsspacerange?tab=compressors",
      },
      {
        name: "Air Filters",
        href: "/products/airspacefilters?tab=compressors",
      },
      {
        name: "Gas Generators",
        href: "/products/gasspacegenerators?tab=compressors",
      },
    ],
  },

  {
    id: 5,
    name: "Nitrogen Generator",
    href: "/products?tab=nitrogenGenerator",
  },
  {
    id: 3,
    name: "Water Management",
    href: "/products?tab=waterManagement",
    subProducts: [
      {
        name: "Raw Water Intake",
        href: "/products/water-management/raw-water-intake",
      },
      {
        name: "Waste Water Collection And Transport",
        href: "/products/water-management/waste-water-collection-and-transport",
      },
      { name: "Dewatering", href: "/products/water-management/dewatering" },
      {
        name: "Waste Water Treatment",
        href: "/products/water-management/waste-water-treatment",
      },
      {
        name: "Water Distribution And Boosting",
        href: "/products/water-management/water-distribution-boosting",
      },
      {
        name: "Water Treatment",
        href: "/products/water-management/water-treatment",
      },
    ],
  },
  {
    id: 4,
    name: "Vaccum Products",
    href: "/products?tab=vaccumProducts",
    subProducts: [
      {
        name: "Oil-sealed vacuum pumps",
        href: "/products/oildashsealedspacevacuumspacepumps?tab=vaccumProducts",
      },
      {
        name: "Dry vacuum pumps",
        href: "/products/dryspacevacuumspacepumps?tab=vaccumProducts",
      },
      {
        name: "Liquid ring vacuum pumps",
        href: "/products/liquidspaceringspacevacuumspacepumps?tab=vaccumProducts",
      },
      {
        name: "Industry 4.0 Controllers & Accessories",
        href: "/products/industryspace4dot0spacecontrollersspaceandspaceaccessories?tab=vaccumProducts",
      },
    ],
  },
  {
    id: 2,
    name: "Other Compressor Products",
    href: "/products?tab=compressors",
    subProducts: [
      {
        name: "Oxygen Generators",
        href: "/products/oxygenspacegenerators?tab=compressors",
      },
      {
        name: "Process Gas and Air Equipment",
        href: "/products/processspacegasspaceandspaceairspaceequipment?tab=compressors",
      },
      {
        name: "Marine Compressors",
        href: "/products/marinespacecompressors?tab=compressors",
      },
      {
        name: "Air Receivers and AfterCoolers",
        href: "/products/airspacereceiversspaceandspaceaftercoolers?tab=compressors",
      },
      {
        name: "Oil-free Air And Nitrogen Boosters",
        href: "/products/oildashfreespaceairspaceandspacenitrogenspaceboosters?tab=compressors",
      },
      {
        name: "Energy Conversion",
        href: "/products/energyspaceconversion?tab=compressors",
      },
      {
        name: "Industrial Water Cooling Systems",
        href: "/products/industrialspacewaterspacecoolingspacesystems?tab=compressors",
      },
      {
        name: "Process filters",
        href: "/products/processspacefilters?tab=compressors",
      },
    ],
  },
  // {
  //   id: 1,
  //   name: "Water Pumps",
  //   href: "/products?tab=pumps",
  //   subProducts: [
  //     {
  //       name: "Wilo-Stratos MAXO",
  //       href: "/products/water-management/raw-water-intake",
  //     },
  //     {
  //       name: "Waste Water Collection And Transport",
  //       href: "/products/water-management/waste-water-collection-and-transport",
  //     },
  //     { name: "Dewatering", href: "/products/water-management/dewatering" },
  //     {
  //       name: "Waste Water Treatment",
  //       href: "/products/water-management/waste-water-treatment",
  //     },
  //     {
  //       name: "Water Distribution And Boosting",
  //       href: "/products/water-management/water-distribution-boosting",
  //     },
  //     {
  //       name: "Water Treatment",
  //       href: "/products/water-management/water-treatment",
  //     },
  //   ],
  // },
];

import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
  InformationCircleIcon,
  ArchiveBoxIcon,
  NewspaperIcon,
  PhotoIcon,
  DevicePhoneMobileIcon,
  ArrowSmallDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

const IndustryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm18 1.9V4H3v.9h18zM3 20v-5h2v5H3zm14 0v-7h2v7h-2zm4 0h-2v-9H5v9H3v-9H2v9H1v-9H0v9a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-9h-1v9h-1v-9h-1v9z" />
  </svg>
);

const GalleryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M21 3H3C1.895 3 1 3.895 1 5v14c0 1.105.895 2 2 2h18c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zM3 5h18v4.07l-5.68-5.69L10 12 3 5zm18 14H3v-4.07l5.68 5.69L14 12l7 7z" />
  </svg>
);

const navigation = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "About", href: "/about", icon: InformationCircleIcon },
  { name: "Products", href: "/products", icon: ArchiveBoxIcon },
  { name: "Industry", href: "/industry", icon: IndustryIcon },
  { name: "Latest News", href: "/latest-news", icon: NewspaperIcon },
  { name: "Gallery", href: "/gallery", icon: GalleryIcon },
  { name: "Brochure", href: "/brochure", icon: PhotoIcon },
  { name: "More", href: "/medical-oxygen-plant", icon: ArrowSmallDownIcon },
  { name: "Contact", href: "/contact", icon: DevicePhoneMobileIcon },
];
const mobnavigation = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "About", href: "/about", icon: InformationCircleIcon },
  { name: "Products", href: "/products", icon: ArchiveBoxIcon },
  { name: "Industry", href: "/industry", icon: IndustryIcon },
  { name: "Latest News", href: "/latest-news", icon: NewspaperIcon },
  { name: "Gallery", href: "/gallery", icon: GalleryIcon },
  {
    icon: ArrowSmallDownIcon,
    name: "More",
    href: "#",
    moreItems: [
      { name: "Medical Oxygen Plant", href: "/medical-oxygen-plant" },
      // { name: "Careers", href: "/careers" },
      { name: "Our Customers", href: "/customers" },
    ],
  },
  { name: "Brochure", href: "/brochure", icon: PhotoIcon },

  { name: "Contact", href: "/contact", icon: DevicePhoneMobileIcon },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();
  const [showProducts, setShowProducts] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5 ">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5 "
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* mobile sidebar  */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <nav className="flex flex-1 flex-col py-2">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <a href="/">
                            <img
                              src="/images/logo/Airprax-logo-01.png"
                              alt=""
                              className="h-14 w-18"
                            />
                          </a>
                          <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-4"
                            onClick={toggleSideBar}
                          >
                            {mobnavigation.map((item) => (
                              <li key={item.name} className="relative">
                                {item.name === "More" ? (
                                  <>
                                    <button
                                      onClick={toggleDropdown}
                                      className={`${
                                        item.href === pathName
                                          ? "bg-gray-50 text-red-600"
                                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                                      } group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold w-full text-left`}
                                    >
                                      <item.icon
                                        className={`${
                                          item.href === pathName
                                            ? "text-red-600"
                                            : "text-gray-400 group-hover:text-red-600"
                                        } h-6 w-6 shrink-0`}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                      <ArrowSmallDownIcon
                                        className={`${
                                          dropdownOpen
                                            ? "transform rotate-180"
                                            : ""
                                        } h-5 w-5 ml-auto`}
                                        aria-hidden="true"
                                      />
                                    </button>
                                    {dropdownOpen && (
                                      <ul className="mt-2 space-y-1 bg-white border border-gray-200 rounded-md shadow-lg">
                                        {item.moreItems.map((subItem) => (
                                          <li key={subItem.name}>
                                            <Link href={subItem.href} passHref>
                                              <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 cursor-pointer">
                                                {subItem.name}
                                              </div>
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                ) : (
                                  <Link href={item.href} passHref>
                                    <div
                                      className={`${
                                        item.href === pathName
                                          ? "bg-gray-50 text-red-600"
                                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                                      } group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold cursor-pointer`}
                                    >
                                      <item.icon
                                        className={`${
                                          item.href === pathName
                                            ? "text-red-600"
                                            : "text-gray-400 group-hover:text-red-600"
                                        } h-6 w-6 shrink-0`}
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </div>
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:flex bg-white shadow-md w-full items-center fixed top-0 z-50 ">
          <div className="w-full">
            <Header />
            <nav className="flex flex-col items-center justify-between p-3">
              <ul className="gap-10 flex items-center justify-between w-full">
                <div>
                  <a href="/" className="">
                    <img
                      className="h-20 w-52"
                      src="/images/logo/Airprax-logo-01.png"
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="flex">
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      className="relative p-2"
                      onMouseEnter={() => {
                        if (item.name === "Products") setShowProducts(true);
                        if (item.name === "More") setShowMore(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === "Products") setShowProducts(false);
                        if (item.name === "More") setShowMore(false);
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`${
                          item.href === pathName
                            ? "bg-[#0F75BC] text-white"
                            : "text-[#BF1E2E] hover:text-white hover:bg-[#0F75BC]"
                        } transition-colors duration-500 w-full gap-x-3 rounded-md p-4 text-sm leading-6 font-semibold`}
                      >
                        {item.name}
                      </Link>
                      {item.name === "Products" && showProducts && (
                        <ul className="absolute left-1/4 mt-2 transform -translate-x-1/2  flex p-2 bg-white border border-gray-200 shadow-lg">
                          {productsItems.map((product) => (
                            <li
                              key={product.id}
                              className="w-60 text-sm text-start"
                            >
                              <Link
                                href={product.href}
                                className="block px-2 py-2 font-bold items-center text-gray-700 hover:bg-gray-100"
                              >
                                {product.name}
                              </Link>
                              {product.subProducts && (
                                <ul>
                                  {product.subProducts.map((subProduct) => (
                                    <li key={subProduct.name}>
                                      <Link
                                        href={subProduct.href}
                                        className="block px-2 py-2 items-center text-gray-600 hover:bg-gray-100"
                                      >
                                        {subProduct.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.name === "More" && showMore && (
                        <ul className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg">
                          {moreItems.map((moreItem) => (
                            <li key={moreItem.name}>
                              <Link
                                href={moreItem.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                {moreItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </div>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:hidden bg-white fixed top-0 z-50  shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8 w-full flex justify-between">
          <button
            type="button"
            className=" p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-10 w-9 text-black" aria-hidden="true" />
          </button>
          <a href="/">
            <img
              src="/images/logo/Airprax-logo-01.png"
              alt=""
              className="h-14 w-32"
            />
          </a>
        </div>
      </div>
    </>
  );
}
