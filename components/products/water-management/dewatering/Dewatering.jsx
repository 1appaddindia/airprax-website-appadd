import React from "react";
import { dewatering } from "../../../../utils/products/water-management/dewatering/data";
import ProductCard from "../../../../components/products/water-management/ProductCard";

const Dewatering = () => {
  const subcategory = "dewatering";

  return (
    <div className="lg:container lg:max-w-9xl p-5">
      <div className="text-center lg:mt-10 m-3">
        <h6>Dewatering (incl. flood control)</h6>
        <h1>
          Drainage and flood control: effective and forward-looking solutions
        </h1>
      </div>

      <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
        {dewatering.map((item) => (
          <ProductCard item={item} subcategory={subcategory} />
        ))}
      </div>
    </div>
  );
};

export default Dewatering;
