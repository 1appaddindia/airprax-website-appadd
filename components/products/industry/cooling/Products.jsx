import React from "react";
import { cooling } from "../../../../utils/products/industry/data";
import ProductCard from "../../ProductCard";

const Products = () => {
  return (
    <>
      <div className="container max-w-7xl">
        <div className="text-center mt-10">
          <h6>Cooling and air conditioning</h6>
          <h1>
            Air-conditioning and cooling: Step into the future with intelligence
            and sustainability
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
          {cooling.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
