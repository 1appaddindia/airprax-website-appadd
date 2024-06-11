"use client";

import React, { useEffect, useState } from "react";
import { rawWaterIntake } from "../../../../utils/products/water-management/raw-water-intake/data";
// import { convertProductNameToTitle } from "../../../../utils/deCodeUrl";
import ProductDetailsDesign from "../../product-details/ProductDetailsDesign";
import Banner from "../../../global/Banner";
// import { rawWaterIntake } from "../../../../utils/products/water-management/raw-water-intake/data";
import { convertSpecialCharacters } from "../../../../utils/filteration";

const ProductDetails = ({ productName }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  console.log("selectedProduct", selectedProduct);

  // const product = rawWaterIntake.find(
  //   (product) =>
  //     product.title.toLowerCase().replace(/ /g, "") ==
  //     convertProductNameToTitle(productName).toLowerCase()
  // );

  const product = rawWaterIntake.find((product) => {
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
