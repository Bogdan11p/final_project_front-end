import "../SearchArticles/SearchArticles.css";

import React, { useEffect } from "react";

import NewsCardList from "../NewCardList/NewCardList";

const SearchArticlesProfile = ({
  handleDeleteArticle,
  handleSaveArticle,
  handleSavedArticlesButton,
  showsOnProfile,

  keyword,
  savedNewsArticles,

  visible,
}) => {
  const searchArticlesClassname =
    visible === 3 ? "search__articles" : "search__articles-active";

  useEffect(() => {
    handleSavedArticlesButton();
    console.log("showsOnProfile is true");
  }, [handleSavedArticlesButton]);

  return (
    <div className="search">
      <h2 className="search__title">Search results</h2>
      <ul className={searchArticlesClassname}>
        <NewsCardList
          handleDeleteArticle={handleDeleteArticle}
          handleSaveArticle={handleSaveArticle}
          showsOnProfile={showsOnProfile}
          keyword={keyword}
          newsCards={savedNewsArticles}
          savedNewsArticles={savedNewsArticles}
          visible={visible}
        />
      </ul>
    </div>
  );
};

export default SearchArticlesProfile;
