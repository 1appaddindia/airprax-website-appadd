"use client";

import React from "react";
import Banner from "../../components/home/Banner";
import OurProducts from "../../components/home/OurProducts";
import FeaturedClientProjects from "../../components/home/FeaturedClientProjects";
import LatestNews from "../../components/home/LatestNews";
import OurGallery from "../../components/home/OurGallery";
import AboutUs from "../../components/home/AboutUs";
import OurPartners from "../../components/home/OurPartners";
import TagManager from "../TagManager";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <AboutUs />
      <OurProducts />
      <FeaturedClientProjects />
      <LatestNews />
      <OurGallery />
      <OurPartners />
      {/* <TagManager /> */}
    </div>
  );
};

export default Home;
