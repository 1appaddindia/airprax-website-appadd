import React from "react";
import WaterDistributionAndBoosting from "../../../../components/products/water-management/water-distribution-boosting/WaterDistributionAndBoosting";
import Banner from "../../../../components/global/Banner";

const WaterDistributionAndBoostingPage = () => {
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Water Distribution And Boosting"
        pageTitle="Water Distribution And Boosting"
        previousPage="Products"
      />
      <WaterDistributionAndBoosting />
    </>
  );
};

export default WaterDistributionAndBoostingPage;
