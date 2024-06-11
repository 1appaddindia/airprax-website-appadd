import React from "react";
import Customers from "../../components/customers/Customers";
import Banner from "../../components/global/Banner";

const CustomersPage = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/banner-customers-1600x775.jpg"
        currentPage="Customers"
        pageTitle="Customers"
        previousPage="Home"
      />
      <Customers />
    </div>
  );
};

export default CustomersPage;
