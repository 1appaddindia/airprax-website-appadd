"use client";
import React from "react";
import { waterManagement } from "../../../utils/products/water-management/data";
import ProductCard from "../../../components/products/ProductCard";

const Products = ({ activeTab }) => {
  return (
    <>
      <div className="lg:container lg:max-w-9xl">
        <div className="text-center lg:mt-10 mt-5">
          <h6>Water Management</h6>
          <h1>
          From water supply to sewage treatment: the partner for tailored system solutions
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10 p-3">
          {waterManagement.map((item) => (
            <ProductCard item={item} activeTab={activeTab} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
