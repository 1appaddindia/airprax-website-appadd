import React from "react";
import Banner from "../../../../components/global/Banner";
import Product from "../../../../components/products/water-management/raw-water-intake/RawWaterIntake";

const RawWaterIntakePage = () => {
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Raw Water Intake"
        pageTitle="Raw Water Intake"
        previousPage="Products"
      />
      <Product />
    </>
  );
};

export default RawWaterIntakePage;
