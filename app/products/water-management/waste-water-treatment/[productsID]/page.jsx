import React from "react";
import ProductDetails from "../../../../../components/products/water-management/waste-water-treatment/ProductDetails";

const WasteWaterTreatmentProduct = ({ params }) => {
  const productName = params.productsID;
  return (
    <div>
      <ProductDetails productName={productName} />
    </div>
  );
};

export default WasteWaterTreatmentProduct;
