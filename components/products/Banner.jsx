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
      className="bg-cover bg-no-repeat lg:h-[50vh] h-48 w-full overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/banners/Downpic.cc-1274417553.jpg)",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        className="absolute lg:h-[50vh] h-48 top-0 left-0 w-full flex items-center justify-between lg:p-20 p-5"
      >
        <h4 className="text-white">Products</h4>
          <Breadcrumb >
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/" className="text-white">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator className="text-white"/>
    {/* <BreadcrumbItem>
      <BreadcrumbLink href="/about" className="text-white">About</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator  className="text-white"/> */}
    <BreadcrumbItem>
      <BreadcrumbPage className="text-white">Products</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
      </div>
    </div>
  );
};

export default Banner;
