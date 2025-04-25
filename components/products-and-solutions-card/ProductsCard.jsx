
const ProductsCard = ({ productData, title, subtitle }) => {
  return (
    <div className="lg:container lg:mx-auto">
      {title && subtitle && (
        <div className="m-10">
          <h1>{title}</h1>
          <h3 className="text-center">{subtitle}</h3>
        </div>
      )}
      {productData?.map((item) => (
        <div
          key={item.id}
          className="lg:flex lg:justify-center lg:items-center lg:mb-1 lg:pb-10 pt-10"
        >
          <div className="lg:w-[90%] lg:mt-5 m-2 bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <a href={item.link}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-[#bf1e2e]">
                  {item.title}
                </h2>
                {item.buttonText && (
                  <div className="hidden lg:block">
                    <a
                      href={item.buttonLink}
                      className="inline-block bg-[#0f75bc] text-white py-2 px-4 rounded-md text-center hover:bg-[#bf1e2e] transition-colors duration-300"
                    >
                      {item.buttonText}
                    </a>
                  </div>
                )}
              </div>
              <hr />
              <div className="lg:flex lg:justify-between lg:mt-5">
                <ul className="list-disc pl-5 space-y-2 lg:w-[60%]">
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  {item.features?.map((feature, index) => (
                    <li key={index} className="text-[#0f75bc] lg:ml-5">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center lg:w-[30%]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full rounded-lg lg:mt-0 mt-6"
                  />
                </div>
              </div>
              {item.buttonText && (
                <div className="text-center lg:hidden">
                  <a
                    href={item.buttonLink}
                    className="inline-block bg-blue-900 text-white py-2 px-4 rounded-md text-center hover:bg-[#bf1e2e] transition-colors duration-300"
                  >
                    {item.buttonText}
                  </a>
                </div>
              )}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
