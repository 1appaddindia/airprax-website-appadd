import React from "react";
import Products from "../../components/industry/Products";
import Banner from "../../components/global/Banner";

const Industry = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/industry/banner.jpg"
        currentPage="Industry"
        pageTitle="Industry"
        previousPage="Home"
      />
      <Products />
    </div>
  );
};

export default Industry;
