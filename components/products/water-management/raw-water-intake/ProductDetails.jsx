"use client";

import React, { useEffect, useState } from "react";
import { rawWaterIntake } from "../../../../utils/products/water-management/raw-water-intake/data";
import ProductDetailsDesign from "../../product-details/ProductDetailsDesign";
// import { convertSpecialCharacters } from "../../../../utils/filteration";

const ProductDetails = ({ productName }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const product = rawWaterIntake.find((product) => {
    return product.slug === productName;
  });

  useEffect(() => {
    setSelectedProduct(product);
  }, [productName]);

  return (
    <>
      <ProductDetailsDesign item={selectedProduct} />
    </>
  );
};

export default ProductDetails;
