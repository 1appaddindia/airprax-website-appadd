"use client";

import React, { useEffect, useState } from "react";
import ProductDetailsDesign from "../../products/product-details/ProductDetailsDesign";
import ProductDesign from "../compressors/ProductDesign";
import { products } from "../../../utils/products/data";
import { vaccumSolutions } from "../../../utils/products/vaccum-solutions/data";
import { waterManagement } from "../../../utils/products/water-management/data";
import { compressors } from "../../../utils/products/compressors/data";
// import { convertSpecialCharacters } from "../../../utils/filteration";

const ProductDetails = ({ productName, tab }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    let productData = [];
    switch (tab) {
      case "pumps":
        productData = products;
        break;
      case "vaccumProducts":
        productData = vaccumSolutions;
        break;
      case "compressors":
        productData = compressors;
        break;
      case "waterManagement":
        productData = waterManagement;
        break;
      default:
        productData = products;
        break;
    }

    // const product = productData.find((product) =>
    //   console.log(
    //     "title== ",
    //     convertProductNameToTitle(productName).toLowerCase(),
    //     "ans==",
    //     product.title.toLowerCase().replace(/ /g, "")
    //   )
    // );

    // const product = productData.find(
    //   (product) =>
    //     product.title.toLowerCase().replace(/ /g, "") ==
    //     convertProductNameToTitle(productName).toLowerCase()
    // );

    const product = productData.find((product) => {
      console.log("value", product);
      return product.slug === productName;
    });

    setSelectedProduct(product);
  }, [tab, productName]);

  console.log("selectedProduct", selectedProduct);

  const renderProductComponent = () => {
    if (!selectedProduct) return <div>No product found</div>;

    switch (tab) {
      case "pumps":
      case "waterManagement":
        return <ProductDetailsDesign item={selectedProduct} />;
      case "compressors":
      case "vaccumProducts":
        return <ProductDesign item={selectedProduct} />;
      default:
        return <div>No product found</div>;
    }
  };

  return <div>{renderProductComponent()}</div>;
};

export default ProductDetails;
