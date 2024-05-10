import React from "react";
import { heating } from "../../../../utils/products/industry/data";
import ProductCard from "../../ProductCard";

const Products = () => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Heating</h6>
          <h1>Smart, efficient and digitally connected pumps</h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {heating.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
