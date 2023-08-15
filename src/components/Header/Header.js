import "../Header/Header.css";
import React, { useContext } from "react";
import headerLogo from "../../images/header-logo.svg";
import { NavLink } from "react-router-dom";
import logoutLogo from "../../images/logout.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Header = ({
  isLoggedIn,
  handleLogOut,
  handleHomeClick,
  handleOpenSignInModal,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__left">
        <NavLink exact to="/">
          <img
            className="header__logo"
            src={headerLogo}
            alt="news logo"
            onClick={handleHomeClick}
          />
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
                <p className="header__logout-name">{currentUser.name}</p>
                <button
                  className="header__logout-button"
                  type="button"
                  aria-label="logout"
                  onClick={handleLogOut}
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
    </header>
  );
};

export default Header;
