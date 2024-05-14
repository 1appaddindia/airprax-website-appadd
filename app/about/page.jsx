import React from "react";
import AboutBanner from "../../components/about/AboutBanner";
import AboutUs from "../../components/about/AboutUs";
import OurApproach from "../../components/about/OurApproach";
import OurTeam from "../../components/about/OurTeam";
import Testimonials from "../../components/about/Testimonials";
import OurProjects from "../../components/about/OurProjects";
import Faq from "../../components/about/Faq";
import OurCustomers from "../../components/about/OurCustomers";
import Subscribe from "../../components/about/Subscribe";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <AboutUs />
      <OurApproach />
      <OurTeam />
      <Testimonials />
      <Subscribe />
      <OurProjects />
      <OurCustomers />
      <Faq />
    </div>
  );
};

export default About;
