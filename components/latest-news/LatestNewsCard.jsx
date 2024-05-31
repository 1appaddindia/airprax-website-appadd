// LatestNewsCard.js
import Link from "next/link";
import React from "react";

const LatestNewsCard = ({ item }) => {
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="border border-[#083465] rounded-lg flex flex-col justify-between col-span-3 hover:shadow-2xl transition-shadow duration-500">
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
          <a href="https://api.whatsapp.com/send/?phone=+919620602000&text=Hello">
            <img
              src="/images/products/whatsapp_PNG21.png"
              className="lg:h-4 h-4 cursor-pointer"
              alt="WhatsApp"
            />
          </a>
          <a href="">
            <img
              src="/images/products/linkedIn_PNG8.png"
              className="lg:h-4 h-4 cursor-pointer"
              alt="LinkedIn"
            />
          </a>
          <img
            src="/images/products/Twitter-Logo.png"
            className="lg:h-4 h-4 cursor-pointer"
            alt="Twitter"
          />
          <img
            src="/images/products/facebook-logo-5-1.png"
            className="lg:h-4 h-4 cursor-pointer"
            alt="Facebook"
          />
          <img
            src="/images/products/pinterest_PNG75.png"
            className="lg:h-4 h-4 cursor-pointer"
            alt="Pinterest"
          />
        </div>
      </div>
      <div className="m-2 text-center">
        <Link
          href={`/latest-news/${item.title.replace(/ /g, "").toLowerCase()}`}
        >
          <button className="bg-[#bf1e2e] w-full text-white p-1 rounded-sm text-sm">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsCard;
