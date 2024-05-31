import React from "react";
import { ourCustomers } from "../../utils/customers/data";

const Customers = () => {
  return (
    <div className="lg:container">
      <h1 className="m-3">Our Customers</h1>
      <div className="grid grid-cols-12">
        {ourCustomers.map((cust, i) => (
          <div
            key={i}
            className="lg:col-span-3 col-span-6 lg:flex lg:flex-col lg:gap-5 p-3 shadow-xl lg:items-center lg:m-4 m-1"
          >
            <img src={cust.img} alt="" className="h-20 w-32" />
            <span className="text-center font-semibold text-sm">
              {cust.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
