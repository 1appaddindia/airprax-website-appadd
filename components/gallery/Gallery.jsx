import React from "react";
import { galleryImages } from "../../utils/home/data";

export function Gallery() {
  return (
    <div className="lg:container lg:max-w-9xl lg:mx-auto">
      <div className="m-5">
        <h3 className="text-center">Our Gallery</h3>
        <h1>Experience Creativity Unleashed</h1>
      </div>
      <div className="lg:grid lg:grid-cols-12">
        {galleryImages.map((img, i) => (
          <div key={i} className="lg:col-span-4 p-2">
            <div className="relative overflow-hidden group">
              <img
                src={img}
                alt="img"
                className="lg:h-72 h-60 w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 animate-fadeIn"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
