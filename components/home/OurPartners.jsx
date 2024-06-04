"use client";

import * as React from "react";

import { CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ourPartners } from "../../utils/home/data";

const OurPartners = () => {
  return (
    <div className="bg-[#E5EBF1] ">
      <div className="flex items-center justify-center flex-col lg:p-5 lg:container lg:max-w-9xl">
        <div className="m-10">
          <h6 className="text-center">Our Partners</h6>
          <h1 className="font-bold  text-center lg:text-4xl text-lg">
            Empowering Success Together
          </h1>
        </div>
        <Carousel
          className=" max-w-[100%] m-5"
          plugins={[
            Autoplay({
              delay: 1000,
              pauseOnHover: true,
            }),
          ]}
        >
          <CarouselContent className="-ml-1 ">
            {ourPartners.map((img, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/1 lg:basis-1/4 h-[100%]"
              >
                <div className="p-0">
                  <CardContent className="flex  items-center justify-center ">
                    <img src={img} alt="img" className="lg:h-32 h-28 w-[100%]" />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default OurPartners;
