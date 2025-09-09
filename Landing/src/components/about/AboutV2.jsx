import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const AboutV2 = () => {
  return (
    <>
      <div className="about-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <img src="/img/thumb/4.jpg" alt="Image Not Found" />
                <div className="experience">
                  <h2>
                    Since<strong style={{ fontSize: "5rem" }}>2025</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
              <div className="about-two-info">
                <h4 className="sub-title">About our compnay</h4>
                <h2 className="title">
                  Providing the Best Solutions in <br /> Personal and
                  Professional Growth
                </h2>
                <p>
                  As a pioneering company established in 2025, U-Connect is
                  dedicated to empowering individuals through AI-driven tools
                  and expert consultations. Our mission is to offer
                  personalized, innovative solutions that cater to your unique
                  challenges, ensuring you achieve your goals efficiently.
                  Though we are new, our vision is clear: to make expert advice
                  and cutting- edge tools accessible to everyone.
                </p>
                <div className="about-grid-info">
                  <Link className="btn-round-animation" to="/services#">
                    Discover More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <ul className="list-info-item">
                    <li>
                      <h4>
                        <Link to="#">
                          AI-Powered Solutions{" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link to="#">
                          Expert Consultations{" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link to="#">
                          Strategic Growth{" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link to="#">
                          Innovative Approaches{" "}
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
