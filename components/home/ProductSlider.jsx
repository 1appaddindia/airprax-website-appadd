"use client";

import { products } from "../../utils/products/data";

import { CardContent } from "/components/ui/card";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProductSlider = () => {
  return (
    <div>
      <Carousel
        className=" lg:max-w-[100%]"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {products.map((img, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4 h-[100%]"
            >
              <div className="p-1">
                {/* <CardContent className="flex  items-center justify-center"> */}
                <img
                  src={img.img}
                  alt=""
                  className="aspect-square h-[30%] w-[40%] shadow-2xl z-10"
                />
                {/* </CardContent> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
