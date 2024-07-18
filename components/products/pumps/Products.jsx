import React from "react";
import ProductCard from "../ProductCard";
import { products } from "../../../utils/products/pumps/data";

const Pumps = ({ activeTab }) => {
  return (
    <div className="lg:container lg:p-0 p-2 lg:max-w-9xl">
      <div className="text-center lg:mt-10 mt-3 ">
        <h6>Pumps</h6>
        <h1>
          Powering Buildings, Water Systems, and Treatment Facilities with
          Industrial-Grade Pumps for Maximum Efficiency and Reliability.
        </h1>
      </div>

      <div className="grid lg:grid-cols-12  lg:gap-5 gap-5 lg:p-5 lg:mt-10 mt-3 w-full">
        {products.map((item) => (
          <ProductCard item={item} activeTab={activeTab} />
        ))}
      </div>
    </div>
  );
};

export default Pumps;
