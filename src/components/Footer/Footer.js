import "../Footer/Footer.css";
import React from "react";
import gitHubPic from "../../images/github.svg";
import fbPic from "../../images/fb.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__left">
        <p className="footer__left-description">
          © 2023 Supersite, Powered by News API
        </p>
      </div>
      <div className="footer__right">
        <NavLink to="/" className="footer__link">
          Home
        </NavLink>
        <NavLink to="https://tripleten.com/" className="footer__link">
          TripleTen
        </NavLink>
        <NavLink to="https://github.com/Bogdan11p" className="footer__link">
          <img className="footer__link-git" src={gitHubPic} alt="gitHub logo" />
        </NavLink>
        <NavLink
          to="https://www.facebook.com/bogdan.pintilie.3/"
          className="footer__link"
        >
          <img className="footer__link-fb" src={fbPic} alt="fb logo" />
        </NavLink>
      </div>
    </section>
  );
};
export default Footer;
