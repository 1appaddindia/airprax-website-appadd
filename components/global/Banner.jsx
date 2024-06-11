import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "/components/ui/breadcrumb";

// /images/banners/banner-contact-us-2.jpg

const Banner = ({ imageSrc, currentPage, previousPage, pageTitle }) => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
          width: "100%",
        }}
        className="bg-center lg:h-[50vh] h-52 bg-no-repeat relative z-10 bg-cover"
      >
        <div className="absolute top-0 left-0 w-full lg:h-[50vh] h-52 bg-black opacity-65 z-0 flex items-center justify-center lg:p-10 p-5">
          <div className="lg:flex lg:items-center lg:justify-between gap-10 w-full">
            <h4 className="text-white lg:text-start text-center">
              {pageTitle}
            </h4>
            <div className="text-center flex items-center justify-center ">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-white">
                      {previousPage}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="text-white" />
                  {/* <BreadcrumbItem>
      <BreadcrumbLink href="/about" className="text-white">About</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator  className="text-white"/> */}
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-white">
                      {currentPage}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
