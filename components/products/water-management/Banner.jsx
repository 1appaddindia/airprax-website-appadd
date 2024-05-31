import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/images/banners/wilo523439_1.png)",
          height: "60vh",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "60vh",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value (last number) for transparency
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
