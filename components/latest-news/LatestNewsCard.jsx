import React from "react";

const LatestNewsCard = ({ item }) => {
  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="border border-[#083465] rounded-lg flex flex-col justify-between col-span-3 hover:shadow-2xl transition-shadow duration-500">
      <img src={item.img} alt="img" className="h-60  rounded-t-lg" />
      <span className="text-start m-2 font-bold text-[#bf1e2e]">
        {item.title}
      </span>
      <p className="lg:text-base text-sm m-2">
        {truncateDescription(item.description, 100)}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 m-2 justify-between">
          <span className="text-sm font-light">{item.date}</span>
          <span className="text-sm font-light">{item.time}</span>
        </div>
        <div className="flex gap-2 m-2">
          <a href="https://api.whatsapp.com/send/?phone=+919742233402&text=Hello">
            <img
              src="/images/products/whatsapp_PNG21.png"
              className="lg:h-4 h-4 cursor-pointer"
              alt="WhatsApp"
            />
          </a>
          <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.airprax.com">
            <img
              src="/images/products/linkedIn_PNG8.png"
              className="lg:h-4 h-4 cursor-pointer"
              alt="LinkedIn"
            />
          </a>
          <a href="https://x.com/intent/post?text=Check+out+Airprax+Pneumatics+LLP%27s+website.+Follow+for+latest+updates+and+offers+regularly+at&url=https%3A%2F%2Fwww.airprax.com&hashtags=OnlineBusiness">
            <img
              src="/images/products/Twitter-Logo.png"
              className="lg:h-4 h-4 cursor-pointer"
              alt="Twitter"
            />
          </a>
          <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.airprax.com&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB">
            <img
              src="/images/products/facebook-logo-5-1.png"
              className="lg:h-4 h-4 cursor-pointer"
              alt="Facebook"
            />
          </a>
          <a href="https://www.pinterest.com/pin/create/button/?url=https://www.airprax.com">
            <img
              src="/images/products/pinterest_PNG75.png"
              className="lg:h-4 h-4 cursor-pointer"
              alt="Pinterest"
            />
          </a>
        </div>
      </div>
      <a
        href={`/latest-news/${item.title.replace(/ /g, "").toLowerCase()}`}
        className="flex items-center justify-center m-2"
      >
        <button className="bg-[#bf1e2e] w-full text-white p-1 rounded-sm text-sm flex items-center justify-center gap-2 font-semibold">
          Read More
          <img
            src="/images/flaticons/right-arrow (1).png"
            alt=""
            className="h-4 w-6"
          />
        </button>
      </a>
    </div>
  );
};

export default LatestNewsCard;
