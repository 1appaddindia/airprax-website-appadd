"use client";
import Autoplay from "embla-carousel-autoplay";

import { CardContent } from "/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "/components/ui/carousel";
import Link from "next/link";
import { ourClientProjects } from "../../utils/our-projects/data";

const OurProjects = () => {
  return (
    <div className="bg-[#ffff]">
      <div className="flex items-center justify-between flex-col overflow-hidden container max-w-9xl mx-auto lg:p-10 p-3 lg:container lg:max-w-9xl">
        <div className="text-center lg:m-10 ">
          <h6>Our Projects</h6>
          <h1 className="text-lg lg:text-4xl">Embarking on Success</h1>
        </div>
        <div className="lg:flex lg:items-center lg:gap-10 lg:justify-evenly sm:flex w-full lg:m-0 lg:mt-7">
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
            className="w-full lg:max-w-2xl  lg:mt-5"
          >
            <CarouselContent>
              {ourClientProjects.map((img, index) => (
                <CarouselItem key={index} className="">
                  <div className="p-1 flex items-center justify-center">
                    <CardContent className="flex lg:aspect-square h-52 w-[100%]  lg:h-96 lg:w-full items-center justify-center ">
                      <img
                        src={img}
                        alt=""
                        className="lg:rounded-md"
                        style={{
                          height: "100%",
                          width: "100%",
                        }}
                      />
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
          <CarouselNext /> */}
          </Carousel>
          <div className="flex flex-col   ">
            <h1 className="font-bold text-xl text-start lg:text-4xl lg:text-start ">
              Project: PSA Nitrogen Generator Plant
            </h1>
            <p className="text-sm lg:text-base">
              Atlas Copco’s latest membrane and PSA generators extend the
              advantages of the current range. Total lifecycle cost consists of
              the initial investment cost of the on-site installation, the
              service cost, and the energy cost. The NGP/NGM range has the
              lowest investment cost. However, with increasing running time, you
              are better advised to switch to the NGP+/NGM+ range to reduce
              energy costs,The generator separates air into component gases by
              passing inexpensive compressed air through semipermeable membranes
              consisting of bundles of individual hollow fibers.
            </p>
            <Link href="/products?tab=nitrogenGenerator">
              <button className="button text-white m-1 w-[90px] h-8 rounded-md font-bold hover:bg-[#018CB5] mt-5 hover:text-white hover:border-none hover:transform transition-transform duration-300 ease-in-out hover:scale-105 text-sm">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
