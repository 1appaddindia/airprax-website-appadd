"use client";
import React from "react";
import { industry } from "../../../utils/products/industry/data";
import ProductCard from "../ProductCard";

const Products = ({ activeTab }) => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Industry</h6>
          <h1>
            Solutions configured for your industry: Efficient and reliable
            solutions for industrial buildings, water supply and water treatment
          </h1>
        </div>
        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {industry.map((item) => (
            <ProductCard item={item} activeTab={activeTab} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
