import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#072E57] text-white py-8 ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* About Us */}
          <div>
            <div>
              <img src="/images/logo/Airprax-logo-01.png" alt="" />
            </div>
            {/* <h3 className="text-lg font-semibold mb-4">About Us</h3> */}
            <p className="text-sm">
              Namaste from Us to You, We are happy to introduce ourselves as a
              possible future service provider in optimizing your manufacturing
              process through operationally efficient pneumatic solutions. Our
              product is world class as also our post market services that
              ensure enhanced machine uptime.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-20">
            <h3 className="text-lg font-semibold mb-4">Customers</h3>
            <ul className="list-none text-sm">
              <li className="mt-2">
                <a href="#" className="hover:text-s ">
                  Toyota
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-500 ">
                  BRITANNIA
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-500 ">
                  JUBILANT (Domino's Pizza)
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-500 ">
                  Wipro Enterprises Private Limited
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:text-blue-500 ">
                  Nahars Engineering India Pvt Limited
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold  mt-20">OPENING HOURS</h3>
            <ul className="list-none text-sm">
              <li className="mt-2">Mon : 09:00 AM to 05:30 PM</li>
              <li className="mt-2">Tue : 09:00 AM to 05:30 PM</li>
              <li className="mt-2">Wed : 09:00 AM to 05:30 PM</li>
              <li className="mt-2">Thu : 09:00 AM to 05:30 PM</li>
              <li className="mt-2">Fri : 09:00 AM to 05:30 PM</li>
              <li className="mt-2">Sat : 09:00 AM to 05:30 PM</li>
              <li className="mt-2">Sun : Closed</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-20">Get in Touch </h3>
            <p className="text-sm">
              "A", 3rd Floor, No.166, 10th Main Road, 3rd Phase, Peenya
              Industrial Area, Laggere Main Road,Bangalore,Karnataka,India
              Bangalore, India, 560058
            </p>
            <p className="text-sm flex gap-2">
              <img
                src="/images/flaticons/email.png"
                alt=""
                height={20}
                width={20}
              />{" "}
              sales@airprax.com
            </p>
            <ul className="text-sm">
              <li className="flex gap-2 mt-2">
                <img
                  src="/images/flaticons/phone.png"
                  height={20}
                  width={20}
                  alt=""
                />{" "}
                08048036823{" "}
              </li>{" "}
              <li className="flex gap-2 mt-2">
                <img
                  src="/images/flaticons/phone.png"
                  alt=""
                  height={20}
                  width={20}
                />
                +91 919742233402
              </li>
              <li className="flex gap-2 mt-2">
                <img
                  src="/images/flaticons/phone.png"
                  alt=""
                  height={20}
                  width={20}
                />
                +91 919606032399
              </li>
            </ul>

            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15548.900687835954!2d77.522366!3d13.021328!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzE2LjgiTiA3N8KwMzEnMjAuNSJF!5e0!3m2!1sen!2sus!4v1715681792057!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0, height: "150px", width: "250px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-blue-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Insert SVG icon for social media */}
                </svg>
              </a>
              <a href="#" className="text-sm hover:text-blue-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Insert SVG icon for social media */}
                </svg>
              </a>
              <a href="#" className="text-sm hover:text-blue-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Insert SVG icon for social media */}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
