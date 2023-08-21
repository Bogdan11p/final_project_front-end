import "../NothingFound/NothingFound.css";
import noResults from "../../images/not-found.svg";

const NothingFound = () => {
  return (
    <div className="nothing__found">
      <img className="nothing__found-image" src={noResults} alt="no results" />
      <h2 className="nothing__found-title">Nothing found</h2>
      <h3 className="nothing__found-subtitle">
        Sorry, but nothing matched your search terms.
      </h3>
    </div>
  );
};

export default NothingFound;
