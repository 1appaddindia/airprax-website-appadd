import React from "react";

const Banner = () => {
  return (
      <div
        style={{
          backgroundImage: "url(/images/industry/banner.jpg)",
          backgroundRepeat: "no-repeat",
          width: "100%",
          position: "relative",
        }}
        className="bg-cover h-52 lg:h-[50vh]"
      >
        <div
        className="h-52 lg:h-[50vh]"
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.9)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.5,
            width: "100%",
          }}
        ></div>
      </div>
  );
};

export default Banner;
