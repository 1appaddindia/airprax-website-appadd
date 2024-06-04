import React from "react";

const Banner = () => {
  return (
    <div className="relative lg:h-[60vh] h-52 w-full bg-cover  bg-no-repeat"
    style={{backgroundImage:"url(/images/banners/Downpic.cc-1312743082.jpg)",backgroundPosition:"center",objectFit:"cover"}}
    >
      <div className="lg:h-[60vh] h-52 absolute w-full top-0 left-0" style={{backgroundColor:"rgba(0,0,0,0.5)"}}></div>
    </div>
  );
};

export default Banner;
