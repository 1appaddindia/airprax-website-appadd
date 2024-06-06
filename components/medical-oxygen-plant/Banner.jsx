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
    <div
      style={{
        backgroundImage: "url(/images/banners/lava-6-r2-1560x792.png)",
      }}
      className="relative inset-0 bg-center bg-cover lg:h-[50vh] h-52"
    >
      <div className="absolute inset-0 bg-black opacity-80 lg:h-[50vh] h-52 w-full flex items-center justify-center lg:p-10 p-5">
      <div className="lg:flex lg:items-center lg:justify-between gap-10 w-full">
      <h4 className="text-white lg:text-start text-center ">Medical Oxygen Plant</h4>
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
      <BreadcrumbPage className="text-white">Medical Oxygen Plant</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
