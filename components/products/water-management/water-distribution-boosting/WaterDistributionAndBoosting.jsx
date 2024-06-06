import React from "react";
import { waterDistributionAndBoosting } from "../../../../utils/products/water-management/water-distribution-boosting/data";
import ProductCard from "../../../products/water-management/ProductCard";

const WaterDistributionAndBoosting = () => {
  const subcategory = "water-distribution-boosting";

  return (
    <div className="lg:container lg:max-w-9xl p-5">
      <div className="text-center lg:mt-10 m-3">
        <h6>Water Distribution and Boosting</h6>
        <h1>
          Drinking water treatment: optimum technology between the well and
          water tap
        </h1>
      </div>

      <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
        {waterDistributionAndBoosting.map((item) => (
          <ProductCard item={item} subcategory={subcategory} />
        ))}
      </div>
    </div>
  );
};

export default WaterDistributionAndBoosting;
