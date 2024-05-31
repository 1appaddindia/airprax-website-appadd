import React from "react";

const ProductDetailsDesign = ({ item }) => {
  return (
    <div className="lg:container lg:max-w-9xl">
      <h3 className="text-center text-xl m-3">{item.name}</h3>
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-6 p-5 ">
          <img src={item.img} alt="img" />
          <p className="font-bold text-[#BF1E2E]">Description</p>
          <p>{item.description}</p>
        </div>
        <div className="lg:col-span-6 p-5">
          <h5 className="text-center text-[#BF1E2E] font-bold text-lg">
            Applications
          </h5>
          {item.applications ? (
            item.applications.map((app, i) => (
              <div key={i}>
                <span className="font-semibold text-[#072E57]">
                  {app.title}
                </span>
                <br />
                <span>{app.explain}</span>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="font-semibold text-[#072E57] text-xl m-5">
        {item.solutions}
      </div>
      <div>
        {item.subApplications.map((subApp, i) => (
          <div key={i}>
            <div className="text-center m-5 text-lg text-[#BF1E2E] font-semibold">
              {subApp.name}
            </div>
            <div className="lg:grid lg:grid-cols-12 grid grid-cols-12  md:flex gap-2 lg:gap-8">
              {subApp.products.map((prod, i) => (
                <div
                  key={i}
                  className="lg:col-span-3 col-span-6 shadow-2xl p-3"
                >
                  {<img src={prod.img} alt="img" className="h-52 w-72" />}
                  <span className="p-2">{prod.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsDesign;
