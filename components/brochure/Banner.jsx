import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://georgiaautomation.com/wp-content/uploads/2018/09/pneumatic-banner.png)",
          height: "60vh",
          width: "100%",
          position:"relative"
        }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height:"60vh",
            width:"100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value (last number) for transparency
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
