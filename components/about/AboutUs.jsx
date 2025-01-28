import React from "react";
import { aboutUsParagraph } from "../../utils/home/data";

const AboutUs = () => {
  return (
    <div className="bg-[#ffff] h-full lg:p-10">
      <div className="lg:container lg:max-w-9xl p-0 relative">
        <div className="text-center m-5">
          <h6>About Us</h6>
          <h1 className="lg:font-bold lg:text-4xl text-lg">
            Empowering Innovation, Transforming Communities.
          </h1>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between lg:w-full ">
          <img src="/images/aboutus.jpg" alt="img" className="lg:w-[60%]" />
          <div className="lg:p-10 p-2 ">
            <h1 className="font-bold  lg:text-start lg:text-2xl text-2xl text-[#083465] text-center">
              ABOUT OUR <span className="text-[#bf1e2e]">ORGANIZATION</span>
            </h1>
            <p className="lg:text-base text-sm text-black text-justify">
              {aboutUsParagraph[0]}
            </p>
            <p className="lg:text-base text-sm text-black text-justify">
              {aboutUsParagraph[1]}
            </p>
            <p className="lg:text-base text-sm text-black text-justify">
              {aboutUsParagraph[2]}
            </p>
          </div>
        </div>
        <div className=" p-2 ">
          <p>
            Please feel free to reach out at your convenience to set up a
            meeting. We look forward to potentially working together to drive
            operational excellence in your operations
          </p>
          <ul>
            <li>
              <strong>1. Atlas Copco Air Products:</strong> Air Compressors,
              Nitrogen Generators, Vacuum Pumps, Oxygen Generators, and Chillers
            </li>
            <li>
              <strong>2. Schrack Seconet:</strong> Fire Detection Systems,
              Integrated PA Systems
            </li>
            <li>
              <strong>3. Wilo Pumps:</strong> Fire Hydrant Pumps, Water Pumps,
              and Other Utility Pumps
            </li>
            <li>
              <strong>4. Utility and Gas Distribution Systems:</strong>
              Compressed Air, Chiller, Fire Hydrant Piping, and Other Utility
              Piping using Aluminium, SS, MS, GI, etc. (MOC)
            </li>
            <li>
              <strong>5. Other Turnkey Project Scope Works</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
