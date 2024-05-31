import { ChevronRight } from "lucide-react";
import React from "react";

const ProductDetailsDesign = ({ item }) => {
  return (
    <>
    <h1 className="m-5 text-center lg:text-2xl text-xl">
          {item.title}
        </h1>
      <div className="lg:flex lg:flex-row flex flex-col lg:gap-10 gap-5 items-center justify-center lg:container lg:max-w-7xl p-2">
        <img
          src={item.img}
          alt="img"
          className="lg:w-96 lg:h-96 p-5 w-full shadow-2xl rounded-md"
        />
        <div className="lg:w-[50%]  bg-[#E5EBF1] p-5 rounded lg:m-5">
          <div className="ml-4">
            <h6 className="font-bold lg:text-xl ">Advantages</h6>
            <div>
              {item?.advantages?.map((adv) => (
                <div className="flex ">
                  <ChevronRight className="mt-2" />
                  <p>{adv}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsDesign;
