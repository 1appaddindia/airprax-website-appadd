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
          {bannerImages.map((img, index) => (
            <CarouselItem key={index}>
              <div className="w-full p-0">
                <img
                  src={img}
                  alt="img"
                  className="aspect-square max-h-screen"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banner;
