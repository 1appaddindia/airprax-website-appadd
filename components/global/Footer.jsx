import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8 ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Namaste from Us to You, We are happy to introduce ourselves as a
              possible future service provider in optimizing your manufacturing
              process through operationally efficient pneumatic solutions. Our
              product is world class as also our post market services that
              ensure enhanced machine uptime.
            </p>
          </div>

          {/* Quick Links */}
          <div className="">
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
            <h3 className="text-lg font-semibold mb-4">OPENING HOURS</h3>
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
            <h3 className="text-lg font-semibold mb-4">SUBSCRIBE US</h3>
            <p className="text-sm">123 Street Name, City, Country</p>
            <p className="text-sm">info@example.com</p>
            <p className="text-sm">+123 456 7890</p>
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
