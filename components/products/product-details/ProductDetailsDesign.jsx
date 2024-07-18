import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductDetailsDesign = ({ item }) => {
  return (
    <div className="lg:container lg:max-w-9xl ">
      <h1 className="m-5 text-center lg:text-2xl text-xl">{item.title}</h1>
      <div className="lg:flex lg:flex-row flex flex-col lg:gap-10 gap-5 items-center justify-center  lg:p-2 w-full p-5">
        <img
          src={item.img}
          alt="img"
          className="lg:w-96 lg:h-96 p-5  shadow-2xl rounded-md lg:m-10"
        />
        <div className="lg:w-[50%]  bg-[#E5EBF1] p-5 rounded lg:m-5">
          <div className="ml-4">
            <h6 className="font-bold lg:text-xl ">Advantages</h6>
            {item?.advantages?.map((adv) => (
              <div className="flex ">
                <ChevronRight className="mt-2" />
                <p className="text-start">{adv}</p>
              </div>
            ))}
          </div>
          <div className="text-center  mt-5">
            <a
              href="/contact"
              className="text-center bg-[#BF1E2E] p-2 rounded text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsDesign;
