import React from "react";
import LatestNewsCard from "../latest-news/LatestNewsCard";
import { latestNews } from "../../utils/latest-news/data";
import Link from "next/link";

function LatestNews({ className, ...props }) {
  const latestNewsSlice = latestNews.slice(0, 4);
  return (
    <div className="bg-[#f1fafa] lg:p-10 p-2">
      <div className="p-0 container max-w-9xl lg:mt-52 mt-56">
        <div className="lg:m-10   text-center">
          <h6>Latest News</h6>
          <h1 className=" font-bold lg:text-4xl text-lg">
            Catch the Pulse of Progress: Stay Ahead with Our Latest Updates!
          </h1>
        </div>
        <div className="grid lg:grid-cols-12 lg:gap-6 lg:p-5 h-full w-full container max-w-9xl mt-2 gap-3">
          {latestNewsSlice.map((item) => (
            <LatestNewsCard item={item} />
          ))}
        </div>
        <div className="text-center lg:m-5 m-3">
          <Link href="/latest-news">
            <button className="bg-[#EC1F52] lg:w-52 text-white lg:text-lg text-sm rounded font-bold p-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
