import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/images/industry/banner.jpg)",
          backgroundRepeat: "no-repeat",
          height: "50vh",
          width: "100%",
          position: "relative",
        }}
        className="bg-cover"
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.5,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
