"use client";

import React from "react";
import ProductDetails from "../../../components/products/product-details/ProductDetails";
import Banner from "../../../components/products/product-details/Banner";
import { useSearchParams } from "next/navigation";

const ProductPage = ({ params }) => {
  const productsName = params.productsId;
  console.log("params", params);
  const activeTab = useSearchParams().get("tab");

  return (
    <div>
      <Banner />
      <h6 className="mt-20 container max-w-9xl text-center m-5">
      </h6>
      <ProductDetails productName={productsName} tab={activeTab} />
    </div>
  );
};

export default ProductPage;
