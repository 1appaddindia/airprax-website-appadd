"use client";

import React from "react";
import { ourProducts } from "../../utils/home/data";

import Link from "next/link";

const OurProducts = () => {
  return (
    <div className="bg-[#e5ebf1] ">
      <div className="p-6 ">
        <h6 className="text-center m-1">Our Products</h6>
        <h1 className="text-center font-bold lg:text-4xl text-lg ">
          Empowering Industry, One Gear at a Time
        </h1>
      </div>
      <div className="lg:container lg:max-w-9xl lg:p-5">
        <div className="lg:w-full flex items-center justify-center">
          <div className="lg:grid lg:grid-cols-5 lg:gap-3 grid grid-cols-1  p-2  ">
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
                    <p className="font-bold">{category.category}</p>
                    <p className="lg:text-base text-sm mb-2">
                      {category.title.length < 90
                        ? category.title
                        : `${category.title.slice(0, 90)}...`}
                    </p>
                    <Link
                      href={category.href}
                      className="text-[#bf1e2e] font-bold"
                    >
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full lg:max-w-2xl "
            >
              <CarouselContent>
                {products.map((img, index) => (
                  <CarouselItem key={index} className="p-10">
                    <div className="p-1 flex items-center justify-center shadow-2xl rounded-md bg-white  border w-full h-full border-black">
                      <CardContent className="flex  w-[100%]  lg:h-56 lg:w-full  items-center justify-center ">
                        <img
                          src={img.img}
                          alt="img"
                          className="lg:rounded-md p-5"
                          style={{
                            height: "100%",
                            width: "100%",
                          }}
                        />
                      </CardContent>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
