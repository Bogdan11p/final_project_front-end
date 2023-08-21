import "./HeaderPage.css";
import React, { useContext } from "react";
import headerLogoHome from "../../images/header-logo-home.svg";
import { NavLink } from "react-router-dom";
import logoutLogoHome from "../../images/logout-home.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Header = ({
  isLoggedIn,
  handleLogOut,
  handleOpenProfileArticles,
  handleOpenSignInModal,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__left">
        <NavLink exact to="/">
          <img className="header__logo" src={headerLogoHome} alt="news logo" />
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
                <button
                  className="header__signedIn-articles"
                  onClick={handleOpenProfileArticles}
                >
                  Saved articles
                </button>
              </NavLink>
              <div className="header__logout">
                <p className="header__logout-name">{currentUser}</p>
                <button
                  className="header__logout-button"
                  type="button"
                  aria-label="logout"
                  onClick={handleLogOut}
                >
                  <img src={logoutLogoHome} alt="logout logo" />
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
