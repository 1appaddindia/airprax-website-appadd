"use client";

import React, { useState } from "react";
import { products } from "../../../utils/industry/data";
import ProductDetailsDesign from "../../../components/industry/industry-details-page/ProductDetailsDesign";

const ProductDetails = ({ productsName }) => {
  const [selectedProducts, setSelectedProducts] = useState(products);

  const selectedProduct = selectedProducts?.find(
    (product) => product.name.replace(/ /g, "") == productsName
  );
  console.log("selectedProduct", selectedProduct);

  return (
    <div>
      {selectedProduct ? (
        <ProductDetailsDesign item={selectedProduct} />
      ) : (
        <div>No Product Found</div>
      )}
    </div>
  );
};

export default ProductDetails;
