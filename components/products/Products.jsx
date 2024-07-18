"use client";

import React, { useEffect, useState, Suspense } from "react";
import VaccumProducts from "./vaccum-products/Products";
import Compressors from "../../components/products/compressors/Products";
import Pumps from "./pumps/Products";
import WaterManagement from "../../components/products/water-management/Products";
import NitrogenGenerator from "../../components/products/nitrogen-generator/NitrogenGenerator";
import { useRouter, useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

const ProductsContent = () => {
  const router = useRouter();
  const params = useParams();
  const [activeTab, setActiveTab] = useState("compressors");

  useEffect(() => {
    switch (params.products) {
      case "pumps":
        setActiveTab("pumps");
        break;
      case "vaccumProducts":
        setActiveTab("vaccumProducts");
        break;
      case "compressors":
        setActiveTab("compressors");
        break;
      case "waterManagement":
        setActiveTab("waterManagement");
        break;
      case "nitrogenGenerator":
        setActiveTab("nitrogenGenerator");
        break;
      default:
        setActiveTab("compressors");
        router.replace(`/products/compressors`);
        break;
    }
  }, [params.products]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // router.replace(`/products/${tab}`);
  };

  return (
    <div>
      <div className="lg:container lg:max-w-9xl mx-auto p-[1px] mt-10 overflow-hidden">
        <h5 className="text-center m-5 font-bold text-2xl">Our Products</h5>
        <ul className="lg:flex text-center items-center justify-center flex gap-1 w-full p-1 rounded-sm font-bold lg:font-semibold border border-gray-200">
          <li
            className={`cursor-pointer lg:py-2 border border-x-gray-300 p-[2px] lg:w-full rounded w-fit h-9 flex items-center justify-center text-xs lg:text-base ${
              activeTab === "compressors" ? "bg-[#bf1e2e] text-white" : ""
            }`}
          >
            <a
              href="/products/compressors"
              onClick={() => handleTabClick("compressors")}
            >
              Air Compressors
            </a>
          </li>
          <li
            className={`cursor-pointer py-2 text-xs lg:text-base border border-gray-300 p-1 lg:w-full rounded h-9 flex items-center justify-center ${
              activeTab === "nitrogenGenerator" ? "bg-[#bf1e2e] text-white" : ""
            }`}
          >
            <a
              href="/products/nitrogenGenerator"
              onClick={() => handleTabClick("nitrogenGenerator")}
            >
              Nitrogen Generator
            </a>
          </li>
          <li
            className={`cursor-pointer lg:py-2 text-xs lg:text-base border border-x-gray-300 p-1 lg:w-full rounded h-9 flex items-center justify-center ${
              activeTab === "vaccumProducts" ? "bg-[#bf1e2e] text-white" : ""
            }`}
          >
            <a
              href="/products/vaccumProducts"
              onClick={() => handleTabClick("vaccumProducts")}
            >
              Vaccum Products
            </a>
          </li>
          <li
            className={`cursor-pointer py-2 text-xs lg:text-base border border-gray-300 p-1 lg:w-full rounded h-9 flex items-center justify-center ${
              activeTab === "waterManagement" ? "bg-[#bf1e2e] text-white" : ""
            }`}
          >
            <a
              href="/products/waterManagement"
              onClick={() => handleTabClick("waterManagement")}
            >
              Water Management
            </a>
          </li>
          <li
            className={`cursor-pointer lg:py-2 text-xs lg:text-base border border-x-gray-300  lg:w-full rounded h-9 flex items-center justify-center ${
              activeTab === "pumps" ? "bg-[#bf1e2e] text-white " : ""
            }`}
          >
            <a
              href="/products/pumps"
              className="w-full h-full flex justify-center items-center"
              onClick={() => handleTabClick("pumps")}
            >
              Water Pumps
            </a>
          </li>
        </ul>
        <div>
          {activeTab === "compressors" && <Compressors activeTab={activeTab} />}
          {activeTab === "vaccumProducts" && (
            <VaccumProducts activeTab={activeTab} />
          )}
          {activeTab === "pumps" && <Pumps activeTab={activeTab} />}
          {activeTab === "waterManagement" && (
            <WaterManagement activeTab={activeTab} />
          )}
          {activeTab === "nitrogenGenerator" && (
            <NitrogenGenerator activeTab={activeTab} />
          )}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default Products;
