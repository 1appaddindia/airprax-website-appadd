import React from "react";
import { vaccumSolutions } from "../../../utils/products/vaccum-solutions/data";
import ProductCard from "../ProductCard";

const ProductsPage = ({ activeTab }) => {
  return (
    <>
      <div className="lg:container lg:max-w-9xl">
        <div className="text-center lg:mt-10 mt-3">
          <h6>Vaccum Products</h6>
          <h1>
          Variable speed and fixed speed vacuum pumps, systems, accessories and service for diverse industrial applications.
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10 p-3">
          {vaccumSolutions.map((item) => (
            <ProductCard
              item={item}
              activeTab={activeTab}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
