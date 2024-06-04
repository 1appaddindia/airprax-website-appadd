import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full lg:h-[50vh] h-52 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/images/banners/banner-customers-1600x775.jpg)",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></div>
    </div>
  );
};

export default Banner;
