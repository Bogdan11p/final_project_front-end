import "../SearchForm/SearchForm.css";
import React, { useState } from "react";

const SearchForm = ({ handleGetArticles }) => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isQuery, setIsQuery] = useState("");

  const buttonClassName = isSearchClicked
    ? "search__form_button-clicked"
    : "search__form_button";

  const handleSearchClick = (e) => {
    e.preventDefault();
    setIsSearchClicked(true);
    setTimeout(function () {
      setIsSearchClicked(false);
    }, 100);
    handleGetArticles(`${isQuery.toLowerCase()}`);
  };

  return (
    <form className="search__form">
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
    </form>
  );
};

export default SearchForm;
