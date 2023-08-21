import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import logoOutLogoPage from "../../images/logout-home.svg";
import closeButton from "../../images/close-icon.svg";
import mobileMenuPage from "../../images/mobile-menu-page.svg";
import pageLogo from "../../images/header-logo-home.svg";

const NavBarPage = ({ handleSignIn, handleSignOut, handleProfileIn }) => {
  const [isMobileMenuNotLoggedIn, setIsMobileMenuNotLoggedIn] = useState(false);
  const [isMobileMenuLoggedIn, setIsMobileMenuLoggedIn] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const handleMobileMenuLoggedInOn = () => {
    setIsMobileMenuLoggedIn(true);
  };

  const handleMobileMenuLoggedInOff = () => {
    setIsMobileMenuLoggedIn(false);
  };

  const handleMobileMenuNotLoggedInOn = () => {
    setIsMobileMenuNotLoggedIn(true);
  };

  const handleMobileMenuNotLoggedInOff = () => {
    setIsMobileMenuNotLoggedIn(false);
  };

  const handleCloseOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuLoggedIn(false);
      setIsMobileMenuNotLoggedIn(false);
    }
  };

  const handleMoblieMenuLoggedInSignOut = () => {
    handleMobileMenuLoggedInOff();
    handleSignOut();
  };

  return (
    <>
      {currentUser === null ? (
        <div className="navbar__notLoggedIn">
          <img
            className="navbar__notLoggedIn-title"
            src={pageLogo}
            id="home"
          ></img>
          <img
            className="navbar__notLoggedIn-mobileMenu"
            src={mobileMenuPage}
            onClick={handleMobileMenuNotLoggedInOn}
            alt="mobile menu not logged in"
          />
          <div className="navbar__notLoggedIn-buttons">
            <div className="navbar__notLoggedIn-page-container">
              <NavLink to="/">
                <button className="navbar__notLoggedIn-page">Home</button>
              </NavLink>
              <button
                className="navbar__notLoggedIn-signin"
                onClick={handleSignIn}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar__loggedIn">
          <img className="navbar__loggedIn-title" src={pageLogo} />
          <img
            className="navbar__loggedIn-mobileMenu"
            src={mobileMenuPage}
            onClick={handleMobileMenuLoggedInOn}
            alt="mobile menu logged in"
          />
          <div className="navbar__loggedIn-buttons">
            <div className="navbar__loggedIn-page-container">
              <NavLink to="/">
                <button className="navbar__loggedIn-page">Home</button>
              </NavLink>
              <NavLink to="/saved-news">
                <button
                  className="navbar__loggedIn-saved-articles"
                  onClick={handleProfileIn}
                >
                  Saved Articles
                </button>
              </NavLink>
              <div className="navbar__loogedIn-logout">
                <p className="navbar__loggedIn-logout-name">{currentUser}</p>
                <button
                  className="navbar__loggedIn-logout-button"
                  type="button"
                  aria-label="logout"
                  onClick={handleSignOut}
                >
                  <img
                    className=" mobileMenu__loggedIn-logout-image"
                    src={logoOutLogoPage}
                    alt="logo out logo page"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobileMenuNotLoggedIn && (
        <div className="mobileMenu" onClick={handleCloseOnOverlay}>
          <div className="mobileMenu__notLoggedIn-upper">
            <img
              className="mobileMenu__notLoggedIn-title"
              src={pageLogo}
              id="home"
            />
            <img
              className="mobileMenu__notLoggedIn-close"
              src={closeButton}
              onClick={handleMobileMenuNotLoggedInOff}
              alt="close button"
            />
          </div>
          <div className="mobileMenu__notLoggedIn-lower">
            <h2 className="mobileMenu__notLoggedIn-page">Home</h2>
            <button
              className="mobileMenu__notLoggedIn-signin"
              onClick={handleSignIn}
            >
              Sign in
            </button>
          </div>
        </div>
      )}
      {isMobileMenuLoggedIn && (
        <div className="mobileMenu" onClick={handleCloseOnOverlay}>
          <div className="mobileMene__loggedIn-upper">
            <img
              className="mobileMenu__loggedIn-title"
              src={pageLogo}
              id="home"
            />
            <img
              className="mobileMenu__loggedIn-close"
              src={closeButton}
              onClick={handleMobileMenuLoggedInOff}
              alt="close button"
            />
          </div>
          <div className="mobileMenu__loggedIn-lower">
            <h2 className="mobileMenu__loggedIn-page">Home</h2>
            <NavLink to="/saved-news">
              <button className="mobileMenu__loggedIn-savedArticles">
                Saved Articles
              </button>
            </NavLink>
            <div className="mobileMenu__loggedIn-logout">
              <p className="mobileMenu__loggedIn-logout-name">{currentUser}</p>
              <button
                className="mobileMenu__loggedIn-logout-button"
                type="button"
                aria-label="logout"
                onClick={handleSignOut}
              >
                <img
                  className="mobileMenu__loggedIn-logout-image"
                  src={logoOutLogoPage}
                  alt="logo out logo page"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarPage;
