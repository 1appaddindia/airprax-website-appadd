import Link from "next/link";
import React from "react";

const ProductDesign = ({ item }) => {
  return (
    <div className="lg:container lg:max-w-9xl overflow-hidden w-full lg:p-12">
      {/* <h1 className="m-5">Comprehensive Guide to Compressor Products</h1> */}
      <div className="lg:grid lg:grid-cols-12 bg-[#E5EBF1]">
        <div className="lg:col-span-6">
          <img src={item.img} alt="img" className="w-full h-96" />
        </div>
        <div className="lg:col-span-6 lg:p-10 p-3">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className="bg-[#BF1E2E] p-2 w-fit text-white rounded-md mt-10">
            <a href="/contact">Get in Touch</Link>
          </div>
        </div>
      </div>
      {item.subProducts && item.subProducts.length > 0 && (
        <div className="mt-16">
          {item.subProducts.map((ele, index) => (
            <div key={index}>
              <h1 className="m-2 text-start">{ele.title}</h1>
              <p className="m-2">{ele.description}</p>
              <div className="lg:grid lg:grid-cols-12">
                {ele.products &&
                  ele.products.length > 0 &&
                  ele.products.map((prod, i) => (
                    <div key={i} className="lg:col-span-3 m-3 shadow-lg">
                      {<img src={prod.img} alt="img" className="h-72 w-full" />}
                      <h3 className="p-2 text-center text-[#0F75BC]">
                        {prod.title}
                      </h3>
                      <p className="p-3">{prod.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDesign;
