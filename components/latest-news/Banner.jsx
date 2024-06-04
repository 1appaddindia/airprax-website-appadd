import React from "react";

const Banner = () => {
  return (
      <div
        style={{
          backgroundImage: "url(/images/banners/global-technology-earth-news-bulletin-background_1017-33687.png)",
          width: "100%",
        }}
        className="bg-cover relative bg-no-repeat bg-top lg:h-[50vh]  h-52"
      >
        <div
          className="lg:h-[50vh] h-52"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        ></div>
      </div>
  );
};

export default Banner;
