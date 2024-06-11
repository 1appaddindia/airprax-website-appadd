"use client";

import React, { useEffect, useState } from "react";
import { convertSpecialCharacters } from "../../../../utils/filteration";
import ProductDetailsDesign from "../../product-details/ProductDetailsDesign";
import Banner from "../../../global/Banner";
import { wastewaterCollectionandTransport } from "../../../../utils/products/water-management/wastewater-collection-and-transport/data";

const ProductDetails = ({ productName }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  console.log("selectedProduct", selectedProduct);
  console.log("productName", productName);

  const product = wastewaterCollectionandTransport.find((product) => {
    return convertSpecialCharacters(product.title).toLowerCase() == productName;
  });

  console.log("productName", productName);

  useEffect(() => {
    setSelectedProduct(product);
  }, [productName]);

  return (
    <div>
      <Banner imageSrc="/images/banners/wilo523439_1.png" />
      <ProductDetailsDesign item={selectedProduct} />
    </div>
  );
};

export default ProductDetails;
