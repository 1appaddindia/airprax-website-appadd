"use client";

import React, { useEffect, useState } from "react";
// import { convertSpecialCharacters } from "../../../../utils/filteration";
import ProductDetailsDesign from "../../product-details/ProductDetailsDesign";
import { wastewaterCollectionandTransport } from "../../../../utils/products/water-management/wastewater-collection-and-transport/data";

const ProductDetails = ({ productName }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  console.log("selectedProduct", selectedProduct);
  console.log("productName", productName);

  const product = wastewaterCollectionandTransport.find((product) => {
    return product.slug === productName;
  });

  console.log("productName", productName);

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
