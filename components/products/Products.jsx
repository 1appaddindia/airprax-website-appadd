import React from "react";
import { products } from "../../utils/products/data";

const ProductsPage = () => {
  return (
    <div className="lg:container lg:p-0 p-2 lg:max-w-9xl">
      <div className="text-center lg:mt-10 mt-3 ">
        <h6>Pumps</h6>
        <h1 className="lg:text-4xl text-base lg:text-center text-start">
          Industrial-grade solutions for buildings, water supply, and treatment,
          ensuring efficiency and reliability.
        </h1>
      </div>

      <div className="grid grid-cols-12  lg:gap-5 gap-5 lg:p-5 lg:m-0 mt-2 w-full">
        {products.map((item, id) => (
          <div
            key={id}
            className="col-span-6 lg:col-span-3 lg:w-full h-full w-full flex flex-col items-center justify-center border border-[#69C7D0] rounded-md hover:shadow-2xl transition-shadow duration-500"
          >
            <span className="flex items-center justify-center lg:mb-6 font-bold p-4 text-sm lg:text-base lg:w-[100%] w-[100%] ">
              {item.title}
            </span>
            <img src={item.img} alt="img" className="lg:h-52 h-32 " />
            <button className="text-[#000000] hover:bg-[#69C7D0] hover:text-white lg:mt-10 p-1  font-bold border border-[#69C7D0] lg:p-2  lg:w-full w-full rounded-md transition-colors duration-300 ">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
