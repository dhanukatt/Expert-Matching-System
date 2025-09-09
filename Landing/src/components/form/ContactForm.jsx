import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ContactForm = () => {
  const handleForm = (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      comments: event.target.comments.value,
    };

    axios
      .post("http://localhost:8070/contact/submit", formData)
      .then((response) => {
        event.target.reset(); // Reset the form after successful submission
        toast.success("Thanks for your message! We'll get in touch soon.");
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <div className="contact-form-style-one">
        <h4 className="sub-title">Have Questions?</h4>
        <h2 className="title">Send us a Message</h2>
        <form className="contact-form" onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  autoComplete="off"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  type="email"
                  autoComplete="off"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control no-arrows"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  type="number"
                  autoComplete="off"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Tell Us About Project *"
                  autoComplete="off"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button type="submit" name="submit" id="submit">
                <i className="fa fa-paper-plane"></i> Get in Touch
              </button>
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
