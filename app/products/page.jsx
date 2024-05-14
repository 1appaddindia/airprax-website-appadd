"use client";
import ProductsPage from "../../components/products/Products";
import Banner from "../../components/products/Banner";

const Products = () => {
  return (
    <div className=" min-h-screen w-full">
      <Banner />
      <ProductsPage />
    </div>
  );
};

export default Products;
