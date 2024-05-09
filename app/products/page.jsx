"use client";

import React, { useState } from "react";
import VaccumProducts from "../../components/products/vaccum-solutions/Products";
import Compressors from "../../components/products/compressors/Products";
import Banner from "../../components/products/Banner";
import Products from "../../components/products/Products";
import Industry from "../../components/products/industry/Products";
import WaterManagement from "../../components/products/water-management/Products";

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("products");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" min-h-screen w-full">
      <Banner />
      <div className="lg:container p-1 lg:max-w-9xl mx-auto mt-10 overflow-hidden">
        <h5 className="text-center m-5 font-bold text-2xl">Our Products</h5>
        <ul className="lg:flex lg:mb-4 items-center justify-center flex gap-1  w-full p-1 rounded-sm font-bold lg:font-semibold border border-gray-200">
          <li
            className={`lg:mr-6 cursor-pointer lg:py-2 lg:px-4 text-xs lg:text-base border border-x-gray-300 p-1 lg:w-full  rounded  h-9 flex items-center justify-center  ${
              activeTab === "products"
                ? "lg:border-b-2  lg:border-red-500 "
                : ""
            }`}
            onClick={() => handleTabClick("products")}
          >
            Pumps
          </li>
          <li
            className={`lg:mr-6 cursor-pointer lg:py-2 lg:px-4 text-xs lg:text-base border border-x-gray-300 p-1 lg:w-full rounded  h-9 flex items-center justify-center  ${
              activeTab === "vaccumProducts"
                ? "lg:border-b-2 lg:border-red-500  "
                : ""
            }`}
            onClick={() => handleTabClick("vaccumProducts")}
          >
            Vaccum Products
          </li>
          <li
            className={`lg:mr-6 cursor-pointer lg:py-2 lg:px-4  border border-x-gray-300 p-1 lg:w-full rounded w-full h-9 flex items-center justify-center text-xs lg:text-base  ${
              activeTab === "compressors"
                ? "lg:border-b-2 lg:border-red-500  "
                : ""
            }`}
            onClick={() => handleTabClick("compressors")}
          >
            Compressors
          </li>
          <li
            className={`lg:mr-6 cursor-pointer lg:py-2 lg:px-4  border border-gray-300 p-1 lg:w-full rounded w-full h-9 flex items-center justify-center text-xs lg:text-base  ${
              activeTab === "industry"
                ? "lg:border-b-2 lg:border-red-500  "
                : ""
            }`}
            onClick={() => handleTabClick("industry")}
          >
            Industry
          </li>
          <li
            className={`cursor-pointer py-2 lg:px-4 text-xs lg:text-base  border border-gray-300 p-1 lg:w-full rounded  h-9 flex items-center justify-center  ${
              activeTab === "waterManagement"
                ? "lg:border-b-2 lg:border-red-500  "
                : ""
            }`}
            onClick={() => handleTabClick("waterManagement")}
          >
            Water Management
          </li>
        </ul>

        <div>
          {activeTab === "products" && <Products />}
          {activeTab === "vaccumProducts" && <VaccumProducts />}
          {activeTab === "compressors" && <Compressors />}
          {activeTab === "industry" && <Industry />}
          {activeTab === "waterManagement" && <WaterManagement />}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
