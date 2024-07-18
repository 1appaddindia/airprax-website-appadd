import React from "react";
import { latestNews } from "../../../utils/latest-news/data";
import NewsCard from "./NewsCard";

const News = ({ newsTitles }) => {
  const selectedNews = latestNews.find(
    (item) => item.title.replace(/ /g, "").toLowerCase() == newsTitles
  );

  return (
    <div>
      {selectedNews ? <NewsCard item={selectedNews} /> : <h1>No News Found</h1>}
    </div>
  );
};

export default News;
