import React from "react";

const Banner = () => {
  return (
    <div className="relative   w-full">
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
      <img
        src="/images/banner/65f4120e1e2c072cea7f2154.jpg"
        style={{ height: "400px", width: "100%" }}
        alt=""
      />
    </div>
  );
};

export default Banner;
