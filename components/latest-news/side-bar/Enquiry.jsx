"use client";

import React, { useState } from "react";

const Enquiry = () => {
  const [enquiry, setEnquiry] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enquiry && contact) {
      const whatsappMessage = encodeURIComponent(
        `Enquiry: ${enquiry}\nContact: ${contact}`
      );
      window.location.href = `https://api.whatsapp.com/send?phone=9742233402&text=${whatsappMessage}`;
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <>
      <div className="shadow-2xl rounded-lg ">
        <h5 className="text-center font-bold m-5">Submit Your Enquiry Here</h5>
        <div className="text-center m-2">
          <form onSubmit={handleSubmit}>
            <textarea
              name="enquiry"
              id="enquiry"
              className="border border-gray-200 rounded-md h-full w-full text-sm p-2"
              placeholder="Please type your enquiry in detail...."
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
            ></textarea>
            <input
              type="text"
              className="text-sm p-3 w-full border border-gray-200 rounded-md"
              placeholder="Your Mobile No. or email Address"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#EC1F52] mt-5 p-2 rounded text-white w-full font-semibold text-sm"
            >
              SUBMIT QUERY
            </button>
          </form>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/contact"
          className="bg-gray-700 w-[70%] text-white rounded-md p-2"
        >
          CONTACT US
        </a>
      </div>
    </>
  );
};

export default Enquiry;
