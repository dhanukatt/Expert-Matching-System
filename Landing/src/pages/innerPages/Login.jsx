import React from "react";
import LoginForm from "../../components/form/LoginForm";
import { HashLink as Link } from "react-router-hash-link";
import HeaderV5 from "../../components/header/HeaderV5";
import ReactWOW from "react-wow";
import FooterV1 from "../../components/footer/FooterV1";

const ContactUs = () => {
  return (
    <>
      <HeaderV5 />
      <div
        className=" overflow-hidden default-padding "
        style={{
          backgroundImage: "url(/img/shape/map.png)",
        }}
      >
        <div className="shape-right-bottom">
          <img src="/img/shape/18.png" alt="Shape" />
        </div>
        <div className="container ">
          <div className="row align-center flex justify-content-center">
            <ReactWOW delay="500ms" duration="400ms">
              <div className="col-tact-stye-one col-lg-5 fadeInUp">
                <LoginForm />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
      <FooterV1 />
    </>
  );
};

export default ContactUs;
