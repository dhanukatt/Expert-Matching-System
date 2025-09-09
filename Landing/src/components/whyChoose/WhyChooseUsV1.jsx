import React from "react";
import AchievementV1Data from "../../jsonData/AchievementV1Data.json";
import SingleAchievementV1 from "./SingleAchievement";

const WhyChooseUsV1 = ({ chooseClass }) => {
  return (
    <>
      <div
        className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5">
              <div
                className="achivement-counter"
                style={{ backgroundImage: "url(img/shape/banner-4.png)" }}
              >
                <div className="shape-animated-left-bottom">
                  <img src="img/shape/11.png" alt="shape" />
                </div>
                <ul>
                  {AchievementV1Data.map((achievement) => (
                    <SingleAchievementV1
                      achievement={achievement}
                      key={achievement.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 mt-md-50 mt-xs-40">
              <div className="choose-us-card">
                <h4 className="sub-title">Why Choose U-Connect </h4>
                <h2 className="title">
                  Empower Your Journey <br /> with Expert Guidance
                </h2>
                <p>
                  At U-Connect, we offer a unique platform designed to match you
                  with the right experts who can help you navigate your personal
                  and professional challenges. Our tailored approach ensures
                  that you receive actionable advice and support tailored to
                  your needs.
                </p>
                <ul className="list-check">
                  <li>
                    <strong> Personalized Plans: </strong> Receive customized
                    action plans and AI Tools from experts tailored to your
                    unique goals.
                  </li>
                  <li>
                    <strong> Real-Time Support: </strong> Access real-time
                    advice and solutions through our platform whenever you need
                    it.
                  </li>
                  <li>
                    <strong> Diverse Expertise: </strong> Connect with experts
                    across various fields to help with all aspects of your life,
                    from career development to mental wellness.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV1;
