import React from "react";
import { compressors } from "../../../utils/products/compressors/data";
import ProductCard from "../../../components/products/ProductCard";

const Products = ({ activeTab }) => {
  return (
    <>
      <div className="lg:container lg:max-w-9xl">
        <div className="text-center lg:mt-10 mt-5">
          <h6>Compressors</h6>
          <h1>
            A range of air compressors, blowers, nitrogen generators, air
            treatment products, piping and other energy efficient compressed air
            solutions for all type of industries.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12  gap-5 lg:p-10 p-3">
          {compressors.map((item) => (
            <ProductCard key={item.id} item={item} activeTab={activeTab} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
