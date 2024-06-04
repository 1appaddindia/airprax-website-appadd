"use client";

// import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "/components/ui/carousel";
import { galleryImages } from "../../utils/home/data";

const OurTeam = () => {
  return (
    <div className="bg-[#ffff]">
      <div className="flex items-center justify-between flex-col overflow-hidden lg:container lg:max-w-9xl  lg:mx-auto  lg:p-10 p-2">
        <div className="text-center lg:m-10 m-2">
          <h6>Meet Our Team</h6>
          <h1 className="font-bold lg:text-4xl text-sm">
            Introducing Our Team: Driving Innovation in Pneumatics
          </h1>
        </div>
        <div className="lg:flex lg:items-center lg:gap-10 lg:justify-evenly sm:flex w-full lg:m-0 lg:mt-7">
          <div className="flex flex-col items-center justify-center  ">
            <h1 className="font-bold lg:text-start lg:text-4xl text-lg">
              Meet our pioneering
              <span className="text-[#bf1e2e]"> pneumatic innovators</span>
            </h1>
            <p className="text-sm lg:text-base">
              Meet the exceptional minds propelling our pneumatics innovation
              forward. With a blend of expertise, creativity, and relentless
              drive, our team is committed to shaping the future of industry.
              Together, we're revolutionizing pneumatic solutions, delivering
              excellence, and empowering our clients with cutting-edge
              technology and unparalleled service.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-2xl mt-5"
          >
            <CarouselContent>
              {galleryImages.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/2 "
                >
                  <div className="p-1 flex items-center justify-center">
                    <CardContent className=" aspect-video w-full h-56 items-center justify-center ">
                      <img src={img} alt="" className="h-[100%] w-[100%] " />
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
    </div>
  );
};

export default OurTeam;
