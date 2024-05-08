import React from "react";
import { ourApproach } from "../../utils/home/data";
import { Card, CardContent, CardFooter, CardHeader } from "/components/ui/card";
// import { cn } from "/lib/utils";

const OurApproach = () => {
  return (
    <div className="container max-w-7xl mx-auto p-10 mt-10">
      <div className="text-center m-10">
        <h6>Our Approach</h6>
        <h1>Harness the Potential of Pneumatics Industry</h1>
      </div>

      {/* <div className="lg:w-full lg:flex lg:items-center lg:justify-center border-2"> */}
      <div className="lg:grid lg:grid-cols-12  w-full gap-10 container max-w-7xl mx-auto p-2">
        {ourApproach.map((img, index) => (
          <Card
            key={index}
            className="w-full col-span-4 mt-3 border border-[#018CB5]"
          >
            <CardHeader>
              <img src={img.img} alt="img" className="lg:h-52 w-full " />
            </CardHeader>
            <CardContent>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex" />
                <div className="space-y-1">
                  <p className="text-lg font-bold leading-none">
                    {img.heading}
                  </p>
                  <p className="text-sm text-muted-foreground">{img.title}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {/* <Button className="w-full ">
                  <Check className="mr-2 h-4 w-4" /> Read More
                </Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default OurApproach;
