import React from "react";
import WastewaterCollectionandTransport from "../../../../components/products/water-management/waste-water-collection-and-transport/WastewaterCollectionandTransport";
import Banner from "../../../../components/global/Banner";

const WastewaterCollectionandTransportPage = () => {
  return (
    <>
      <Banner
        imageSrc="/images/banners/wilo523439_1.png"
        pageTitle="Waste Water Collection And Transport"
        currentPage="Waste Water Collection And Transport"
        previousPage="Products"
      />
      <WastewaterCollectionandTransport />
    </>
  );
};

export default WastewaterCollectionandTransportPage;
