"use client";

import React from "react";
import Banner from "../../components/global/Banner";
import AboutUs from "../../components/about/AboutUs";
import OurApproach from "../../components/about/OurApproach";
import OurTeam from "../../components/about/OurTeam";
import Testimonials from "../../components/about/Testimonials";
import OurProjects from "../../components/about/OurProjects";
import Faq from "../../components/about/Faq";
import OurCustomers from "../../components/about/OurCustomers";
import Subscribe from "../../components/about/Subscribe";
import TagManager from "../TagManager";

const About = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/Downpic.cc-1312743082.jpg"
        currentPage="About"
        pageTitle="About"
        previousPage="Home"
      />
      <AboutUs />
      <OurApproach />
      <OurTeam />
      <Testimonials />
      <Subscribe />
      <OurProjects />
      <OurCustomers />
      <Faq />
      <TagManager />
    </div>
  );
};

export default About;
