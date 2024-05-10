import React from "react";
import { sidebar } from "../../../utils/latest-news/side-bar/data";

const Category = () => {
  return (
    <div>
      <div className=" w-fit flex flex-col h-fit  rounded-md shadow-2xl ">
        <h4 className="text-center font-semibold m-5">Latest News</h4>

        {sidebar.map((data) => (
          <div className="flex p-3 gap-5">
            <img src={data.img} alt="img" className="h-22 w-28 rounded-sm" />
            <div className="w-72 flex flex-col ">
              <p className="text-xs  font-medium text-black">{data.title}</p>
              <p className="text-xs  font-medium text-black">{data.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
