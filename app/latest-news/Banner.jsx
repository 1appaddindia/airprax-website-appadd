import React from "react";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/3184301.jpg)",
          height: "60vh",
          width: "100%",
          marginTop: "30px",
        }}
        className="bg-cover bg-no-repeat bg-center"
      ></div>
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
    </>
  );
};

export default Banner;
