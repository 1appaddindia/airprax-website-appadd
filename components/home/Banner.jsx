"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "/components/ui/carousel";
import React from "react";
import { bannerImages } from "../../utils/home/data";

const Banner = () => {
  return (
    <div className="">
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
        className="w-full"
      >
        <CarouselContent>
          {/* {.map((img, index) => ( */}
          <CarouselItem>
            <div className="w-full p-0">
              <img
                src="/images/banners/WhatsApp Image 2024-05-14 at 1.10.55 PM.jpeg"
                alt="img"
                className=" max-h-screen"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </CarouselItem>
          {/* ))} */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banner;
