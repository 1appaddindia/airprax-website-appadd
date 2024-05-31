import React from "react";
import ProductDetails from "../../../../../components/products/water-management/raw-water-intake/ProductDetails";

const RawWaterIntakeProductPage = ({ params }) => {
  const productName = params.rawWaterIntakeId;

  return (
    <div>
      <ProductDetails productName={productName} />
    </div>
  );
};

export default RawWaterIntakeProductPage;
