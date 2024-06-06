import React from "react";

const NewsCard = ({ item }) => {
  return (
    <>
      <div className="flex flex-col shadow-2xl ">
        <img src={item.img} alt="img" className="rounded-t-xl h-[45%] " />
        <div className="flex flex-col p-5">
          <div className="flex gap-5 font-light">
            <p>{item.date}</p>
            <p>{item.time}</p>
          </div>
          <p className="font-bold lg:text-2xl text-xl font-serif">
            {item.title}
          </p>
          <p className=" text-black  text-base text-justify">
            {item.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
