import Link from "next/link";
import React from "react";

const Subscribe = () => {
  return (
    <div className="flex  items-center justify-between  h-full">
      <div
        className="relative lg:h-[60vh] h-full w-full"
        style={{
          backgroundImage:
            "url(/images/products/iAKRCB775DUw-pfkMIAlS-transformed.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 ">
          <div
            className="absolute inset-0 bg-black opacity-80"
            style={{ zIndex: 1 }}
          ></div>
        </div>
        <div className="flex lg:justify-between  lg:h-full ">
          <div className="h-[60vh] w-full  lg:block hidden  z-10">
            <img
              src="/images/products/2BoYiYVsWRnpo5wcGbW89-transformed.jpeg"
              alt=""
              className="h-full  "
            />
          </div>
        </div>
        <div className="z-10 lg:relative lg:container">
          <div className="z-10 flex flex-col justify-center lg:absolute lg:right-32 lg:bottom-36 lg:p-0 p-10 h-fit text-center">
            <h3 className="text-white lg:text-3xl font-bold z-10 ">
              Subscribe For Newsletter
            </h3>
            <p className="text-white lg:text-xl z-10">
              We do not spam and your email-id would be stored securely.
            </p>
            <div className="lg:flex lg:flex-row flex flex-col items-center justify-center lg:items-center lg:gap-2 z-10 mt-4 ">
              <input
                type="email"
                placeholder="Enter Your Email "
                className="lg:w-[70%] p-2 z-10 lg:mt-5 bg-transparent border border-gray-100 rounded-lg text-white"
              />
              <a
                href="mailto:sales@airprax.com"
                className="bg-[#EC1F52] lg:mt-5 mt-2 text-sm p-2 rounded-md lg:p-2 text-white lg:h-10  lg:w-max"
              >
                SUBSCRIBE NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
