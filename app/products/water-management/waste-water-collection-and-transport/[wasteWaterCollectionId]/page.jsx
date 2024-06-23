import React from "react";
import ProductDetails from "../../../../../components/products/water-management/waste-water-collection-and-transport/ProductDetails";
import Banner from "../../../../../components/global/Banner";

const WasteWaterCollectionProduct = ({ params }) => {
  const productName = params.wasteWaterCollectionId;
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        previousPage="Products"
        pageTitle="Waste Water Collection And Transport"
        currentPage="Waste Water Collection And Transport"
      />
      <ProductDetails productName={productName} />
    </>
  );
};

export default WasteWaterCollectionProduct;
