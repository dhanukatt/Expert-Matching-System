import React from "react";
import SocialShare from "../others/SocialShare";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <div className="mb-40">
          <h2>Contact Information</h2>
          <p>
            Our mission is to make expert guidance accessible to everyone,
            ensuring you have the tools and support to thrive.
          </p>
        </div>
        <ul className="contact-address">
          <li className="wow fadeInUp">
            <div className="content">
              <h4 className="title">Phone</h4>
              <a href="tel:+4733378901">+94 11 350 2434</a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="300ms">
            <div className="info">
              <h4 className="title">Location</h4>
              <p>10/A, Unity Street, Colombo, Sri Lanka </p>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="info">
              <h4 className="title">Official Email</h4>
              <a href="mailto:info@digital.com.com">support@uconnect.com </a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="700ms">
            <div className="info">
              <h4 className="title">Follow Us</h4>
              <ul className="social-link">
                <SocialShare />
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
