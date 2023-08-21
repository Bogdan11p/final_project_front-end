import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import logOutLogoProfile from "../../images/logout-profile.svg";
import logOutLogoPage from "../../images/logout-home.svg";
import closeButton from "../../images/close-icon.svg";
import mobileMenuProfile from "../../images/mobile-menu-profile.svg";
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
      <div className="navbar__profile">
        <NavLink to="/">
          <img
            className="navbar__profile-title"
            src={profileLogo}
            id="home"
            onClick={handleGoToPage}
          ></img>
        </NavLink>
        <img
          className="navbar__profile-mobileMenu"
          src={mobileMenuProfile}
          onClick={handleMobileMenuProfileOn}
          alt="mobile menu "
        />
        <div className="navbar__profile-buttons">
          <div className="navbar__profile-container">
            <NavLink to="/">
              <button className="navbar__profile-page">Home</button>
            </NavLink>
            <button className="navbar__profile-saved-articles">
              Saved Articles
            </button>
            <div className="navbar__profile-logout">
              <p className="navbar__profile-logout-name">{currentUser}</p>
              <button
                className="navbar__profile-logout-button"
                type="button"
                aria-label="logout"
                onClick={handleSignOut}
              >
                <img
                  className="navbar__profile-logout-image"
                  src={logOutLogoProfile}
                  alt="logo out logo page"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuProfile && (
        <div className="mobileMenu" onClick={handleCloseOnOverlay}>
          <div className="mobileMene__profile-upper">
            <img
              className="mobileMenu__profile-title"
              src={profileLogo}
              id="home"
            />
            <img
              className="mobileMenu__profile-close"
              src={closeButton}
              onClick={handleMobileMenuProfileOff}
              alt="close button"
            />
          </div>
          <div className="mobileMenu__profile-lower">
            <h2 className="mobileMenu__profile-page">Home</h2>
            <NavLink to="/saved-news">
              <button className="mobileMenu__loggedIn-savedArticles">
                Saved Articles
              </button>
            </NavLink>
            <div className="mobileMenu__profile-logout">
              <p className="mobileMenu__profile-logout-name">{currentUser}</p>
              <button
                className="mobileMenu__profile-logout-button"
                type="button"
                aria-label="logout"
                onClick={handleSignOut}
              >
                <img
                  className="mobileMenu__profile-logout-image"
                  src={logOutLogoProfile}
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

export default NavBarProfile;
