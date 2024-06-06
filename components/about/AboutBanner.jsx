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
    <div className="relative lg:h-[50vh] h-52 w-full bg-cover  bg-no-repeat"
    style={{backgroundImage:"url(/images/banners/Downpic.cc-1312743082.jpg)",backgroundPosition:"center",objectFit:"cover"}}
    >
      <div className="lg:h-[50vh] h-52 absolute w-full top-0 left-0 flex items-center justify-center lg:p-10 p-5" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
      <div className="lg:flex lg:items-center lg:justify-between gap-10 w-full">
      <h4 className="text-white lg:text-start text-center">About</h4>
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
      <BreadcrumbPage className="text-white">About</BreadcrumbPage>
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
