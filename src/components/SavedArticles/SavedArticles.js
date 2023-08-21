import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { NavLink } from "react-router-dom";
import headerLogoProfile from "../../images/header-logo-profile.svg";
import logoutLogoProfile from "../../images/logout-profile.svg";

const SavedArticles = ({
  savedNewsArticles,
  handleArticlesReset,
  handleLogOut,
}) => {
  const currentUser = React.useContext(CurrentUserContext);

  const keywords = savedNewsArticles.map((article) => article.keyword);

  const getKeywordString = (data) => {
    if (keywords.length === 1) {
      return `${keywords[0]}`;
    }

    if (keywords.length > 1) {
      const count = {};

      for (const keyword of data) {
        if (count[keyword]) {
          count[keyword]++;
        } else {
          count[keyword] = 1;
        }
      }

      const counted = [];
      for (const item in count) {
        counted.push([item, count[item]]);
      }

      counted.sort((a, b) => {
        return b[1] - a[1];
      });

      if (counted.length === 1) {
        return `${counted[0][0]}`;
      } else if (counted.length === 2) {
        return `${counted[0][0]} and ${counted[1][0]}`;
      } else {
        return `${counted[0][0]}, ${counted[1][0]}, and ${
          counted.length - 2
        } more`;
      }
    } else {
      return null;
    }
  };

  const keywordString = getKeywordString(keywords);

  return (
    <>
      <div className="header__savedArticles">
        <div className="header__savedArticles-left">
          <NavLink to="/" className="header__link-profile">
            <img
              className="header__logo-profile"
              src={headerLogoProfile}
              alt="news logo profile"
            />
          </NavLink>
        </div>
        <div className="header__savedArticles-right">
          <NavLink to="/" className="header__link-profile">
            <p className="header__home-profile">Home</p>
          </NavLink>
          <NavLink to="/saved-news" className="header__link-profile">
            <p className="header__savedArticles-list">Saved articles</p>
          </NavLink>
          <div className="header__savedArticles-logout">
            <p className="header__savedArticles-logout-name">{currentUser}</p>
            <button
              className="header__savedArticles-logout-button"
              type="button"
              aria-label="logout"
              onClick={handleLogOut}
            >
              <img src={logoutLogoProfile} alt="logout logo" />
            </button>
          </div>
        </div>
      </div>
      <h1 className="header__savedArticles-title">Saved articles</h1>
      <h2 className="header__savedArticles-number">{`${currentUser}, you have ${savedNewsArticles.length} saved articles`}</h2>
      <div className="header__savedArticles-container">
        <h2 className="header__savedArticles-keywords">
          By keywords:{" "}
          <span className="savedArticles__examples">
            {keywordString ? keywordString : ""}
          </span>{" "}
        </h2>
      </div>
    </>
  );
};

export default SavedArticles;
