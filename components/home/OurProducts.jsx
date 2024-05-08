import React from "react";
import { ourProducts } from "../../utils/home/data";

import { Button } from "/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";

const OurProducts = () => {
  return (
    <div className="py-10 container max-w-9xl p-0">
      <div className="m-10">
        <h6 className="text-center">Our Products</h6>
        <h1 className="text-center font-bold lg:text-4xl text-lg">
          Empowering Industry, One Gear at a Time
        </h1>
      </div>
      <div className="lg:w-full flex items-center justify-center">
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 grid grid-cols-1 gap-4 p-2 w-[95%]">
          {ourProducts.map((category) => (
            <div key={category.id}>
              <Card className=" transform transition-transform duration-500 ease-in-out hover:scale-105 border border-[#018CB5] lg:h-full lg:w-full ">
                <CardHeader>
                  <CardTitle className="text-sm lg:text-lg">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="">
                    {category.products.map((product) => (
                      <div key={product.id} className=" items-center">
                        <img
                          src={product.img}
                          alt="img"
                          className="aspect-video lg:h-[100%] lg:w-[100%] sm:h-20 sm:w-20 rounded-md "
                        />
                        <p className="lg:text-base text-sm">{product.title}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button className="button hover:bg-[#018CB5] lg:h-full lg:w-full ">
                    View More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
