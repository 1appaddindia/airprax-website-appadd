"use client";

import React from "react";
import { ourProducts } from "../../utils/home/data";

import Link from "next/link";

const OurProducts = () => {
  return (
    <div className="bg-[#e5ebf1] lg:p-10 p-2 mt-10">
      <div className="m-5 text-center">
        <h6>Our Products</h6>
        <h1 className="lg:text-4xl text-xl ">
          Empowering Industry, One Gear at a Time
        </h1>
      </div>
      <div className="lg:container lg:max-w-9xl lg:p-5">
        <div className="lg:w-full flex items-center justify-center">
          <div className="lg:grid lg:grid-cols-5 lg:gap-3 grid grid-cols-1 gap-2 lg:p-2  ">
            {ourProducts.map((category) => (
              <div
                key={category.id}
                className="lg:transform lg:transition-transform lg:duration-500 lg:ease-in-out lg:hover:scale-105 "
              >
                <div key={category.id} className="flex flex-col rounded-md p-1">
                  <img
                    src={category.img}
                    alt="img"
                    className="lg:h-52 h-52 rounded-t-md lg:w-[100%] sm:h-20 sm:w-20 "
                  />
                  <div className="shadow-2xl bg-white rounded-b-md p-3 ">
                    <p className="font-bold text-[#bf1e2e]">{category.category}</p>
                    <p className="lg:text-base text-sm mb-2">
                      {category.title.length < 90
                        ? category.title
                        : `${category.title.slice(0, 90)}...`}
                    </p>
                    <a
                      href={category.href}
                      className="text-[#bf1e2e] font-bold lg:flex lg:items-center lg:justify-start flex items-center justify-center m-2"
                    >
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
