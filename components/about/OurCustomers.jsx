import React from "react";
import { ourCustomers } from "../../utils/customers/data";
import Link from "next/link";

const OurCustomers = () => {
  return (
    <div className=" bg-[#E5EBF1]">
      <div className="lg:container lg:max-w-9xl  lg:w-full">
        <div className="flex flex-col items-center justify-center p-2 lg:m-5 ">
          <div className="text-center m-10">
            <h6>Our Customers</h6>
            <h1 className="lg:text-4xl text-lg">Empowering Success Together</h1>
          </div>
          <div className="grid grid-cols-12 lg:gap-12 gap-3">
            {ourCustomers.slice(0, 8).map((customers, id) => (
              <div
                key={id}
                className="lg:col-span-3 w-full col-span-6 lg:flex lg:flex-col lg:justify-center  lg:items-center shadow-2xl bg-white p-2 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer rounded-sm"
              >
                <img
                  src={customers.img}
                  alt="img"
                  className="lg:h-28 lg:w-[60%] h-20 w-full"
                />
                <p className="text-center font-semibold lg:text-base text-xs">
                  {customers.title}
                </p>
              </div>
            ))}
          </div>
          <Link href="/customers">
            <button className="button text-white m-10 w-28 h-11 rounded-md font-bold hover:bg-[#018CB5] hover:text-white hover:border-none hover:transform transition-transform duration-300 ease-in-out hover:scale-110">
              View More...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
