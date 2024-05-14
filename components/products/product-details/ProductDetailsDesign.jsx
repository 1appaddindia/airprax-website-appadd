import { ChevronRight } from "lucide-react";
import React from "react";

const ProductDetailsDesign = ({ item }) => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col lg:gap-10 gap-5 items-center justify-center container max-w-7xl ">
      <img
        src={item.img}
        alt="img"
        className="lg:w-96 lg:h-96 p-5 w-full shadow-2xl rounded-md"
      />
      <div className="lg:w-[50%]  bg-[#69C7D0] p-5 rounded m-5">
        <h1 className="mb-7 text-start text-black lg:text-2xl text-xl">
          {item.title}
        </h1>
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
  );
};

export default ProductDetailsDesign;
