import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(https://wallpaperaccess.com/full/3184301.jpg)",
          height: "50vh",
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
          height: "61vh",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value (last number) for transparency
        }}
      ></div>
    </div>
  );
};

export default Banner;
