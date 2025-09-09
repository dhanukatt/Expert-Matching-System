import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const SingleServiceV3 = ({ service }) => {
  const {
    id,
    thumb,
    serviceIcon,
    serviceTitle,
    serviceText,
    btnText,
    btnLink,
    btnIcon,
    icon,
  } = service;

  const location = useLocation();
  const pathname = location.pathname;
  const iconName = pathname === "/" ? `${icon}` : `${icon}`;

  return (
    <>
      <div
        className="services-style-three"
        style={{ backgroundImage: `url(/img/shape/${thumb})` }}
      >
        <img
          src={`/img/icon/${iconName}`}
          alt="Icon"
          style={{
            height: "84px",
            marginBottom: "50px",
          }}
        />
        <h4>
          <Link to={`/${btnLink}/${id}#`}>{serviceTitle}</Link>
        </h4>
        <p>{serviceText}</p>
        {/* <Link to={`/${btnLink}/${id}#`} className="btn-service">{btnText}<i className={btnIcon}></i></Link> */}
      </div>
    </>
  );
};

export default SingleServiceV3;
