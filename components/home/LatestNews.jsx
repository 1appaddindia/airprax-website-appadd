import React from "react";
import LatestNewsCard from "../latest-news/LatestNewsCard";
import { latestNews } from "../../utils/latest-news/data";
import Link from "next/link";

function LatestNews({ className, ...props }) {
  const latestNewsSlice = latestNews.slice(0, 4);
  return (
    <div className="bg-[#e5ebf1] pt-1 lg:mt-0 lg:p-5">
      <div className="lg:p-5 lg:container lg:max-w-9xl lg:mt-60 mt-64">
        <div className=" text-center lg:mt-10 m-8">
          <h6>Latest News</h6>
          <h1 className=" font-bold lg:text-4xl text-lg">
            Catch the Pulse of Progress: Stay Ahead with Our Latest Updates!
          </h1>
        </div>
        <div className="grid lg:grid-cols-12 lg:gap-6 lg:p-5 p-2 mt-2 gap-3">
          {latestNewsSlice.map((item) => (
            <LatestNewsCard item={item} />
          ))}
        </div>
        <a href="/latest-news" className="flex items-center justify-center">
          <button className="bg-[#bf1e2e] m-5 lg:w-36 text-white lg:text-lg text-sm rounded font-bold p-2 flex items-center gap-2">
            Read More
            <img
              src="/images/flaticons/fast-forward.png"
              alt=""
              className="h-5 w-5"
            />
          </button>
        </a>
      </div>
    </div>
  );
}

export default LatestNews;
