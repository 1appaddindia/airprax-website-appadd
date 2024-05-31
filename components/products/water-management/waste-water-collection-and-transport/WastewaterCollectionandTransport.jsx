import React from "react";
import { wastewaterCollectionandTransport } from "../../../../utils/products/water-management/wastewater-collection-and-transport/data";
import ProductCard from "../../../../components/products/water-management/ProductCard";

const WastewaterCollectionandTransport = () => {
  const subcategory = "waste-water-collection-and-transport";

  return (
    <div className="container max-w-7xl">
      <div className="text-center mt-10">
        <h6>Waste Water Collection And Transport </h6>
        <h1 className="lg:text-4xl text-lg ">
          Wastewater collection and transportation: for reliable and
          energy-efficient processes
        </h1>
      </div>

      <div className="grid lg:grid-cols-12 lg:gap-5 gap-5 lg:p-10">
        {wastewaterCollectionandTransport.map((item) => (
          <ProductCard item={item} subcategory={subcategory} />
        ))}
      </div>
    </div>
  );
};

export default WastewaterCollectionandTransport;
