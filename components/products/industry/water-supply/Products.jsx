import React from "react";
import { waterSupply } from "../../../../utils/products/industry/data";
import ProductCard from "../../ProductCard";

const Products = () => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Water supply</h6>
          <h1>Everything for your water supply and clean water treatment</h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {waterSupply.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
