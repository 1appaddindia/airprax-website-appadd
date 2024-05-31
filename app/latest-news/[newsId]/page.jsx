import React from "react";
// import OurLatestNews from ".././../latest-news/news/OurLatestNews"
import OurNews from "../../../components/latest-news/news/News";
import Category from "../../../components/latest-news/side-bar/Category";
import FollowUs from "../../../components/latest-news/side-bar/FollowUs";
import Enqiury from "../../../components/latest-news/side-bar/Enquiry";
import Banner from "../../../components/latest-news/Banner";

const Page = ({ params }) => {
  const newsTitle = params.newsId;
  return (
    <>
      <Banner />
      <h6 className="mt-20 text-center">Latest News</h6>
      <h1>Stay Up-to-Date with the Latest News!</h1>
      <div className="lg:flex lg:flex-row lg:container lg:max-w-7xl w-full lg:w-full lg:h-full lg:gap-10 flex flex-col  gap-5  justify-evenly lg:p-10 p-3">
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

export default Page;
