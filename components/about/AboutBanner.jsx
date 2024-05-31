import React from "react";

const Banner = () => {
  return (
    <div className="relative   w-full">
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
      <img
        src="/images/banners/Downpic.cc-1312743082.jpg"
        style={{ height: "400px", width: "100%", objectFit: "fill" }}
        alt=""
      />
    </div>
  );
};

export default Banner;
