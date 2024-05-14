import React, { useEffect, useState } from "react";
import ProductDetailsDesign from "../../products/product-details/ProductDetailsDesign";
import { products } from "../../../utils/products/data";
import { vaccumSolutions } from "../../../utils/products/vaccum-solutions/data";
import { compressors } from "../../../utils/products/compressors/data";
import { industry } from "../../../utils/products/industry/data";
import { waterManagement } from "../../../utils/products/water-management/data";

const ProductDetails = ({ productID, tab }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    switch (tab) {
      case "pumps":
        setSelectedProducts(products);
        break;
      case "vaccumProducts":
        setSelectedProducts(vaccumSolutions);
        break;
      case "compressors":
        setSelectedProducts(compressors);
        break;
      case "industry":
        setSelectedProducts(industry);
        break;
      case "waterManagement":
        setSelectedProducts(waterManagement);
        break;
      default:
        setSelectedProducts(products);
        break;
    }
  }, []);

  const selectedProduct = selectedProducts?.find(
    (product) => product.id == productID
  );

  return (
    <div>
      {selectedProduct ? (
        <ProductDetailsDesign item={selectedProduct} />
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default ProductDetails;
