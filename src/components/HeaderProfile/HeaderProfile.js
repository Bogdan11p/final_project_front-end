import "../HeaderProfile/HeaderProfile.css";

import React, { useContext } from "react";
import NavBarProfile from "../NavBarProfile/NavBarProfile";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const HeaderProfile = ({
  handleProfileLeave,
  handleSignOut,
  handleVisibleReset,
  savedNewsArticles,
}) => {
  const currentUser = useContext(CurrentUserContext);

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
    <header className="header__profile">
      <NavBarProfile
        handleProfileLeave={handleProfileLeave}
        handleSignOut={handleSignOut}
        handleVisibleReset={handleVisibleReset}
      />

      <h2 className="header__profile-title">Saved articles</h2>
      <h3 className="header__profile-articles">{`${currentUser}, you have ${savedNewsArticles.length} saved articles`}</h3>
      <div className="header__profile-container">
        <p className="header__profile-keywords">
          By keywords:{""}
          <span className="header__profile-examples">
            {keywordString ? keywordString : ""}
          </span>{" "}
        </p>
      </div>
    </header>
  );
};

export default HeaderProfile;
