import React from "react";
import { waterTreatment } from "../../../../utils/products/water-management/water-treatment/data";
import ProductCard from "../../../products/water-management/ProductCard";

const WaterTreatment = () => {
  const subcategory = "water-treatment";

  return (
    <div className="container max-w-7xl">
      <div className="text-center mt-10">
        <h6>Water Treatment</h6>
        <h1>
          Drinking water treatment: optimum technology between the well and
          water tap
        </h1>
      </div>

      <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
        {waterTreatment.map((item) => (
          <ProductCard item={item} subcategory={subcategory} />
        ))}
      </div>
    </div>
  );
};

export default WaterTreatment;
