import React from "react";
import WaterTreatment from "../../../../components/products/water-management/water-treatment/WaterTreatment";
import Banner from "../../../../components/global/Banner";

const WaterTreatmentPage = () => {
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Water Treatment"
        pageTitle="Water Treatment"
        previousPage="Products"
      />
      <WaterTreatment />
    </>
  );
};

export default WaterTreatmentPage;
