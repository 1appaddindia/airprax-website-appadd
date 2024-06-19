import React from "react";

const Address = () => {
  return (
    <div className="shadow-2xl rounded-md lg:p-6 lg:w-[40%] lg:flex lg:gap-3 p-3 lg:flex-col lg:m-0 m-3 lg:mt-0 mt-5">
      <div className=" text-center">
        <h1 className="text-xl">
          Get in touch <span className="text-[#BF1E2E]"> with us</span>
        </h1>
        <span>You can also reach out to us at</span>
      </div>
      <div className="w-fit">
        <div className="flex items-center gap-3">
          <img
            src="/images/flaticons/location-contact.png"
            alt=""
            className="h-10 w-10 mt-3"
          />
          <div className="flex flex-col">
            <h3 className="text-sm mt-4">
              "A", 3rd Floor, No.166, 10th Main Road, 3rd Phase, Peenya
              Industrial Area, Laggere Main Road,Bangalore,Karnataka,India
            </h3>
            <span className="text-sm">Bangalore, India, 560058</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/images/flaticons/phone-call.png"
            alt="img"
            className="h-8 w-8 flex mt-3"
          />
          <div className="flex flex-col items-start">
            <h3 className="text-sm mt-4">Call Us On</h3>
            <span className="text-sm">+91 9620602000</span>
          </div>
          <img
            src="/images/flaticons/whatsapp (1).png"
            alt="img"
            className="h-7 w-7 flex mt-3"
          />
          <div className="flex flex-col items-start">
            <h3 className="text-sm mt-4">For WhatsApp</h3>
            <span className="text-sm">+91 9742233402</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/images/flaticons/email-contact.png"
            alt=""
            className="h-8 w-8 mt-3"
          />
          <div className="flex flex-col">
            <h3 className="text-sm mt-4">Mail Us @</h3>
            <span className="text-sm">sales@airprax.com</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/images/flaticons/web-domain.png"
            alt=""
            className="h-10 w-10 mt-3"
          />
          <div className="flex flex-col">
            <h3 className="text-sm mt-4">Other Site</h3>
            <a href="http://www.airprax.com">http://www.airprax.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
