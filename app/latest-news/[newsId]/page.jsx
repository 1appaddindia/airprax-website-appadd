import React from "react";
// import OurLatestNews from ".././../latest-news/news/OurLatestNews"
import OurNews from "../../../components/latest-news/news/News";
import Category from "../../../components/latest-news/side-bar/Category";
import FollowUs from "../../../components/latest-news/side-bar/FollowUs";
import Enqiury from "../../../components/latest-news/side-bar/Enquiry";
import Banner from "../../../components/global/Banner";

const NewsPage = ({ params }) => {
  const newsTitle = params.newsId;
  return (
    <>
      <Banner
        imageSrc="/images/banners/global-technology-earth-news-bulletin-background_1017-33687.png"
        currentPage="Latest News"
        pageTitle="Latest News"
        previousPage="Home"
      />
      <div className="lg:m-10 p-3">
        <h6 className="text-center">Latest News</h6>
        <h1>Stay Up-to-Date with the Latest News!</h1>
      </div>
      <div className="lg:flex lg:flex-row lg:container lg:max-w-9xl  lg:h-full  flex flex-col gap-5 justify-between lg:m-10">
        <OurNews newsTitles={newsTitle} />
        <div className="flex flex-col gap-5 lg:gap-10">
          <Category />
          <FollowUs />
          <Enqiury />
        </div>
      </div>
    </>
  );
};

export default NewsPage;
