"use client";

import * as React from "react";

import { Card, CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "/components/ui/carousel";
import { testimonials } from "../../utils/home/data";
import { Avatar, AvatarImage } from "/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  return (
    <>
      <div className="text-center lg:m-10 p-10">
        <h6>Customer Testimonials</h6>
        <h1>Praise in Their Own Words</h1>
      </div>
      <div className="flex items-center justify-center overflow-hidden">
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
              <CarouselItem key={index} className="lg:basis-1/3 ">
                <div className="p-1 w-full flex items-center justify-center">
                  <Card className=" lg:py-10 py-4 lg:h-80 h-56 lg:w-full  w-[80%] border border-[#018CB5]">
                    <div className=" flex flex-col lg:gap-2 items-center justify-center">
                      <Avatar className="lg:h-20 lg:w-20">
                        <AvatarImage src="/images/avatar/73-730477_first-name-profile-image-placeholder-png.png" />
                        {/* <AvatarFallback>CN</AvatarFallback> */}
                      </Avatar>
                      <h2 className="text-center font-bold ">{testi.name}</h2>
                      <span>{testi.rating}</span>
                    </div>
                    <CardContent className="flex lg:text-center aspect-square justify-center lg:p-6 ">
                      <span className="lg:text-md text-sm text-center lg:mt-0 mt-2 h-fit">
                        {testi.description}
                      </span>
                    </CardContent>
                  </Card>
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

export default Testimonials;
