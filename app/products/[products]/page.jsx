// "use client";

// import React from "react";
// import ProductDetails from "../../../components/products/product-details/ProductDetails";
// import Banner from "../../../components/global/Banner";
// import { useSearchParams } from "next/navigation";

// const ProductPage = ({ params }) => {
//   const productsName = params.productsId;
//   console.log("params", params);
//   const activeTab = useSearchParams().get("tab");

//   return (
//     <div>
//       <Banner
//         imageSrc="/images/banners/Downpic.cc-1274417553.jpg"
//         currentPage="Products"
//         pageTitle="Products"
//         previousPage="Home"
//       />
//       <ProductDetails productName={productsName} tab={activeTab} />
//     </div>
//   );
// };

// export default ProductPage;

"use client";
import ProductsPage from "../../../components/products/Products";
import Banner from "../../../components/global/Banner";

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
