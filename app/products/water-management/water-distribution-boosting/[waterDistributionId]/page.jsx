import React from "react";
import ProductDetails from "../../../../../components/products/water-management/water-distribution-boosting/ProductDetails";

const WaterDistributionAndBoostingProduct = ({ params }) => {
  const productName = params.waterDistributionId;
  return (
    <div>
      <ProductDetails productName={productName} />
    </div>
  );
};

export default WaterDistributionAndBoostingProduct;
