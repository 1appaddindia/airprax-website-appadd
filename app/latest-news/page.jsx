import React from "react";
import Banner from "../../components/global/Banner";
import News from "../../components/latest-news/LatestNews";

const LatestNews = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/global-technology-earth-news-bulletin-background_1017-33687.png"
        currentPage="Latest News"
        pageTitle="Latest News"
        previousPage="Home"
      />
      <News />
    </div>
  );
};

export default LatestNews;
