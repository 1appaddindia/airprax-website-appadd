import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(/images/banners/colorful-stack-textbooks-table-generated-by-ai_24911-72360.jpg)",
          width: "100%",
          position:"relative"
        }}
        className="bg-cover bg-no-repeat bg-center lg:h-[50vh] h-52"
      >
        <div
        className="lg:h-[50vh] h-52"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width:"100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust the alpha value (last number) for transparency
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
