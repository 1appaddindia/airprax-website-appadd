import React from "react";
import Banner from "../../components/global/Banner";
import Contact from "../../components/contact/Contact";

const ContactPage = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/banner-contact-us-2.jpg"
        currentPage="Contact"
        previousPage="Home"
        pageTitle="Contact"
      />
      <Contact />
    </div>
  );
};

export default ContactPage;
