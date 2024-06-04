import React from "react";
import { latestNews } from "../../utils/latest-news/data";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
  return (
    <>
      <div className="lg:m-10 p-3">
        <h6 className="text-center font-bold text-xl">Our Latest News</h6>
        <h1>
          Catch the Pulse of Progress: Stay Ahead with Our Latest Updates!
        </h1>
      </div>
      <div className="grid lg:grid-cols-12 gap-5  lg:container lg:max-w-9xl p-3  ">
        {latestNews.map((item) => (
          <LatestNewsCard item={item} />
        ))}
      </div>
    </>
  );
};

export default LatestNews;
