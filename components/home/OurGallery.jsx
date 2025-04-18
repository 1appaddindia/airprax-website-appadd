"use client";

import * as React from "react";

import { CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { galleryImages } from "../../utils/home/data";

const OurGallery = () => {
  return (
    <div className="bg-[#ffff]">
      <div className="flex items-center justify-center flex-col lg:container lg:max-w-9xl lg:p-5">
        <div className="lg:m-10 mt-10">
          <h6 className="text-center">Our Gallery</h6>
          <h1 className="font-bold  text-center  lg:text-4xl text-base">
            Our Gallery, Where Every Brushstroke Tells a Story.
          </h1>
        </div>
        <Carousel
          className=" lg:max-w-[100%]"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {galleryImages.map((img, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/4 h-[100%]"
              >
                <div className="p-1">
                  <CardContent className="flex mt-5 aspect-video items-center justify-center">
                    <img src={img} alt="" className="h-[95%] w-[100%]  z-10" />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default OurGallery;
