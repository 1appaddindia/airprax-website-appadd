"use client";

import React, { useEffect, useState } from "react";
import { convertSpecialCharacters } from "../../../../utils/filteration";
import ProductDetailsDesign from "../../product-details/ProductDetailsDesign";
import { waterTreatment } from "../../../../utils/products/water-management/water-treatment/data";

const ProductDetails = ({ productName }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const product = waterTreatment.find((product) => {
    return convertSpecialCharacters(product.title).toLowerCase() == productName;
  });

  useEffect(() => {
    setSelectedProduct(product);
  }, [selectedProduct]);

  return (
    <>
      <ProductDetailsDesign item={selectedProduct} />
    </>
  );
};

export default ProductDetails;
