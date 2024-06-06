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
          backgroundImage: "url(/images/banners/global-technology-earth-news-bulletin-background_1017-33687.png)",
          width: "100%",
        }}
        className="bg-cover relative bg-no-repeat bg-top lg:h-[50vh]  h-52"
      >
        <div
          className="lg:h-[50vh] h-52 flex items-center justify-center lg:p-10 p-5"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
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
  );
};

export default Banner;
