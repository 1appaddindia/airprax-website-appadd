"use client";

import React, { useEffect, useState } from "react";
import VaccumProducts from "./vaccum-products/Products";
import Compressors from "../../components/products/compressors/Products";
import Pumps from "../../components/products/pumps/Pumps";
import WaterManagement from "../../components/products/water-management/Products";
import NitrogenGenerator from "../../components/products/nitrogen-generator/NitrogenGenerator";
import { useRouter, useSearchParams } from "next/navigation";

const Products = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const search = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState("products");

  useEffect(() => {
    switch (search) {
      case "pumps":
        setActiveTab("pumps");
        break;
      case "vaccumProducts":
        setActiveTab("vaccumProducts");
        break;
      case "compressors":
        setActiveTab("compressors");
        break;
      // case "industry":
      //   setActiveTab("industry");
      //   break;
      case "waterManagement":
        setActiveTab("waterManagement");
        break;
      case "nitrogenGenerator":
        setActiveTab("nitrogenGenerator");
        break;
      default:
        setActiveTab("pumps");
        router.replace(`/products?tab=pumps`);
        break;
    }
  }, [search]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.replace(`/products?tab=${tab}`);
  };

  return (
    <div>
      <div className="lg:container p-1 lg:max-w-9xl mx-auto mt-10 overflow-hidden">
        <h5 className="text-center m-5 font-bold text-2xl">Our Products</h5>
        <ul className="lg:flex lg:mb-4 items-center justify-center flex gap-2 w-full p-1 rounded-sm font-bold lg:font-semibold border border-gray-200">
          <li
            className={` cursor-pointer lg:py-2  border border-x-gray-300 p-1 lg:w-full rounded w-full h-9 flex items-center justify-center text-xs lg:text-base  ${
              activeTab === "compressors" ? "bg-[#bf1e2e] text-white" : ""
            }`}
            onClick={() => handleTabClick("compressors")}
          >
            Compressors
          </li>
          <li
            className={` cursor-pointer lg:py-2  text-xs lg:text-base border border-x-gray-300 p-1 lg:w-full rounded  h-9 flex items-center justify-center  ${
              activeTab === "vaccumProducts" ? "bg-[#bf1e2e] text-white" : ""
            }`}
            onClick={() => handleTabClick("vaccumProducts")}
          >
            Vaccum Products
          </li>
          <li
            className={` cursor-pointer lg:py-2  text-xs lg:text-base border border-x-gray-300 p-1 lg:w-full  rounded  h-9 flex items-center justify-center  ${
              activeTab === "pumps" ? "bg-[#bf1e2e] text-white " : ""
            }`}
            onClick={() => handleTabClick("pumps")}
          >
            Water Pumps
          </li>

          {/* <li
            className={` cursor-pointer lg:py-2   border border-gray-300 p-1 lg:w-full rounded w-full h-9 flex items-center justify-center text-xs lg:text-base  ${
              activeTab === "industry" ? "bg-[#bf1e2e] text-white" : ""
            }`}
            onClick={() => handleTabClick("industry")}
          >
            Industry
          </li> */}
          <li
            className={`cursor-pointer py-2  text-xs lg:text-base  border border-gray-300 p-1 lg:w-full rounded  h-9 flex items-center justify-center  ${
              activeTab === "waterManagement" ? "bg-[#bf1e2e] text-white" : ""
            }`}
            onClick={() => handleTabClick("waterManagement")}
          >
            Water Management
          </li>
          <li
            className={`cursor-pointer py-2  text-xs lg:text-base  border border-gray-300 p-1 lg:w-full rounded  h-9 flex items-center justify-center  ${
              activeTab === "nitrogenGenerator" ? "bg-[#bf1e2e] text-white" : ""
            }`}
            onClick={() => handleTabClick("nitrogenGenerator")}
          >
            Nitrogen Generator
          </li>
        </ul>

        <div>
          {activeTab === "compressors" && <Compressors activeTab={search} />}
          {activeTab === "vaccumProducts" && (
            <VaccumProducts activeTab={search} />
          )}
          {activeTab === "pumps" && <Pumps activeTab={search} />}
          {/* {activeTab === "industry" && <Industry activeTab={search} />} */}
          {activeTab === "waterManagement" && (
            <WaterManagement activeTab={search} />
          )}
          {activeTab === "nitrogenGenerator" && (
            <NitrogenGenerator activeTab={search} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
