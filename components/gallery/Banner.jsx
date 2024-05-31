import React from "react";

export function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/banners/banner-gallery.jpg)",
        backgroundRepeat: "no-repeat",
        height: "60vh",
        width: "100%",
      }}
      className="bg-cover relative bg-no-repeat bg-center"
    >
      <div
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        className="absolute top-0 left-0 h-[60vh] w-full"
      ></div>
    </div>
  );
}
