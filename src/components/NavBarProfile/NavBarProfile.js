import "../NavBarProfile/NavBarProfile.css";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import logOutLogoProfile from "../../images/logout-profile.svg";
import logOutLogoPage from "../../images/logout-home.svg";
import closeButton from "../../images/close-icon.svg";
import mobileMenuProfile from "../../images/mobile-menu-profile.svg";
import pageLogo from "../../images/header-logo-home.svg";
import profileLogo from "../../images/header-logo-profile.svg";

const NavBarProfile = ({
  handleVisibleReset,
  handleSignOut,
  handleProfileLeave,
}) => {
  const [isMobileMenuProfile, setIsMobileMenuProfile] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const handleMobileMenuProfileOn = () => {
    setIsMobileMenuProfile(true);
  };

  const handleMobileMenuProfileOff = () => {
    setIsMobileMenuProfile(false);
  };

  const handleCloseOnOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuProfile(false);
    }
  };

  const handleGoToPage = () => {
    handleVisibleReset();
    handleProfileLeave();
  };

  return (
    <>
      <section className="navbar__profile">
        <NavLink to="/">
          <img
            className="navbar__profile-title"
            src={profileLogo}
            id="home"
            onClick={handleGoToPage}
            alt="profile logo"
          ></img>
        </NavLink>
        <button
          className="navbar__profile-mobilemenu"
          src={mobileMenuProfile}
          onClick={handleMobileMenuProfileOn}
          alt="mobile menu "
        ></button>
        <div className="navbar__profile-buttons">
          <div className="navbar__profile-container">
            <NavLink to="/">
              <button className="navbar__profile-page">Home</button>
            </NavLink>
            <button className="navbar__profile-saved-articles">
              Saved Articles
            </button>

            <button
              className="navbar__profile-logout-button"
              type="button"
              aria-label="logout"
              onClick={handleSignOut}
            >
              {`${currentUser}`}{" "}
              <img
                className="navbar__profile-logout-image"
                src={logOutLogoProfile}
                alt="logo out logo page"
              />
            </button>
          </div>
        </div>
      </section>

      {isMobileMenuProfile && (
        <div className="mobilemenu__page">
          <section className="mobilemenu" onClick={handleCloseOnOverlay}>
            <div className="mobilemenu__profile-upper">
              <NavLink to="/">
                <img
                  className="mobilemenu__profile-title"
                  src={pageLogo}
                  id="home"
                  alt="page logo"
                />
              </NavLink>
              <img
                className="mobilemenu__profile-close"
                src={closeButton}
                onClick={handleMobileMenuProfileOff}
                alt="close button"
              />
            </div>
            <div className="mobilemenu__profile-lower">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <h2
                  className="mobilemenu__profile-page"
                  onClick={handleGoToPage}
                >
                  Home
                </h2>
              </NavLink>
              <NavLink to="/saved-news" style={{ textDecoration: "none" }}>
                <button className="mobilemenu__li-savedarticles">
                  Saved Articles
                </button>
              </NavLink>

              <button
                className="mobilemenu__profile-logout-button"
                type="button"
                aria-label="logout"
                onClick={handleSignOut}
              >
                {`${currentUser}`}{" "}
                <img
                  className="mobilemenu__profile-logout-image"
                  src={logOutLogoPage}
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

export default NavBarProfile;
