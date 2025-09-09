import React from "react";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";

const ContactForm = () => {
  const handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Thanks For Your Message");
  };

  return (
    <>
      <div className="contact-form-style-one p-5">
        <h4 className="sub-title " style={{ fontSize: "1.8rem" }}>
          Login to UConnect
        </h4>
        <form className="contact-form contact-form py-4" onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  type="email"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control no-arrows"
                  id="password"
                  name="password"
                  placeholder="Password*"
                  type="password"
                  required
                  style={{ letterSpacing: "2px" }}
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <button type="submit" name="submit" id="submit" className="py-2">
                LOGIN
              </button>
            </div>
          </div>

          <div className="info mt-4 text-center">
            <p style={{ fontSize: "0.8rem" }}>
              <a href="/register" style={{ color: "blue" }}>
                Register
              </a>{" "}
              if you don't have an account.
            </p>
          </div>

          <hr
            style={{
              height: "2px",
              backgroundColor: "darkGray",
            }}
            className="my-4"
          />

          <div className="row">
            <div className="col-lg-12 text-center">
              <GoogleButton
                onClick={() => {
                  alert("Google button clicked");
                }}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: "2px",
                }}
              />
            </div>
          </div>

          <div className="col-lg-12 alert-notification">
            <div id="message" className="alert-msg"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
