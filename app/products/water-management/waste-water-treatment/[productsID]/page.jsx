import React from "react";
import ProductDetails from "../../../../../components/products/water-management/waste-water-treatment/ProductDetails";
import Banner from "../../../../../components/global/Banner";

const WasteWaterTreatmentProduct = ({ params }) => {
  const productName = params.productsID;
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Waste Water Treatment "
        previousPage="Products"
        pageTitle="Waste Water Treatment "
      />
      <ProductDetails productName={productName} />
    </>
  );
};

export default WasteWaterTreatmentProduct;
