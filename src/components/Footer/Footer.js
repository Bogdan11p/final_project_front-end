import "../Footer/Footer.css";
import React from "react";
import gitHubPic from "../../images/github.svg";
import fbPic from "../../images/fb.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__left-description">
          © 2023 Supersite, Powered by News API
        </p>
      </div>
      <div className="footer__right">
        <NavLink to="/" className="footer__link">
          Home
        </NavLink>
        <a
          className="footer__right-tripleTen"
          href="https://tripleten.com/"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>
        <a href="https://github.com/Bogdan11p" target="_blank" rel="noreferrer">
          <img
            className="footer__right-git"
            src={gitHubPic}
            alt="gitHub logo"
          ></img>
        </a>
        <a
          href="https://www.facebook.com/bogdan.pintilie.3/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__right-fb" src={fbPic} alt="fb logo"></img>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
