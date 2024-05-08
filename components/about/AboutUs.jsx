import React from "react";
import { aboutUsParagraph } from "../../utils/home/data";

const AboutUs = () => {
  return (
    <>
      <div className="text-center m-10">
        <h6>About Us</h6>
        <h1>Empowering Innovation, Transforming Communities.</h1>
      </div>
      <div className="flex flex-col items-center w-full justify-evenly lg:flex-row lg:px-20 container max-w-9xl mx-auto ">
        <div className="lg:w-[50%] h-[100%] flex items-center justify-center ">
          <img
            src="/images/aboutus.jpg"
            alt=""
            className="lg:p-5 lg:w-[90%] shadow-lg"
          />
        </div>  
        <div className="lg:p-2 lg:w-[50%] text-sm lg:text-base ">
          <h1 className="font-bold lg:text-4xl mt-2 text-xl text-start">
            ABOUT OUR ORGANIZATION
          </h1>
          <p>Namaste from Us to You,</p>
          <p>{aboutUsParagraph[0]}</p>
          <p>{aboutUsParagraph[1]}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
