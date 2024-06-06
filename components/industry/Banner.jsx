import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "/components/ui/breadcrumb"


const Banner = () => {
  return (
      <>
      <div
        style={{
          backgroundImage: "url(/images/industry/banner.jpg)",
          backgroundRepeat: "no-repeat",
          width: "100%",
          position: "relative",
        }}
        className="bg-cover h-52 lg:h-[50vh]"
      >
        <div
        className="h-52 lg:h-[50vh]  lg:p-20 p-5 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
          }}
        >
  <div className="lg:flex lg:items-center lg:justify-between gap-10 w-full">
      <h4 className="text-white lg:text-start text-center">Industrial Solutions</h4>
      <div className="text-center flex items-center justify-center">
      <Breadcrumb >
  <BreadcrumbList>
    <BreadcrumbItem >
      <BreadcrumbLink href="/" className="text-white">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-white"/>
    {/* <BreadcrumbItem>
      <BreadcrumbLink href="/about" className="text-white">About</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator  className="text-white"/> */}
    <BreadcrumbItem>
      <BreadcrumbPage className="text-white">Industry</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
</div>
        </div>
      </div>
      </div>
      </>
  );
};

export default Banner;
