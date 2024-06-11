import React from "react";
import Brochure from "../../components/brochure/Brochure";
import Banner from "../../components/global/Banner";

const BrochurePage = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/colorful-stack-textbooks-table-generated-by-ai_24911-72360.jpg"
        currentPage="Brochure"
        pageTitle="Brochure"
        previousPage="Home"
      />
      <Brochure />
    </div>
  );
};

export default BrochurePage;
