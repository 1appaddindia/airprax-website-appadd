import Banner from "../../../components/industry/Banner";
import ProductDetails from "../../../components/industry/industry-details-page/ProductDetails";

const Industry = ({ params }) => {
  const productsName = params.industryId;

  return (
    <div>
      <Banner />
      <ProductDetails productsName={productsName} />
    </div>
  );
};

export default Industry;
