import React from "react";
import { products } from "../../utils/products/data";
import ProductCard from "../products/ProductCard";

const ProductsPage = () => {
  return (
    <div className="lg:container lg:p-0 p-2 lg:max-w-9xl">
      <div className="text-center lg:mt-10 mt-3 ">
        <h6 className="font-bold text-xl">Pumps</h6>
        <h1 className="lg:text-3xl text-base lg:text-center text-center">
          Industrial-grade solutions for buildings, water supply, and treatment,
          ensuring efficiency and reliability.
        </h1>
      </div>

      <div className="grid grid-cols-12  lg:gap-5 gap-5 lg:p-5 lg:m-0 mt-2 w-full">
        {products.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
