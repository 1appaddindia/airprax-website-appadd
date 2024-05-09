import React from "react";

const FeaturedClientProjects = () => {
  return (
    <>
      <div className="m-1 p-10">
        <h6 className="text-center">Featured Client Projects</h6>
        <h1 className="text-center font-bold lg:text-4xl text-xl">
          Where Innovation Meets Execution
        </h1>
      </div>
      <div
        // className="bg-clip-content bg-fixed bg-no-repeat bg-cover h-[90%] w-full"
        style={{
          backgroundImage:
            "url(https://fpimages.withfloats.com/actual/65f5707efa19be5b559c84c4.png)",
          height: "80vh",
          width: "100%",
          backgroundClip: "unset",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};

export default FeaturedClientProjects;
