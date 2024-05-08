// import { aboutUsParagraph } from "@/utils/home/data";
import React from "react";
import { aboutUsParagraph } from "../../utils/home/data";

const AboutUs = () => {
  return (
    <div className="container max-w-9xl p-0 ">
      <div className="text-center mt-10 ">
        <h6>About Us</h6>
        <h1 className="lg:font-bold lg:text-4xl text-lg">
          Empowering Innovation, Transforming Communities.
        </h1>
      </div>
      <div className="flex flex-col items-center w-full justify-evenly lg:flex-row lg:px-20">
        <div className="lg:w-[50%] h-[100%] p-2 flex items-center justify-center ">
          <img
            src="/images/aboutus.jpg"
            alt=""
            className="lg:p-5 lg:w-[90%] "
          />
        </div>
        <div className="lg:p-2 lg:w-[50%] p-5">
          <h1 className="font-bold  text-start lg:text-4xl text-2xl">
            ABOUT OUR ORGANIZATION
          </h1>
          <p className="lg:text-base text-sm">Namaste from Us to You,</p>
          <p className="lg:text-base text-sm">{aboutUsParagraph[0]}</p>
          <p className="lg:text-base text-sm">{aboutUsParagraph[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
