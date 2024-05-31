import React from "react";
import { latestNews } from "../../../utils/latest-news/data";
import NewsCard from "./NewsCard";

const News = ({ newsTitles }) => {
  const selectedNews = latestNews.find(
    (item) => item.title.replace(/ /g, "").toLowerCase() == newsTitles
  );

  return (
    <div>
      {/* <h1>Our News</h1> */}
      {selectedNews ? (
        <NewsCard item={selectedNews} />
      ) : (
        <div className="w-full ">
          {/* {latestNews.map((item) => (
            <div key={item.id} className=" flex items-center justify-center">
              <img src={item.img} alt="" />
              <p>{item.description}</p>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default News;
