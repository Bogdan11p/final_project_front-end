import "../SearchForm/SearchForm.css";
import React, { useState } from "react";

const SearchForm = ({ handleGetArticles }) => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isQuery, setIsQuery] = useState("");

  const buttonClassName = isSearchClicked
    ? "search__form-button-clicked"
    : "search__form-button";

  const handleSearchClick = () => {
    setIsSearchClicked(true);
    setTimeout(function () {
      setIsSearchClicked(false);
    }, 100);
    handleGetArticles(`${isQuery.toLowerCase()}`);
  };

  return (
    <section className="search__form">
      <input
        className="search__form-input"
        type="text"
        placeholder="Enter topic"
        onChange={(e) => setIsQuery(e.target.value)}
        value={isQuery}
      />
      <button
        className={buttonClassName}
        type="button"
        aria-label="search"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </section>
  );
};

export default SearchForm;
