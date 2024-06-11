import Banner from "../../../components/global/Banner";
import ProductDetails from "../../../components/industry/industry-details-page/ProductDetails";

const Industry = ({ params }) => {
  const productsName = params.industryId;

  return (
    <div>
      <Banner
        imageSrc="/images/industry/banner.jpg"
        currentPage="Industry"
        pageTitle="Industry"
        previousPage="Home"
      />
      <ProductDetails productsName={productsName} />
    </div>
  );
};

export default Industry;
