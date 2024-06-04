"use client";

import * as React from "react";

import { Card, CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "/components/ui/carousel";
import { testimonials } from "../../utils/home/data";
import { Avatar, AvatarImage } from "/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  return (
    <div className="bg-[#E5EBF1] p-5">
      <div className="text-center m-10">
        <h6>Customer Testimonials</h6>
        <h1 className="lg:text-4xl text-lg">Praise in Their Own Words</h1>
      </div>
      <div className="flex items-center justify-center overflow-hidden ">
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="lg:w-full lg:max-w-6xl lg:h-fit w-full "
        >
          <CarouselContent>
            {testimonials.map((testi, index) => (
              <CarouselItem key={index} className="lg:basis-1/4 ">
                <div className="p-1 w-full flex items-center justify-center">
                  <div className=" lg:py-3 py-4 lg:h-80 h-56 lg:w-full rounded-md w-[100%] shadow-2xl">
                    <div className=" flex flex-col lg:gap-2 items-center justify-center">
                      <Avatar className="lg:h-20 lg:w-20">
                        <AvatarImage src="/images/avatar/73-730477_first-name-profile-image-placeholder-png.png" />
                      </Avatar>
                      <h2 className="text-center lg:text-base text-sm font-bold  text-black">
                        {testi.name}
                      </h2>
                      <span>{testi.rating}</span>
                    </div>
                    <CardContent className="flex lg:text-center aspect-square justify-center lg:p-6 p-4">
                      <span className="lg:text-md text-center text-sm lg:mt-0 mt-2 h-fit ">
                        {testi.description}
                      </span>
                    </CardContent>
                  </div>
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

export default Testimonials;
