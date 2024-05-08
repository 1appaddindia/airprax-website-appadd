import React from "react";
import { products } from "../../../utils/products/data";

const ProductsPage = () => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Products</h6>
          <h1>
            Industrial-grade solutions for buildings, water supply, and
            treatment, ensuring efficiency and reliability.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {products.map((item, id) => (
            <div
              key={id}
              className="grid col-span-6 w-full lg:col-span-3 lg:p-10 items-center justify-center border border-[#69C7D0] lg:w-[100%] rounded-md hover:shadow-2xl transition-shadow duration-500"
            >
              <span className="flex items-center mb-3 font-bold">
                {item.title}
              </span>
              <img src={item.img} alt="img" className="h-52 " />
              <button className="mt-3 text-[#000000] hover:bg-[#69C7D0] hover:text-white font-bold border border-[#69C7D0] p-2 rounded-md transition-colors duration-300">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
