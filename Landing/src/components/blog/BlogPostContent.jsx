import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const BlogPostContent = ({ blogInfo }) => {
  const { thumbFull, midTitle, content1, content2, author, date } = blogInfo;

  return (
    <>
      <div className="blog-style-one item">
        <div className="blog-item-box">
          <div className="thumb">
            <Link to="/blog-single-sidebar#">
              <img src={`/img/blog/${thumbFull}`} alt="Thumb" />
            </Link>
          </div>
          <div className="info">
            <div className="meta">
              <ul>
                <li>
                  <i className="fa-solid fa-user"></i>{" "}
                  <Link to="#">{author}</Link>
                </li>
                <li>
                  <i className="fa-solid fa-calendar-alt"></i> {date}
                </li>
              </ul>
            </div>
            <p>{content1}</p>
            <p>{content2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostContent;
