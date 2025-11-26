"use client";

import React, { useEffect, useState } from "react";
// import { convertSpecialCharacters } from "../../../../utils/filteration";
import ProductDetailsDesign from "../../product-details/ProductDetailsDesign";
// import Banner from "../../../global/Banner";
import { wasteWaterTreatment } from "../../../../utils/products/water-management/waste-water-treatment/data";

const ProductDetails = ({ productName }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  console.log("selectedProduct", selectedProduct);

  const product = wasteWaterTreatment.find((product) => {
    return product.slug === productName;
  });

  useEffect(() => {
    setSelectedProduct(product);
  }, [selectedProduct]);

  return (
    <div>
      <ProductDetailsDesign item={selectedProduct} />
    </div>
  );
};

export default ProductDetails;
