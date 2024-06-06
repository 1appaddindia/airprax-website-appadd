import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/images/banner/65f4120e1e2c072cea7f2154.jpg)",
          height: "50vh",
          width: "100%",
          position: "relative",
        }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "50vh",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value (last number) for transparency
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
