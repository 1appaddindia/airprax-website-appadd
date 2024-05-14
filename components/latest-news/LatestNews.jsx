import React from "react";
import { latestNews } from "../../utils/latest-news/data";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
  return (
    <>
      <h6 className="text-center m-5 font-bold text-xl">Our Latest News</h6>
      <div className="grid lg:grid-cols-12 lg:gap-10 h-full w-full container max-w-9xl mt-2 gap-3">
        {latestNews.map((item) => (
          <LatestNewsCard item={item} />
        ))}
      </div>
    </>
  );
};

export default LatestNews;
