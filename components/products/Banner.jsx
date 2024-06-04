import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat lg:h-[50vh] h-48 w-full overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/banners/Downpic.cc-1274417553.jpg)",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        className="absolute lg:h-[50vh] h-48 top-0 left-0 w-full"
      ></div>
    </div>
  );
};

export default Banner;
