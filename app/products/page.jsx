"use client";
import ProductsPage from "../../components/products/Products";
import Banner from "../../components/global/Banner";

const Products = () => {
  return (
    <div className=" min-h-screen w-full">
      <Banner
        imageSrc="/images/banners/Downpic.cc-1274417553.jpg"
        currentPage="Products"
        pageTitle="Products"
        previousPage="Home"
      />
      <ProductsPage />
    </div>
  );
};

export default Products;
