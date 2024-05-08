import React from "react";
import {
  rawWaterIntake,
  waterManagement,
} from "../../../utils/products/industry/data";

const Products = () => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h1>Products</h1>
        </div>

        {waterManagement.map((item, id) => (
          <>
            <div className="text-center mt-10">
              <h6>{item.category}</h6>
              <h2>{item.heading}</h2>
            </div>
            <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
              {item.products.map((item, id) => (
                <div
                  key={id}
                  className="grid col-span-6 w-full lg:col-span-3 lg:p-10 items-center justify-center border border-[#69C7D0] lg:w-[100%] rounded-md  hover:transform hover:scale-105 transition-transform ease-in-out duration-500"
                >
                  <img src={item.img} alt="img" className="h-52 " />
                  <span className="flex items-center justify-center mt-5">
                    {item.title}
                  </span>
                  <button className="mt-3 text-[#69C7D0] font-bold">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
