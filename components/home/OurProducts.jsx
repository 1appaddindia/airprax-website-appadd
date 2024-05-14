"use client";

import React from "react";
import { ourProducts } from "../../utils/home/data";

import Link from "next/link";
// import { products } from "../../utils/products/data";
// import Autoplay from "embla-carousel-autoplay";

// import { CardContent } from "/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "/components/ui/carousel";

const OurProducts = () => {
  return (
    <div className="bg-[#F1FAFA] lg:p-10 ">
      <div className=" container max-w-9xl ">
        <div className="lg:m-10 m-3">
          <h6 className="text-center">Our Products</h6>
          <h1 className="text-center font-bold lg:text-4xl text-lg">
            Empowering Industry, One Gear at a Time
          </h1>
        </div>
        <div className="lg:w-full flex items-center justify-center">
          <div className="lg:grid lg:grid-cols-3 lg:gap-10 grid grid-cols-1  p-2 w-full">
            {ourProducts.map((category) => (
              <div key={category.id}>
                <div key={category.id} className="flex flex-col">
                  <img
                    src={category.img}
                    alt="img"
                    className="lg:h-60 h-52 transform transition-transform duration-500 ease-in-out hover:scale-105 lg:w-[100%] sm:h-20 sm:w-20 "
                  />
                  <div className="shadow-2xl bg-white m-3 p-7 relative bottom-10">
                    <p className="font-bold mb-5">{category.category}</p>
                    <p className="lg:text-base text-sm mb-2">
                      {category.title.length < 100
                        ? category.title
                        : `${category.title.slice(0, 100)}...`}
                    </p>
                    <Link
                      href={category.href}
                      className="text-[#EC1F52] font-bold"
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
