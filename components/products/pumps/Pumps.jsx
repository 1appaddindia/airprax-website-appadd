import React from "react";
import ProductCard from "../../products/ProductCard";
import { pumps } from "../../../utils/products/pumps/data";

const Pumps = ({ activeTab }) => {
  return (
    <div className="lg:container lg:p-0 p-2 lg:max-w-9xl">
      <div className="text-center lg:mt-10 mt-3 ">
        <h6 className="font-bold text-xl">Pumps</h6>
        <h1 className="lg:text-3xl text-base lg:text-center text-center">
          Industrial-grade solutions for buildings, water supply, and treatment,
          ensuring efficiency and reliability.
        </h1>
      </div>

      <div className="grid grid-cols-12  lg:gap-5 gap-5 lg:p-5 lg:m-0 mt-2 w-full">
        {pumps.map((item) => (
          <ProductCard item={item} activeTab={activeTab} />
        ))}
      </div>
    </div>
  );
};

export default Pumps;
