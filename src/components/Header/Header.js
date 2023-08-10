import "../Header/Header.css";
import React from "react";
import headerLogo from "../../images/header-logo.svg";
import { NavLink } from "react-router-dom";

const Header = ({}) => {
  return (
    <header className="header">
      <div className="header__upper">
        <div className="header__left">
          <NavLink exact to="/">
            <img className="header__logo" src={headerLogo} alt="news logo" />
          </NavLink>
        </div>
        <div className="header__right">
          <NavLink to="/" className="header__link">
            <p className="header__home">Home</p>
          </NavLink>
          <button className="header__signin">Sign in</button>
        </div>
      </div>
      <div className="header__lower"></div>
    </header>
  );
};

export default Header;
