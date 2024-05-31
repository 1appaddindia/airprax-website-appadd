import React from "react";
import ProductDetails from "../../../../../components/products/water-management/water-treatment/ProductDetails";

const WaterTreatmentProducts = ({ params }) => {
  const productName = params.waterTreatmentID;
  return (
    <div>
      <ProductDetails productName={productName} />
    </div>
  );
};

export default WaterTreatmentProducts;
