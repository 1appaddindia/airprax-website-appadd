"use client";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/home", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Products", href: "/products", current: false },
  { name: "Industry", href: "/industry", current: false },
  { name: "Latest News", href: "/latest-news", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Brochure", href: "/brochure", current: false },
  { name: "More", href: "#", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const moreItems = [
  { name: "Medical Oxygen Plant", href: "/medical-oxygen-plant" },
  { name: "Careers", href: "/careers" },
  { name: "Our Customers", href: "/customers" },
];

const productsItems = [
  {
    id: 1,
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
  // {
  //   id: 2,
  //   name: "Industry",
  //   href: "/products?tab=industry",
  //   subProducts: [
  //     {
  //       name: "Heating",
  //       href: "/products/industry/heating",
  //     },
  //     {
  //       name: "Cooling",
  //       href: "/products/industry/cooling",
  //     },
  //     {
  //       name: "Raw Water Intake",
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
  {
    id: 3,
    name: "Compressors",
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
      // {
      //   name: "Gas Compressors",
      //   href: "/products/gasspacecompressors?tab=compressors",
      // },
      {
        name: "Gas Generators",
        href: "/products/gasspacegenerators?tab=compressors",
      },
    ],
  },

  {
    id: 4,
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
      // {
      //   name: "Mobility Compressors",
      //   href: "/products/mobilityspacecompressors?tab=compressors",
      // },
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
  {
    id: 5,
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
      // {
      //   name: "Steam ejectors and deaerators",
      //   href: "/products/steamspaceejectorsspaceandspacedeaerators?tab=vaccumProducts",
      // },
    ],
  },
  {
    id: 6,
    name: "Nitrogen Generator",
    href: "/products?tab=nitrogenGenerator",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const router = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState(navigation);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsActive((prevState) =>
      prevState.map((nav) => ({
        ...nav,
        current: router.includes(nav.href),
      }))
    );
  }, [router]);

  const handleMouseEnter = (product) => {
    setIsProductsHovered(true);
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setIsProductsHovered(false);
    setHoveredProduct(null);
  };

  const handleSubProductClick = () => {
    setIsProductsHovered(false);
    setHoveredProduct(null);
  };

  return (
    <>
      <Disclosure
        as="nav"
        className={`bg-[#ffff] h-24 flex items-center text-[#BF1E2E] fixed top-0 z-20 w-full ${
          scrolled ? "shadow-md" : ""
        } transition-all duration-300`}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8 w-full">
              <div className="relative flex h-24 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="lg:flex lg:flex-1 lg:items-center lg:justify-evenly  items-stretch justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-20 w-52"
                      src="/images/logo/Airprax-logo-01.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 items-center justify-center  ">
                      {isActive.map((item) =>
                        item.name === "More" ? (
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                            key={item.name}
                          >
                            <div>
                              <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-bold text-[#BF1E2E] hover:text-black transition-all duration-300">
                                More
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                  {moreItems.map((subItem) => (
                                    <Menu.Item key={subItem.name}>
                                      {({ active }) => (
                                        <Link
                                          href={subItem.href}
                                          className={classNames(
                                            active ? "bg-gray-100" : "",
                                            "block px-4 py-2 text-sm text-gray-700"
                                          )}
                                        >
                                          {subItem.name}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </div>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        ) : item.name === "Products" ? (
                          <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                            key={item.name}
                          >
                            <Link
                              href={item.href}
                              className={classNames(
                                item.current ||
                                  (hoveredProduct &&
                                    hoveredProduct.name === item.name)
                                  ? "bg-[#0F75BC] text-[#ffff]"
                                  : "text-[#BF1E2E] hover:text-black transition-all duration-300",
                                "rounded-md px-3 py-2 text-sm font-bold"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              Products
                            </Link>
                            {isProductsHovered &&
                              hoveredProduct.name === item.name && (
                                <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full lg:w-auto">
                                  <div className="py-1 lg:flex lg:flex-row flex flex-col w-full">
                                    {productsItems.map((productItem) => (
                                      <div
                                        key={productItem.id}
                                        className="relative flex flex-col "
                                      >
                                        <Link
                                          href={productItem.href}
                                          className="block px-4 py-1 text-sm text-black font-bold hover:bg-gray-100 "
                                        >
                                          {productItem.name}
                                        </Link>
                                        {productItem.subProducts && (
                                          <div className="py-1">
                                            {productItem.subProducts.map(
                                              (subProduct) => (
                                                <Link
                                                  key={subProduct.name}
                                                  href={subProduct.href}
                                                  onClick={
                                                    handleSubProductClick
                                                  }
                                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-60"
                                                >
                                                  {subProduct.name}
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </div>
                        ) : (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-[#0F75BC] text-[#ffff]"
                                : "text-[#BF1E2E] hover:text-black transition-all duration-300",
                              "rounded-md px-3 py-2 text-sm font-bold"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 overflow-y-scroll h-72 relative top-48  bg-white border border-black ">
                {isActive.map((item) =>
                  item.name === "More" ? (
                    <Menu
                      as="div"
                      className="relative inline-block text-left "
                      key={item.name}
                    >
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-bold text-[#BF1E2E] hover:text-black transition-all duration-300">
                          More
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {moreItems.map((subItem) => (
                              <Menu.Item key={subItem.name}>
                                {({ active }) => (
                                  <Link
                                    href={subItem.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {subItem.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : item.name === "Products" ? (
                    <div className="relative" key={item.name}>
                      <Disclosure.Button
                        className={classNames(
                          item.current
                            ? "bg-[#0F75BC] text-[#ffff]"
                            : "text-[#BF1E2E] hover:text-black transition-all duration-300",
                          "rounded-md px-3 py-2 text-sm font-bold w-full text-left"
                        )}
                      >
                        Products
                      </Disclosure.Button>
                      <Disclosure.Panel className="pt-2 pb-3 space-y-1 w-96 ">
                        {productsItems.map((productItem) => (
                          <div
                            key={productItem.id}
                            className="relative flex flex-col"
                          >
                            <Link
                              href={productItem.href}
                              className="block px-4 py-1 text-sm text-black font-bold hover:bg-gray-100"
                            >
                              {productItem.name}
                            </Link>
                            {productItem.subProducts && (
                              <div className="py-1 pl-4">
                                {productItem.subProducts.map((subProduct) => (
                                  <Link
                                    key={subProduct.name}
                                    href={subProduct.href}
                                    onClick={handleSubProductClick}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {subProduct.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-[#0F75BC] text-[#ffff]"
                          : "text-[#BF1E2E] hover:text-black transition-all duration-300",
                        "block rounded-md px-3 py-2 text-sm font-bold"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="h-24" />
    </>
  );
}
export default Navbar;
