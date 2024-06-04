import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/banners/lava-6-r2-1560x792.png)",
      }}
      className="relative inset-0 bg-center bg-cover lg:h-[50vh] h-52"
    >
      <div className="absolute inset-0 bg-black opacity-50 lg:h-[50vh] h-52 w-full"></div>
    </div>
  );
};

export default Banner;
