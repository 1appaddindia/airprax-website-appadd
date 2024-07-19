"use client";

import React from "react";
import Banner from "../../../../components/global/Banner";
import { useParams } from "next/navigation";
import ProductDetails from "../../../../components/products/product-details/ProductDetails";

const ProductPage = () => {
  const params = useParams();

  return (
    <div>
      <Banner
        imageSrc="/images/banners/Downpic.cc-1274417553.jpg"
        currentPage="Products"
        pageTitle="Products"
        previousPage="Home"
      />
      <ProductDetails productName={params.productsId} tab={params.products} />
    </div>
  );
};

export default ProductPage;
