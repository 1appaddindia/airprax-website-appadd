import React from "react";
import { product } from "../../../utils/products/nitrogen-generator/data";

const NitrogenGenerator = () => {
  return (
    <div className="lg:container lg:max-w-9xl lg:mx-auto">
      <div className="text-center m-5">
        <h6>Nitrogen generators</h6>
        <h1>Your source for reliable, on-site nitrogen generation.</h1>
      </div>
      <div className="lg:grid lg:grid-cols-12">
        <iframe
          src="https://www.youtube.com/embed/J2Pmq_hv4iI?si=B6L0KpPt09ua7GvY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="lg:col-span-6 lg:h-96 w-full p-3"
        ></iframe>
        <div className="p-3 lg:col-span-6">
          <h3 className="text-center text-lg text-[#BF1E2E]">
            {product.heading[0]}
          </h3>
          <p>{product.content[0]}</p>
        </div>
        <div className="p-3 lg:col-span-6 lg:block hidden lg:mt-7">
          <p>{product.content[1]}</p>
          <h3 className="text-center text-[#072E57] mt-4 text-xl ">
            <span className="text-[#BF1E2E]">P.R.I.C.E</span> Benefits Summary:
          </h3>
          <img src={product.img} alt="" />
        </div>
        <div className="lg:col-span-6 ">
          <h3 className="lg:hidden block p-3 text-center text-lg text-[#BF1E2E]">
            {product.heading[1]}
          </h3>
          <h3 className="lg:block hidden p-3 text-center text-lg text-[#BF1E2E]">
            {product.heading[1]}
          </h3>
          <iframe
            src="https://www.youtube.com/embed/0gZKwdxfcd0?si=Ehb7LlEzu-j80b1s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="lg:col-span-6 lg:h-96 w-full p-3 lg:block hidden"
          ></iframe>
        </div>

        <iframe
          src="https://www.youtube.com/embed/0gZKwdxfcd0?si=Ehb7LlEzu-j80b1s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="lg:col-span-6 lg:h-96 w-full p-3 lg:hidden"
        ></iframe>
        <h3 className="text-center text-[#072E57] mt-4 text-xl lg:hidden">
          <span className="text-[#BF1E2E]">P.R.I.C.E</span> Benefits Summary:
        </h3>
        <img src={product.img} alt="" className=" lg:hidden" />
        <div className="p-3 lg:col-span-6 lg:hidden">
          <p>{product.content[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default NitrogenGenerator;
