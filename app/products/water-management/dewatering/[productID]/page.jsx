import React from "react";
import ProductDetails from "../../../../../components/products/water-management/dewatering/ProductDetails";

const DewateringProduct = ({ params }) => {
  const productName = params.productID;
  return (
    <div>
      <ProductDetails productName={productName} />
    </div>
  );
};

export default DewateringProduct;
