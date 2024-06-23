import React from "react";
import ProductDetails from "../../../../../components/products/water-management/raw-water-intake/ProductDetails";
import Banner from "../../../../../components/global/Banner";

const RawWaterIntakeProductPage = ({ params }) => {
  const productName = params.rawWaterIntakeId;

  return (
    <>
      <Banner
        currentPage="Raw Water Intake"
        pageTitle="Raw Water Intake"
        previousPage="Products"
      />
      <ProductDetails productName={productName} />
    </>
  );
};

export default RawWaterIntakeProductPage;
