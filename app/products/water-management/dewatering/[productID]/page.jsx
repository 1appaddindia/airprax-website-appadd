import React from "react";
import ProductDetails from "../../../../../components/products/water-management/dewatering/ProductDetails";
import Banner from "../../../../../components/global/Banner";

const DewateringProduct = ({ params }) => {
  const productName = params.productID;
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Dewatering"
        pageTitle="Dewatering"
        previousPage="Products"
      />
      <ProductDetails productName={productName} />
    </>
  );
};

export default DewateringProduct;
