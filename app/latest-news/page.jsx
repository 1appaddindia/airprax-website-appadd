import React from "react";
import Banner from "../../components/latest-news/Banner";
import News from "../../components/latest-news/LatestNews";

const LatestNews = () => {
  return (
    <div>
      <Banner className="mt-32" />
      <News />
    </div>
  );
};

export default LatestNews;
