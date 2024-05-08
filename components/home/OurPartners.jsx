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
    <>
      <div className="flex items-center justify-center flex-col p-10 ">
        <div className="mt-10">
          <h6 className="text-center">Our Partners</h6>
          <h1 className="font-bold  text-center lg:text-4xl text-lg">
            Empowering Success Together
          </h1>
        </div>
        <Carousel
          className=" max-w-[90%] mt-14"
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
                className="pl-1 md:basis-1/2 lg:basis-1/4 h-[100%]"
              >
                <div className="p-0">
                  <CardContent className="flex  items-center justify-center ">
                    <img src={img} alt="img" className="h-20 w-[70%]" />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </>
  );
};

export default OurPartners;
