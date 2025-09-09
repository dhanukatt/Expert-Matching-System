import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const AboutV1 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="about-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div
                className="about-style-one bg-dark text-light"
                style={{ backgroundImage: "url(img/shape/7.png)" }}
              >
                <ul className="check-list-item">
                  <li>
                    <h5>Expert Fitness Coaching</h5>
                    <p>
                      Receive guidance from professional fitness coaches who are
                      dedicated to helping you achieve your personal health
                      goals. Our coaches create customized workout plans and
                      offer ongoing support to keep you motivated.
                    </p>
                  </li>
                  <li>
                    <h5>Career Advancement Support</h5>
                    <p>
                      Connect with career coaches who can provide personalized
                      advice and strategies for advancing your career. Whether
                      you're aiming for a promotion or considering a career
                      change, we're here to help.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="about-style-one">
                <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">
                  Providing the Best Support <br /> In Personal{" "}
                  <strong>Growth</strong> and Professional{" "}
                  <strong>Develop</strong>ment
                </h2>
                <div
                  className="thumb bg-cover"
                  style={{ backgroundImage: "url(img/banner/2.jpg)" }}
                >
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="tT2puL7IZOE"
                    onClose={() => setOpen(false)}
                  />
                  <Link
                    className="mfp-iframe popup-youtube video-play-button with-text mt-20"
                    onClick={() => setOpen(true)}
                  >
                    <div className="effect"></div>
                    <span>
                      <i className="fa-solid fa-play"></i> OUR STORY
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV1;
