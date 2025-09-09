import React from "react";
import { useLocation } from "react-router-dom";

const SingleProcessV1 = ({ process }) => {
  const { icon, number, title, text } = process;

  const location = useLocation();
  const pathname = location.pathname;
  const iconName = pathname === "/" ? `${icon}` : `${icon}`;

  return (
    <>
      <div className="item">
        <div className="icon">
          <img
            src={`/img/icon/${iconName}`}
            alt="Icon"
            style={{ paddingBottom: "30px" }}
          />
        </div>
        <div className="point">
          <span>{number}</span>
        </div>
        <h4>{title}</h4>
        <h6 style={{ marginTop: "20px" }}>{text}</h6>
      </div>
    </>
  );
};

export default SingleProcessV1;
