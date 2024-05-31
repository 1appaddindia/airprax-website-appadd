import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: "url(/images/banners/banner-contact-us-2.jpg)",
          height: "60vh",
          width: "100%",
        }}
        className="bg-center bg-no-repeat relative z-10 bg-cover"
      >
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-black opacity-65 z-0"></div>
      </div>
    </div>
  );
};

export default Banner;
