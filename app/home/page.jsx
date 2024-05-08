import React from "react";
import Banner from "../../components/home/Banner";
import OurProducts from "../../components/home/OurProducts";
import FeaturedClientProjects from "../../components/home/FeaturedClientProjects";
import LatestNews from "../../components/home/LatestNews";
import OurGallery from "../../components/home/OurGallery";
import ResourcesSection from "../../components/home/ResourceSection";
import AboutUs from "../../components/home/AboutUs";
import OurPartners from "../../components/home/OurPartners";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <AboutUs />
      <OurProducts />
      <FeaturedClientProjects />
      <LatestNews />
      <OurGallery />
      <ResourcesSection />
      <OurPartners />
    </div>
  );
};

export default Home;
