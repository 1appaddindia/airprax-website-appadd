import React from "react";
import { compressors } from "../../../utils/products/compressors/data";
import ProductCard from "../../../components/products/ProductCard";

const Products = ({ activeTab }) => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Compressors</h6>
          <h1>
            Industrial-grade solutions for buildings, water supply, and
            treatment, ensuring efficiency and reliability.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {compressors.map((item) => (
            <ProductCard item={item} activeTab={activeTab} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
