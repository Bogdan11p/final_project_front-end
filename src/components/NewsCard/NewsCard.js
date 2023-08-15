import notSaved from "../../images/not-saved-news-logo.svg";
import saved from "../../images/saved-news-logo.svg";
import "../NewsCard/NewsCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const NewsCard = ({
  card,
  date,
  title,
  description,
  author,
  onSelectCard,
  _id,
  onCardSave,
  isLoggedIn,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const isSaved = card.saved.some((user) => user === currentUser._id);
  const cardSaveButtonClassName = `cards__save-btn ${
    isLoggedIn ? "cards__save-btn_active" : "cards__save-btn"
  } `;

  const renderNotSaved = () => {
    return (
      <div className="cards__save-btn-notSaved">
        <p className="cards__save-btn-message">Sign in to save articles</p>
        <button
          className={cardSaveButtonClassName}
          onClick={() => onCardSave(card._id, isSaved)}
        >
          <img
            className="cards__save"
            src={notSaved}
            alt="news card is not saved"
          />
        </button>
      </div>
    );
  };

  const renderSaved = () => {
    return (
      <button
        className={cardSaveButtonClassName}
        onClick={() => onCardSave(card._id, isSaved)}
      >
        <img className="cards__save" src={saved} alt="news card is saved" />
      </button>
    );
  };

  return (
    <div className="card">
      <div key={card._id} className="card__container">
        <div>
          <img
            src={card.imageUrl}
            alt={card.title}
            className="card__image"
            onClick={() => onSelectCard(card, isSaved)}
          />
        </div>
        <div className="card__date">{card.date}</div>
        <h1 className="card__title">{card.title}</h1>
        <p className="card_description">{card.description}</p>
        <div className="card__author">{card.author}</div>

        {isSaved ? renderSaved() : renderNotSaved()}
      </div>
    </div>
  );
};

export default NewsCard;
