import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer
        class="footer-wrapper footer-layout1 footer-layout4"
        data-bg-src="assets/img/bg/footer_bg_4_1.jpg"
      >
        <div class="widget-area">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-md-6 col-xl-auto">
                <div class="widget footer-widget">
                  <div class="th-widget-about">
                    <div class="about-logo">
                      <a href="home-medical-clinic.html">
                        <img src="/images/logo/Airprax-logo-01.png" alt="img" />
                      </a>
                    </div>
                    <p class="about-text">
                      Subscribe to out newsletter today to receive latest news
                      administrate cost effective for tactical data.
                    </p>
                    <p class="footer-info">
                      <i class="fal fa-location-dot"></i>
                      "A", 3rd Floor, No.166, 10th Main Road, 3rd Phase, Peenya
                      Industrial Area, Laggere Main
                      Road,Bangalore,Karnataka,India Bangalore, India, 560058
                    </p>
                    <p class="footer-info">
                      <i class="fal fa-envelope"></i>
                      <a href="mailto:info@mediax.com" class="info-box_link">
                        sales@airprax.com
                      </a>
                    </p>
                    <p class="footer-info">
                      <i class="fal fa-phone"></i>
                      <a href="tel:+40276328246" class="info-box_link">
                        08048036823 +919742233402 +919606032399
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-auto">
                <div class="widget widget_nav_menu footer-widget">
                  <h3 class="widget_title">Quick Links</h3>
                  <div class="menu-all-pages-container">
                    <ul class="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="about.html">Terms of Use</a>
                      </li>
                      <li>
                        <a href="service.html">Our Services</a>
                      </li>
                      <li>
                        <a href="faq.html">Help & FAQs</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="about.html">Privacy policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-auto">
                <div class="widget widget_nav_menu footer-widget">
                  <h3 class="widget_title">Customers</h3>
                  <div class="menu-all-pages-container">
                    <ul class="menu">
                      <li>
                        <a href="service-details.html">Toyota</a>
                      </li>
                      <li>
                        <a href="service-details.html">BRITANNIA</a>
                      </li>
                      <li>
                        <a href="service-details.html">
                          JUBILANT (Domino's Pizza)
                        </a>
                      </li>
                      <li>
                        <a href="service-details.html">
                          Wipro Enterprises Private Limited
                        </a>
                      </li>
                      <li>
                        <a href="service-details.html">
                          Nahars Engineering India Pvt Limited
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-auto">
                <div class="widget footer-widget">
                  <h3 class="widget_title">Let’s Stay In Touch</h3>
                  <div class="newsletter-widget">
                    <p class="footer-text">Subscribe for newsletter</p>
                    <form action="#" class="newsletter-form">
                      <div class="form-group">
                        <input
                          class="form-control"
                          type="email"
                          placeholder="Enter Email"
                          required=""
                        />
                      </div>
                      <button type="submit" class="simple-icon">
                        <i class="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                    <div class="form-group">
                      <input type="checkbox" id="checkbox" name="checkbox" />
                      <label for="checkbox">
                        I agree with the terms & conditions
                      </label>
                    </div>
                    <div class="btn-group">
                      <a href="https://play.google.com/" class="img-btn">
                        <img
                          src="assets/img/normal/apple_store.png"
                          alt="icon"
                        />
                      </a>
                      <a href="https://play.google.com/" class="img-btn">
                        <img
                          src="assets/img/normal/play_store.png"
                          alt="icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-wrap">
          <div class="container">
            <div class="row gy-2 align-items-center">
              <div class="col-md-7">
                <p class="copyright-text">
                  Copyright <i class="fal fa-copyright"></i> 2024{" "}
                  <a href="home-medical-clinic.html">Airprax</a>. All Rights
                  Reserved.
                </p>
              </div>
              <div class="col-md-5 text-center text-md-end">
                <div class="th-social">
                  <a href="https://www.facebook.com/">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.twitter.com/">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.whatsapp.com/">
                    <i class="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
