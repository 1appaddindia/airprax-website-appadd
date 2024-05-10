import React from "react";
import { socialIcons } from "../../../utils/latest-news/side-bar/data";

const FollowUs = () => {
  return (
    <div className=" p-4 rounded-md shadow-2xl ">
      <h4 className="text-center font-semibold p-1">Follow Us</h4>
      <div className="flex gap-4 items-center justify-evenly">
        {socialIcons.map((data) => (
          <img src={data} alt="img" className="h-8 w-8 " />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
