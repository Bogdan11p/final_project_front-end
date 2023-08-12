import "../Header/Header.css";
import React from "react";
import headerLogo from "../../images/header-logo.svg";
import { NavLink } from "react-router-dom";
import logoutLogo from "../../images/logout.svg";
import SearchForm from "../SearchForm/SearchForm";

const Header = ({ isLoggedIn, handleOpenPreloader, handleOpenSignInModal }) => {
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
          {isLoggedIn ? (
            <>
              <div className="header__signedIn">
                <NavLink to="/saved-news" className="header__link">
                  <p className="header__signedIn-articles">Saved articles</p>
                </NavLink>
                <div className="header__logout">
                  <p className="header__logout-name">Bogdan</p>
                  <button
                    className="header__logout-button"
                    type="button"
                    aria-label="logout"
                  >
                    <img src={logoutLogo} alt="logout logo" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <button className="header__signin" onClick={handleOpenSignInModal}>
              Sign in
            </button>
          )}
        </div>
      </div>
      <div className="header__lower">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm handleOpenPreloader={handleOpenPreloader} />
    </header>
  );
};

export default Header;
