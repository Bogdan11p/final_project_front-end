import "../NewsCard/NewsCard.css";
import React, { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { handleDateFormat } from "../../utils/Constants";
import trashLogo from "../../images/trash-logo.svg";
import { Link } from "react-router-dom";

const NewsCard = ({
  articleInfo,
  handleDeleteArticle,
  handleSaveArticle,
  index,
  showsOnProfile,
  keyword,
  savedNewsArticles,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const [isHovering, setIsHovering] = useState(-1);

  const card = {
    keyword: keyword || articleInfo.keyword,
    title: articleInfo.title,
    text: articleInfo.description || articleInfo.text,
    date: articleInfo.publishedAt || articleInfo.date,
    source: articleInfo.source.name || articleInfo.source,
    link: articleInfo.url || articleInfo.link,
    image: articleInfo.urlToImage || articleInfo.image,
    id: articleInfo._id || articleInfo.id,
  };

  const isBookmarked = savedNewsArticles.some(
    (article) => article.link === card.link
  );

  const handleSaveButtonClick = (e) => {
    if (e.target.classList.contains("card__button-active")) {
      handleDeleteArticle(card);
    } else {
      handleSaveArticle(card);
    }
  };

  const handleDeleteButtonClick = () => {
    handleDeleteArticle(card);
  };

  const cardButtonClassName = isBookmarked
    ? "card__button card__button-active"
    : "card__button card__button-inactive";

  return (
    <>
      <div className="card">
        <Link
          to={{ pathname: `${card.link}` }}
          style={{ textDecoration: "none", alignSelf: "center" }}
          target="_blank"
        >
          <img className="card__image" src={card.image} alt={card.title} />

          <h3 className="card__date">
            {handleDateFormat(card.date.slice(0, 10))}
          </h3>
          <h2 className="card__title">{card.title}</h2>
          <h3 className="card__description" id="js-toclamp">
            {card.text}
          </h3>
          <h4 className="card__author">{card.source}</h4>
          <div
            className={`${
              isHovering === index
                ? "card__signin-toSee"
                : "card__signin-toSee-notShown"
            }`}
          >
            {showsOnProfile ? (
              <p>Remove from saved</p>
            ) : (
              <p>Sign in to save articles</p>
            )}
          </div>
        </Link>
        <div>
          {showsOnProfile ? (
            <button className="card__button">
              <img
                className="card__save"
                onClick={handleDeleteButtonClick}
                src={trashLogo}
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => {
                  setIsHovering(-1);
                }}
                alt="icon of save"
              ></img>
            </button>
          ) : (
            <button
              className={cardButtonClassName}
              onClick={currentUser !== null ? handleSaveButtonClick : undefined}
              onMouseEnter={
                currentUser === null ? () => setIsHovering(index) : undefined
              }
              onMouseLeave={
                currentUser === null ? () => setIsHovering(-1) : undefined
              }
            ></button>
          )}
        </div>
        {showsOnProfile && (
          <div className="card__subtitle">
            <p className="card__subtitle-content">{articleInfo.keyword}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsCard;
