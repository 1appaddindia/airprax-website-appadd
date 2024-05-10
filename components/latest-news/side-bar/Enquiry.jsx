import React from "react";

const Enquiry = () => {
  return (
    <>
      <div className="shadow-2xl rounded-lg ">
        <h5 className="text-center font-bold m-5">Submit Your Equire Here</h5>
        <div className="text-center m-2">
          <form action="">
            <textarea
              name=""
              id=""
              className="border border-gray-200 rounded-md h-full w-full text-sm p-2 "
              placeholder="Please type your enquiry in detail...."
            ></textarea>
            <input
              type="text"
              className="text-sm p-3 w-full border border-gray-200 rounded-md"
              placeholder="Your Mobile No. or email Address"
            />
            <button className="bg-[#EC1F52] mt-5 p-2 rounded text-white w-full font-semibold text-sm">
              SUBMIT QUERY
            </button>
          </form>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-gray-700 w-[70%] text-white rounded-md p-2">
          CONTACT US
        </button>
      </div>
    </>
  );
};

export default Enquiry;
