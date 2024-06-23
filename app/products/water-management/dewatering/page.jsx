import React from "react";
import Dewatering from "../../../../components/products/water-management/dewatering/Dewatering";
import Banner from "../../../../components/global/Banner";

const DewateringPage = () => {
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Dewatering"
        pageTitle="Dewatering"
        previousPage="Products"
      />
      <Dewatering />
    </>
  );
};

export default DewateringPage;
