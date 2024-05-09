"use client";
import React from "react";
import { waterManagement } from "../../../utils/products/water-management/data";


const Products = () => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Water Management</h6>
          <h1>
            Solutions configured for your industry: Efficient and reliable
            solutions for industrial buildings, water supply and water treatment
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {waterManagement.map((item, id) => (
            <div
              key={id}
              className="grid col-span-6 w-full lg:col-span-3 lg:p-10 items-center justify-center border border-[#69C7D0] lg:w-[100%] rounded-md  hover:transform hover:scale-105 transition-transform ease-in-out duration-500"
            >
              <span className="flex items-center mb-3 font-bold">
                {item.title}
              </span>
              <img src={item.img} alt="img" className="h-52 " />
              <button className="mt-3 text-[#000000] hover:bg-[#69C7D0] hover:text-white font-bold border border-[#69C7D0] p-2 rounded-md">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
