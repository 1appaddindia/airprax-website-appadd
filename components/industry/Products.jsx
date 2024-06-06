import React from "react";
import { products } from "../../utils/industry/data";
import Link from "next/link";

const Products = () => {
  return (
    <div className="lg:container lg:max-w-9xl lg:p-10 p-2">
      <div className="lg:mt-10 mt-5 text-center">
        <h6>Industrial Solutions</h6>
        <h1>Innovative Solutions for Modern Industries</h1>
      </div>
      <div className="lg:grid lg:grid-cols-12 gap-5">
        {products.map((img, i) => (
          <div
            key={i}
            className="lg:col-span-4 flex flex-col items-center p-3 justify-center shadow-xl "
          >
            <img src={img.img} alt="img" className="lg:h-60 w-full  mt-6" />
            <div className="text-start">
              <p className="font-semibold text-start w-full text-lg mt-2">
                {img.name}
              </p>
              <p className="w-fit">
                {img.description.length < 90
                  ? img.description
                  : `${img.description.slice(0, 90)}...`}
              </p>
              <Link
                href={`/industry/${img.name.replace(/ /g, "")}`}
                className="text-[#BF1E2E] font-bold lg:text-start hover:text-black"
              >
                Read More..
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
