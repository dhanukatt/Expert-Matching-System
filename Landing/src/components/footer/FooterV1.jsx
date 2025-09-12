import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare from "../others/SocialShare";
import { toast } from "react-toastify";
import axios from "axios";

const FooterV1 = () => {
  const [email, setEmail] = useState(""); // State to store the email

  const handleSearch = (event) => {
    event.preventDefault();

    const emailData = {
      email: event.target.email.value, // Get the email input value
    };

    axios
      .post("http://localhost:8070/email/addEmail", emailData)
      .then((response) => {
        event.target.reset(); // Reset the form after successful submission
        setEmail("");
        toast.success("Thanks for subscribing!"); // Show success message
      })
      .catch((error) => {
        toast.error("Failed to submit email. Please try again."); // Show error message
      });
  };

  return (
    <>
      <footer
        className="bg-dark text-light"
        style={{ backgroundImage: "url(/img/shape/5.png)" }}
      >
        <div className="container">
          <div className="f-items default-padding-bottom pt-70 pt-xs-0">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-
              item mt-50">
                <div className="footer-animated-shape">
                  <img src="/img/shape/6.png" alt="Image Not Found" />
                </div>
                <div className="f-item about pr-10 pr-xs-0 pr-md-0">
                  <img
                    className="logo"
                    src="/img/logo/logo-light.png"
                    alt="Logo"
                  />
                  <p>
                    Empowering individuals by providing seamless access to
                    expert advice across various fields, from personal growth to
                    professional development. Our mission is to make expert
                    guidance accessible to everyone, ensuring you have the tools
                    and support to thrive.
                  </p>
                  <div className="footer-social mt-30">
                    <ul>
                      <SocialShare />
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="f-item link">
                  <h4 className="widget-title">Company</h4>
                  <ul>
                    <li>
                      <Link to="/about-us#">About</Link>
                    </li>
                    <li>
                      <Link to="/team-2#">Experts</Link>
                    </li>
                    <li>
                      <Link to="/services-3#">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact-us#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item contact">
                  <h4 className="widget-title">Contact Info</h4>
                  <ul>
                    <li>
                      <div className="content">
                        <strong>Address:</strong>
                        10/A, Unity Street, Colombo, Sri Lanka
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Email:</strong>
                        <a href="mailto:info@validtheme.com">
                          support@uconnect.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Phone:</strong>
                        <a href="tel:2151234567">+94 11 350 2434 </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-item mt-50">
                <div className="f-item newsletter">
                  <h4 className="widget-title">Newsletter</h4>
                  <p>
                    Join our community to receive the latest updates, expert
                    advice, and special offers tailored to your needs
                  </p>
                  <form onSubmit={handleSearch}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                      name="email"
                      autoComplete="off"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                    />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom bg-dark text-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>

                  Copyright &copy; {new Date().getFullYear()} UConnect. All
                  Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
