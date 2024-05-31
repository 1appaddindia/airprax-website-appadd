import React from "react";

const ProductDesign = ({ item }) => {
  return (
    <div className="lg:container lg:max-w-9xl overflow-hidden ">
      {/* <h1 className="m-5">Comprehensive Guide to Compressor Products</h1> */}
      <div className="lg:grid lg:grid-cols-12 bg-[#E5EBF1]">
        <div className="lg:col-span-6">
          <img src={item.img} alt="img" className="w-full h-96" />
        </div>
        <div className="lg:col-span-6 p-10">
          <h1 className="text-start text-4xl">{item.title}</h1>
          <p className="lg:text-lg">{item.description}</p>
          <button className="bg-[#BF1E2E] p-2 w-60 text-white rounded-md mt-10">
            Get in Touch
          </button>
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
                      <p className="pl-2 m-2">{prod.description}</p>
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
