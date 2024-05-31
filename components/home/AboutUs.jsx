import React from "react";
import { aboutUsParagraph } from "../../utils/home/data";

const AboutUs = () => {
  return (
    <div className="bg-[#ffff] h-full lg:p-10">
      <div className="lg:container lg:max-w-9xl p-0 relative">
        <div className="text-center mt-10 ">
          <h6>About Us</h6>
          <h1 className="lg:font-bold lg:text-4xl text-lg">
            Empowering Innovation, Transforming Communities.
          </h1>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between lg:w-full ">
          <img
            src="/images/aboutus.jpg"
            alt="img"
            className="lg:p-5   lg:w-[60%]"
          />
          <div className=" bg-[#ffff] shadow-2xl rounded-md p-10 lg:relative lg:right-16">
            <h1 className="font-bold  text-start lg:text-4xl text-2xl text-[#083465]">
              ABOUT OUR <span className="text-[#bf1e2e]">ORGANIZATION</span>
            </h1>
            <p className="lg:text-base text-sm text-black">
              Namaste from Us to You,
            </p>
            <p className="lg:text-base text-sm text-black">
              {aboutUsParagraph[0]}
            </p>
            <p className="lg:text-base text-sm text-black">
              {aboutUsParagraph[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
