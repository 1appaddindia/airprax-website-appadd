import React from "react";
import { ourApproach } from "../../utils/home/data";
import { Card, CardContent, CardHeader } from "/components/ui/card";

const OurApproach = () => {
  return (
    <div className="bg-[#E5EBF1]">
      <div className="lg:container lg:max-w-7xl mx-auto lg:p-10 p-2 ">
        <div className="text-center lg:m-10 m-2">
          <h6>Our Approach</h6>
          <h1 className="lg:text-4xl text-lg">
            Harness the Potential of Pneumatics Industry
          </h1>
        </div>

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
                    <p className="text-lg relative right-5 font-bold leading-none flex items-center gap-2">
                      <img src={img.icon} alt="" height={30} width={30} />
                      {img.heading}
                    </p>
                    <p className="text-sm text-muted-foreground text-justify">{img.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
