import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat h-[60vh] w-full overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/banners/Downpic.cc-1274417553.jpg)",
      }}
    >
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        className="absolute h-[60vh] top-0 left-0 w-full"
      ></div>
    </div>
  );
};

export default Banner;
