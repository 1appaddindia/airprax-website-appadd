import React from "react";
import { wastewaterCollectionandTransport } from "../../../../utils/products/water-management/wastewater-collection-and-transport/data";
import ProductCard from "../../../../components/products/water-management/ProductCard";

const WastewaterCollectionandTransport = () => {
  const subcategory = "waste-water-collection-and-transport";

  return (
    <div className="lg:container lg:max-w-9xl p-5">
      <div className="text-center lg:mt-10 m-3">
        <h6>Waste Water Collection And Transport </h6>
        <h1>
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
