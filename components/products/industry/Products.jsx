"use client";

import React, { useState } from "react";
import { industry } from "../../../utils/products/industry/data";

const Products = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = industry.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(industry.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
          {currentProducts.map((item, id) => (
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
        <div className="flex justify-center mt-5">
          <button
            className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
            onClick={goToPreviousPage}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
            onClick={goToNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
