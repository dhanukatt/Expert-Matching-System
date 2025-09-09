import React from "react";
import SocialShare from "../others/SocialShare";
import { HashLink as Link } from "react-router-hash-link";
import ReactWOW from "react-wow";
import { toast } from "react-toastify";

const HeaderSidebarMenu = ({
  isSidebarOpen,
  removeClasses,
  addClasses,
  searchOpen,
}) => {
  const handleEmail = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks for your Email");
  };

  return (
    <>
      <div className="attr-right">
        <div className="attr-nav flex">
          <ul>
            <li>
            <ReactWOW delay="500ms" duration="400ms">
  <div className="button fadeInUp">
    <a
      className="btn btn-md btn-gradient animation"
      href="http://localhost:5173/auth/login"
      style={{ padding: "10px 30px" }}
    >
      Login
    </a>
  </div>
</ReactWOW>

            </li>
            <li className="side-menu">
              <Link to={void 0} onClick={addClasses}>
                <span className="bar-1"></span>
                <span className="bar-2"></span>
                <span className="bar-3"></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={`side ${isSidebarOpen ? "on" : ""}`}>
          <Link to={void 0} className="close-side" onClick={removeClasses}>
            <i className="icon_close"></i>
          </Link>
          <div className="widget">
            <div className="logo">
              <img src="/img/logo/logo-light.png" alt="Logo" />
            </div>
          </div>
          <div className="widget">
            <p>
              Empowering individuals by providing seamless access to expert
              advice across various fields, from personal growth to professional
              development. Our mission is to make expert guidance accessible to
              everyone, ensuring you have the tools and support to thrive.
            </p>
          </div>
          <div className="widget address">
            <div>
              <ul>
                <li>
                  <div className="content">
                    <p>Address</p>
                    <strong>10/A, Unity Street, Colombo, Sri Lanka </strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Email</p>
                    <strong>
                      <a
                        href="mailto:support@uconnect.com"
                        className="color-para"
                      >
                        support@uconnect.com
                      </a>
                    </strong>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <p>Contact</p>
                    <strong>
                      <a href="tel:+94113502434" className="color-para">
                        +94 11 350 2434
                      </a>
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget newsletter">
            <h4 className="title">Get Subscribed!</h4>
            <form onSubmit={handleEmail}>
              <div className="input-group stylish-input-group">
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="form-control"
                  name="email"
                  autoComplete="off"
                  required
                />
                <span className="input-group-addon">
                  <button type="submit">
                    <i className="arrow_right"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div className="widget social">
            <ul className="link">
              <SocialShare />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSidebarMenu;
