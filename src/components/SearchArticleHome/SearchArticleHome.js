import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import NothingFound from "../NothingFound/NothingFound";
import NewsCardList from "../NewCardList/NewCardList";

const SearchArticlesHome = ({
  handleDeleteArticle,
  handleSaveArticle,
  showsOnProfile,
  keyword,
  newsCards,
  savedNewsArticles,
  showMoreArticles,
  visible,
}) => {
  const searchCardsClassname =
    visible === 3 ? "search__cards" : "search__cards__active";

  const searchContainerClassname =
    newsCards.length > 3 ? "search__container" : "search__container__no-button";

  return (
    <>
      {newsCards.length > 0 && (
        <div className="search">
          <div className={searchContainerClassname}>
            <h2 className="search__title">Search results</h2>
            <div className={searchArticlesClassname}>
              <NewsCardList
                handleDeleteArticle={handleDeleteArticle}
                handleSaveArticle={handleSaveArticle}
                showsOnProfile={showsOnProfile}
                keyword={keyword}
                newsCards={newsCards}
                savedNewsArticles={savedNewsArticles}
                visible={visible}
              />
            </div>
            {visible === 3 && newsCards.length > 3 && (
              <button className="search__button" onClick={showMoreArticles}>
                Show more
              </button>
            )}
          </div>
        </div>
      )}
      {newsCards.length <= 0 && <NothingFound />}
    </>
  );
};

export default SearchArticlesHome;
