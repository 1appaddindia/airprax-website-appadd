"use client";

import React, { useEffect, useState } from "react";
// import { convertSpecialCharacters } from "../../../../utils/filteration";
import ProductDetailsDesign from "../../product-details/ProductDetailsDesign";
import Banner from "../../../global/Banner";
import { waterDistributionAndBoosting } from "../../../../utils/products/water-management/water-distribution-boosting/data";

const ProductDetails = ({ productName }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  console.log("selectedProduct", selectedProduct);

  const product = waterDistributionAndBoosting.find((product) => {
    return product.slug === productName;
  });

  useEffect(() => {
    setSelectedProduct(product);
  }, [selectedProduct]);

  return (
    <div>
      <Banner imageSrc="/images/banners/wilo523439_1.png" />
      <ProductDetailsDesign item={selectedProduct} />
    </div>
  );
};

export default ProductDetails;
