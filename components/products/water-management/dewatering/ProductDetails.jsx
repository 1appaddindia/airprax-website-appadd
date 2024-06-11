"use client";

import React, { useEffect, useState } from "react";
import { convertSpecialCharacters } from "../../../../utils/filteration";
import ProductDetailsDesign from "../../product-details/ProductDetailsDesign";
// import Banner from "../../../global/Banner";
import { dewatering } from "../../../../utils/products/water-management/dewatering/data";

const ProductDetails = ({ productName }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  console.log("selectedProduct", selectedProduct);

  const product = dewatering.find((product) => {
    return convertSpecialCharacters(product.title).toLowerCase() == productName;
  });

  useEffect(() => {
    setSelectedProduct(product);
  }, [selectedProduct]);

  return (
    <div>
      {/* <Banner imageSrc="/images/banners/wilo523439_1.png" /> */}
      <ProductDetailsDesign item={selectedProduct} />
    </div>
  );
};

export default ProductDetails;
