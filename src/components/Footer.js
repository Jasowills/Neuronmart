import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer-area wf-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-columns">
            <div className="footer-about-us mb-30">
              <h1 className="name">
                <img src={logo} alt="" />
                NeuronMart
              </h1>
              <p className="footer-paragraph mb-40">
                NeuronMart is an online supermarket where you can shop for your daily
                Items at prices cheaper than others.
              </p>

              <div className="footer-payment-wrap mobile-none">
                <h2 className="footer-menu-title">Accepted Payments</h2>
                <div className="footer-payment-thumb-wrap">
                  <div className="payment-single-item">
                    <img
                      src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="payment-single-item">
                    <img
                      src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="payment-single-item">
                    <img
                      src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="payment-single-item">
                    <img
                      src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="payment-single-item">
                    <img
                      src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce054e419e42aca4a9a2_Klarna.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="payment-single-item">
                    <img
                      src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="payment-single-item">
                    <img
                      src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div className="payment-single-item">
                    <img
                      src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="footer-nav">
          <h2 className="footer-menu-title">Categories</h2>
          <ul className="footer-menu-list w-list-unstyled">
            <li className="list-item">Fashion</li>
            <li className="list-item">Phones & Tablets</li>
            <li className="list-item">Home Appliances</li>
            <li className="list-item">Beauty Products</li>
            <li className="list-item">Electronics &amp; Gadget</li>
            <li className="list-item">Fun &amp; Gaming</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
