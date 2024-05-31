"use client";

import React from "react";
import { rawWaterIntake } from "../../../../utils/products/water-management/raw-water-intake/data";
import ProductCard from "../../../../components/products/water-management/ProductCard";

const Products = () => {
  
  const subcategory = "raw-water-intake";

  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Raw water intake</h6>
          <h1>
            Raw water intake and pumping: with minimum energy costs to maximum
            security of supply
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {rawWaterIntake.map((item) => (
            <ProductCard item={item} subcategory={subcategory} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
