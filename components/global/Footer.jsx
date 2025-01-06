import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#072E57] text-white py-8 ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* About Us */}
          <div>
            <div>
              <img
                src="/images/logo/Airprax-logo-01.png"
                alt=""
                className="h-30 w-64"
              />
            </div>
            {/* <h3 className="text-lg font-semibold mb-4">About Us</h3> */}
            <p className="text-sm">
              Namaste from Us to You, We are happy to introduce ourselves as a
              possible future service provider in optimizing your manufacturing
              process through operationally efficient pneumatic solutions. Our
              product is world class as also our post market services that
              ensure enhanced machine uptime.
            </p>
            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold mt-5">Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                <a href="https://api.whatsapp.com/send/?phone=+919742233402&text=Hello">
                  <img
                    src="/images/flaticons/whatsapp (2).png"
                    alt=""
                    height={25}
                    width={25}
                  />
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.airprax.com">
                  <img
                    src="/images/flaticons/linkedin.png"
                    alt=""
                    height={25}
                    width={25}
                  />
                </a>
                <a href="https://x.com/intent/post?text=Check+out+Airprax+Pneumatics+LLP%27s+website.+Follow+for+latest+updates+and+offers+regularly+at&url=https%3A%2F%2Fwww.airprax.com&hashtags=OnlineBusiness">
                  <img
                    src="/images/flaticons/twitter-sign.png"
                    alt=""
                    height={25}
                    width={25}
                  />
                </a>
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.airprax.com&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB">
                  <img
                    src="/images/flaticons/facebook.png"
                    alt=""
                    height={25}
                    width={25}
                  />
                </a>
                <a href="https://www.pinterest.com/pin/create/button/?url=https://www.airprax.com">
                  <img
                    src="/images/flaticons/pinterest.png"
                    alt=""
                    height={25}
                    width={25}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-lg font-semibold mb-4 border-b-2 w-20">
              Customers
            </h3>
            <ul className="list-none text-sm">
              <li className="mt-2">
                <a href="/customers" className="hover:text-s ">
                  Toyota
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  BRITANNIA
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  JUBILANT (Domino's Pizza)
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  Wipro Enterprises Private Limited
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  Nahars Engineering India Pvt Limited
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  Akzo Nobel India Limited
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  Godrej Tyson Foods Limited
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  AGRI PROCESS INNOVATIONS TECHNOLOGIES LLP
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  BLUE COLD REFRIGERATION PVT. LTD.
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  Bodor
                </a>
              </li>
              <li className="mt-2">
                <a href="/customers" className="hover:text-blue-500 ">
                  CS Aerotherm
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold  border-b-2 w-40">
              OPENING HOURS
            </h3>
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
            <h3 className="text-lg font-semibold mb-4 border-b-2 w-28">
              Get in Touch{" "}
            </h3>
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
              />
              <a href="mailto:sales@airprax.com"> sales@airprax.com</a>
            </p>
            <ul className="text-sm">
              {/* <li className="flex gap-2 mt-2">
                <img
                  src="/images/flaticons/phone.png"
                  height={20}
                  width={20}
                  alt=""
                />
                08048036823
              </li> */}
              <li className="flex gap-2 mt-2">
                <img
                  src="/images/flaticons/phone.png"
                  alt=""
                  height={20}
                  width={20}
                />
                <a href="tel: +91 9620602000"> +91 9620602000</a>
              </li>
              <li className="flex gap-2 mt-2">
                <img
                  src="/images/flaticons/whatsapp.png"
                  alt=""
                  height={20}
                  width={20}
                />
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B919742233402&text=Hello"
                  className="text-white"
                >
                  +91 9742233402
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d15548.900687835954!2d77.522366!3d13.021328!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzE2LjgiTiA3N8KwMzEnMjAuNSJF!5e0!3m2!1sen!2sus!4v1715681792057!5m2!1sen!2sus"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="lg:w-full lg:h-[150px] h-fit w-full"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-sm text-center">
          &copy; 2024 Airprax Pneumatics, All rights reserved. Designed by
          <a href="https://appaddindia.net/"> Appadd India Pvt Ltd..</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
