import React from "react";

export function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/banners/banner-gallery.jpg)",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="bg-cover relative bg-no-repeat lg:h-[50vh] h-52 bg-center"
    >
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        className="absolute top-0 left-0 lg:h-[50vh] h-52 w-full"
      ></div>
    </div>
  );
}
