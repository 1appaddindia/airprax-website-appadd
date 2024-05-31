import React from "react";
import { wasteWaterTreatment } from "../../../../utils/products/water-management/waste-water-treatment/data";
import ProductCard from "../../../products/water-management/ProductCard";

const WasteWaterTreatment = () => {
  const subcategory = "waste-water-treatment";
  return (
    <div className="container max-w-7xl">
      <div className="text-center mt-10">
        <h6>Wastewater treatment</h6>
        <h1>
          Wastewater treatment: reliable system solutions for wastewater
          treatment plants
        </h1>
      </div>

      <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
        {wasteWaterTreatment.map((item) => (
          <ProductCard item={item} subcategory={subcategory} />
        ))}
      </div>
    </div>
  );
};

export default WasteWaterTreatment;
