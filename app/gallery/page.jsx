import React from "react";
import { Gallery } from "../../components/gallery/Gallery";
import Banner from "../../components/global/Banner";

const GalleryPage = () => {
  return (
    <div>
      <Banner
        imageSrc="/images/banners/banner-gallery.jpg"
        currentPage="Gallery"
        pageTitle="Gallery"
        previousPage="Home"
      />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
