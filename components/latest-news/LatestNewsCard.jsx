// LatestNewsCard.js
import Link from "next/link";
import React from "react";

const LatestNewsCard = ({ item }) => {
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="border border-[#69C7D0] rounded-lg flex flex-col col-span-3">
      <img src={item.img} alt="img" className="h-60  rounded-t-lg" />
      <span className="text-start m-2 font-bold">{item.title}</span>
      <p className="lg:text-base text-sm m-2">
        {truncateDescription(item.description, 100)}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 m-2 justify-between">
          <span className="text-sm font-light">{item.date}</span>
          <span className="text-sm font-light">{item.time}</span>
        </div>
        <div className="flex gap-2 m-2">
          <img src={item.whatsappImg} className="lg:h-4 h-4" alt="WhatsApp" />
          <img src={item.linkedInImg} className="lg:h-4 h-4" alt="LinkedIn" />
          <img src={item.twitterImg} className="lg:h-4 h-4" alt="Twitter" />
          <img src={item.facebookImg} className="lg:h-4 h-4" alt="Facebook" />
          <img src={item.pinterestImg} className="lg:h-4 h-4" alt="Pinterest" />
        </div>
      </div>
      <div className="m-2 text-center">
        <Link href={`/latest-news/${item.id}`}>
          <button className="bg-[#ec1f52] w-full text-white p-1 rounded-sm text-sm">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsCard;
