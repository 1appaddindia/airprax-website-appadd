import React from "react";
import { pdfFiles } from "../../utils/brochure/data";

const Brochure = () => {
  return (
    <div className="lg:container lg:max-w-9xl lg:mx-auto text-center">
      <h1 className="text-2xl font-bold p-10">
        Explore Our Offerings: Download Our Brochures
      </h1>
      <div className="flex flex-col items-center  lg:grid lg:grid-cols-12">
        {pdfFiles.map((file, index) => (
          <div className="lg:col-span-3 p-4">
            <a
              key={index}
              href={file.path}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4"
            >
              <div className="flex items-center justify-center space-x-2 bg-white shadow-2xl p-5 rounded-md">
                <img
                  src="/images/pdf-icon/pdf.png"
                  alt={`${file.name} icon`}
                  className="h-10 w-10"
                />
                <span className="text-gray-600 font-semibold hover:text-black-800 transition-colors">
                  {file.path}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brochure;
