import React from "react";

const Hero = () => {
  return (
    <section className="hero bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Your Pneumatics Solution Provider
            </h1>
            <p className="text-lg mb-8">
              Discover the power and efficiency of pneumatics technology for
              your industrial needs.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">
              Explore Products
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/hero-image.jpg"
              alt="Pneumatics in Action"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
