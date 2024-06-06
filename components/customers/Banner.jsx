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
      className="w-full lg:h-[50vh] h-52 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/images/banners/banner-customers-1600x775.jpg)",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        className="flex items-center justify-center lg:p-10 p-5"
      >
          <div className="lg:flex lg:items-center lg:justify-between gap-10 w-full">
      <h4 className="text-white lg:text-start text-center">Customers</h4>
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
      <BreadcrumbPage className="text-white">Customers</BreadcrumbPage>
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
