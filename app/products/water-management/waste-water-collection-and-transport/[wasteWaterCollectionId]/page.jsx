import React from "react";
import ProductDetails from "../../../../../components/products/water-management/waste-water-collection-and-transport/ProductDetails";

const WasteWaterCollectionProduct = ({ params }) => {
  const productName = params.wasteWaterCollectionId;
  console.log("params", params.wasteWaterCollectionId);

  console.log("productName", productName);
  return (
    <div>
      <ProductDetails productName={productName} />
    </div>
  );
};

export default WasteWaterCollectionProduct;
