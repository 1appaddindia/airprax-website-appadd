"use client";
import Link from "next/link";
import React from "react";
import { convertSpecialCharacters } from "../../utils/filteration";

const ProductCard = ({ item, activeTab }) => {
  return (
    <div
      key={item.id}
      className="col-span-6 lg:col-span-3 lg:w-full h-full w-full flex flex-col items-center justify-end border border-[#072E57] rounded-md hover:shadow-2xl transition-shadow duration-500"
    >
      <span className="flex items-center justify-center lg:mb-6 font-bold p-4 text-sm lg:text-base lg:w-[100%] w-[100%] ">
        {item.title}
      </span>
      <img src={item.img} alt={item.title} className="lg:h-52 h-32 " />
      <div className="text-center  w-full p-2">
        <a
          href={`/products/${activeTab}/${convertSpecialCharacters(
            item.title
          ).toLowerCase()}`}
        >
          <button className="text-[#ffff] hover:text-[#083465] border-none bg-[#bf1e2e] flex items-center justify-center lg:mt-10 p-1  font-bold w-full rounded-md transition-colors duration-300 ">
            View Details
            <img
              src="/images/flaticons/right-down.png"
              alt=""
              className="h-8 w-8"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
