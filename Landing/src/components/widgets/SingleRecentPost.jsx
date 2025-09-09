import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleRecentPost = ({ post }) => {
  const { id, thumb, date, title, postLink } = post;

  return (
    <>
      <li>
        <div className="thumb">
          <Link to={`/${postLink}/${id}#`}>
            <img src={`/img/blog/${thumb}`} alt="Image Not Found" />
          </Link>
        </div>
        <div className="info">
          <div className="meta-title">
            <span className="post-date">{date}</span>
          </div>
          <Link to={`/${postLink}/${id}#`}>{title}</Link>
        </div>
      </li>
    </>
  );
};

export default SingleRecentPost;
