import React from "react";
import { vaccumSolutions } from "../../../utils/products/vaccum-solutions/data";
import ProductCard from "../ProductCard";

const ProductsPage = () => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Vaccum Products</h6>
          <h1>
            Industrial-grade solutions for buildings, water supply, and
            treatment, ensuring efficiency and reliability.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {vaccumSolutions.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
