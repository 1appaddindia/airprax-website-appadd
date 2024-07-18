"use client";

import * as React from "react";

import { CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ourClientProjects } from "../../utils/our-projects/data";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const FeaturedClientProjects = () => {
  return (
    <div className="h-full bg-[#ffff]">
      <div className="lg:m-14 m-8">
        <h6 className="text-center">Featured Client Projects</h6>
        <h1 className="text-center font-bold lg:text-4xl text-xl">
          Where Innovation Meets Execution
        </h1>
      </div>
      <div
        style={{
          position: "relative",
          height: "70vh",
          width: "100%",
          backgroundImage: "url(/images/products/65f5707efa19be5b559c84c4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="lg:flex lg:flex-row lg:items-center flex flex-col"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        ></div>
        <div className="relative lg:top-28 lg:right-64 text-center top-24 ">
          <h6 className="text-white lg:text-start text-center ">Our Project</h6>
          <h2 className="text-white font-bold lg:text-4xl text-2xl">
            PSA Nitrogen Generator Plant
          </h2>
        </div>
        <div className="lg:flex lg:flex-row flex flex-col lg:m-0 m-3 lg:container lg:max-w-9xl bg-white lg:relative  lg:top-56 relative top-40 lg:w-[80%] items-center justify-center shadow-2xl p-3 ">
          <Carousel
            style={{ backgroundColor: "white" }}
            className="lg:max-w-[50%] w-full"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {ourClientProjects.map((img, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/1 lg:basis-1/1 "
                >
                  <div className="p-1 flex mt-5 items-center justify-center">
                    <CardContent>
                      <img
                        src={img}
                        alt="img"
                        className="lg:h-96 h-40  lg:w-full z-10 lg:object-fill"
                      />
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="bg-gray-100 flex flex-col items-start justify-center lg:p-10 w-full p-4 ">
            <h3 className="font-bold text-[#bf1e2e] lg:text-base text-sm ">
              CUSTOMER
            </h3>
            <span className="lg:text-base text-xs">
              Hypo Tech (Lakshmi Engineering pvt Limited)
            </span>
            <br />
            <h3 className="font-bold text-[#bf1e2e] lg:text-base text-sm ">
              PROJECT CATEGORY
            </h3>
            <span className="lg:text-base text-xs">
              Laser Cutting Operation
            </span>
            <br />
            <h3 className="font-bold text-[#bf1e2e] lg:text-base text-sm ">
              COMPLETED
            </h3>
            <span className="lg:text-base text-xs gap-1 flex items-center ">
              <CalendarDays size={15} />
              Jun 15, 2021
            </span>
            <br />
            <h3 className="font-bold text-[#bf1e2e] lg:text-base text-sm ">
              PROJECT BUDGET
            </h3>
            <span className="lg:text-base text-xs">Rs.60,00,000</span>
            <a
              href="/products?tab=nitrogenGenerator"
              className="mt-5 text-[#bf1e2e] font-bold hover:text-[#072E57]"
            >
              View Project...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClientProjects;
