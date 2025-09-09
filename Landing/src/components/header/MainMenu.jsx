import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        <img src="/img/logo/logo.png" alt="Logo" />
        <button type="button" className="navbar-toggle" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
        <ul className="nav navbar-nav navbar-center">
          <li>
            <Link to="/#">Home</Link>
          </li>
          <li>
            <Link to="/team-2#">Experts</Link>
          </li>
          <li>
            <Link to="/services-3">Services</Link>
          </li>
          <li>
            <Link to="/about-us#">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us#">contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainMenu;
