import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "/components/ui/breadcrumb"

export function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/banners/banner-gallery.jpg)",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="bg-cover relative bg-no-repeat lg:h-[50vh] h-52 bg-center"
    >
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        className="absolute top-0 left-0 lg:h-[50vh] h-52 w-full flex items-center justify-center lg:p-10 p-5"
      >
          <div className="lg:flex lg:items-center lg:justify-between gap-10 w-full">
      <h4 className="text-white lg:text-start text-center">Gallery</h4>
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
      <BreadcrumbPage className="text-white">Gallery</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
</div>
        </div>
      </div>
    </div>
  );
}
