import React from "react";
import ProductDetails from "../../../../../components/products/water-management/water-distribution-boosting/ProductDetails";
import Banner from "../../../../../components/global/Banner";

const WaterDistributionAndBoostingProduct = ({ params }) => {
  const productName = params.waterDistributionId;
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        currentPage="Water Distribution And Boosting"
        pageTitle="Water Distribution And Boosting"
        previousPage="Products"
      />
      <ProductDetails productName={productName} />
    </>
  );
};

export default WaterDistributionAndBoostingProduct;
