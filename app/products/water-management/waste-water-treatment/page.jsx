import React from "react";
import Banner from "../../../../components/global/Banner";
import WasteWaterTreatment from "../../../../components/products/water-management/waste-water-treatment/WasteWaterTreatment";

const WasteWaterTreatmentPage = () => {
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Waste WaterTreatment"
        pageTitle="Waste WaterTreatment"
        previousPage="Products"
      />
      <WasteWaterTreatment />
    </>
  );
};

export default WasteWaterTreatmentPage;
