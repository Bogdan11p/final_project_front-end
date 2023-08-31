import "../NavBarPage/NavBarPage.css";
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

  return (
    <>
      {currentUser === null ? (
        <section className="navbar__nli">
          <img
            className="navbar__nli-title"
            src={pageLogo}
            id="home"
            alt="page logo"
          ></img>
          <button
            className="navbar__nli-mobilemenu"
            src={mobileMenuPage}
            onClick={handleMobileMenuNotLoggedInOn}
            alt="mobile menu not logged in"
          ></button>
          <div className="navbar__nli-buttons">
            <div className="navbar__nli-page-container">
              <NavLink to="/">
                <button className="navbar__nli-page">Home</button>
              </NavLink>
              <button className="navbar__nli-signin" onClick={handleSignIn}>
                Sign in
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="navbar__li">
          <img className="navbar__li-title" src={pageLogo} alt="page logo" />
          <button
            className="navbar__li-mobilemenu"
            src={mobileMenuPage}
            onClick={handleMobileMenuLoggedInOn}
            alt="mobile menu logged in"
          ></button>
          <div className="navbar__li-buttons">
            <div className="navbar__li-page-container">
              <NavLink to="/">
                <button className="navbar__li-page">Home</button>
              </NavLink>
              <NavLink to="/saved-news">
                <button
                  className="navbar__li-saved-articles"
                  onClick={handleProfileIn}
                >
                  Saved Articles
                </button>
              </NavLink>

              <button
                className="navbar__li-logout-button"
                type="button"
                aria-label="logout"
                onClick={handleSignOut}
              >
                {`${currentUser}`}{" "}
                <img
                  className=" mobileMenu__li-logout-image"
                  src={logoOutLogoPage}
                  alt="logo out logo page"
                />
              </button>
            </div>
          </div>
        </section>
      )}
      {isMobileMenuNotLoggedIn && (
        <div className="mobilemenu__page">
          <section className="mobilemenu" onClick={handleCloseOnOverlay}>
            <div className="mobilemenu__nli-upper">
              <img
                className="mobilemenu__nli-title"
                src={pageLogo}
                id="home"
                alt="page logo"
              />

              <img
                className="mobilemenu__nli-close"
                src={closeButton}
                onClick={handleMobileMenuNotLoggedInOff}
                alt="close button"
              />
            </div>
            <div className="mobilemenu__nli-lower">
              <h2 className="mobilemenu__nli-page">Home</h2>
              <button className="mobilemenu__nli-signin" onClick={handleSignIn}>
                Sign in
              </button>
            </div>
          </section>
        </div>
      )}
      {isMobileMenuLoggedIn && (
        <div className="mobilemenu__page">
          <section className="mobilemenu" onClick={handleCloseOnOverlay}>
            <div className="mobilemenu__li-upper">
              <img
                className="mobilemenu__li-title"
                src={pageLogo}
                id="home"
                alt="page logo"
              />

              <img
                className="mobilemenu__li-close"
                src={closeButton}
                onClick={handleMobileMenuLoggedInOff}
                alt="close button"
              />
            </div>
            <div className="mobilemenu__li-lower">
              <h2 className="mobilemenu__li-page">Home</h2>

              <NavLink to="/saved-news" style={{ textDecoration: "none" }}>
                <button className="mobilemenu__li-savedArticles">
                  Saved Articles
                </button>
              </NavLink>

              <button
                className="mobilemenu__li-logout-button"
                type="button"
                aria-label="logout"
                onClick={handleSignOut}
              >
                {`${currentUser}`}{" "}
                <img
                  className="mobilemenu__li-logout-image"
                  src={logoOutLogoPage}
                  alt="logo out logo page"
                />
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default NavBarPage;
