import React from "react";

const Subscribe = () => {
  return (
    <div className="flex items-center justify-between  h-full">
      <div
        className="relative lg:h-80vh h-full w-full"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/closeup-view-cylindrical-grinder-industrial-concept_181624-17731.jpg?t=st=1715593953~exp=1715597553~hmac=672ddd51d667e95f727a83e3aa4a0e6cf08843e1f433bf01fbd2a0be29cbc06b&w=1060)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-black opacity-80"
            style={{ zIndex: 1 }}
          ></div>
        </div>
        <div className="flex lg:justify-between  lg:h-full">
          <div className="h-80vh w-1/2 relative lg:block hidden  z-10">
            <img
              src="https://img.freepik.com/free-photo/industrial-worker-working-production-line-factory_342744-183.jpg?t=st=1715594432~exp=1715598032~hmac=cd35837fee04a44dfb069e60483348e08feec2a37762e509859e4bf3725422c8&w=1060"
              alt=""
              className="h-full w-[90%] "
            />
          </div>
          <div className="z-10 lg:relative lg:right-36 lg:top-48 lg:p-0 p-10">
            <h3 className="text-white lg:text-3xl font-bold z-10">
              Subscribe For Newsletter
            </h3>
            <p className="text-white lg:text-xl z-10">
              We do not spam and your email-id would be stored securely.
            </p>
            <div className="lg:flex lg:flex-row flex flex-col items-center justify-center lg:items-center lg:gap-2 z-10 mt-4 ">
              <input
                type="email"
                placeholder="Enter Your Email "
                className="lg:w-[70%] lg:p-2 z-10 lg:mt-5 bg-transparent border border-gray-100 rounded-lg text-white"
              />
              <button className="bg-[#EC1F52] lg:mt-5 mt-2 text-sm p-2 rounded-md lg:p-2 text-white lg:h-10  lg:w-max">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
