import React from "react";
import ProductDetails from "../../../../../components/products/water-management/water-treatment/ProductDetails";
import Banner from "../../../../../components/global/Banner";

const WaterTreatmentProducts = ({ params }) => {
  const productName = params.waterTreatmentID;
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Water Treatment"
        pageTitle="Water Treatment"
        previousPage="Products"
      />
      <ProductDetails productName={productName} />
    </>
  );
};

export default WaterTreatmentProducts;
