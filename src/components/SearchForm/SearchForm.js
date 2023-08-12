import "../SearchForm/SearchForm.css";
import React from "react";

const SearchForm = ({ handleOpenPreloader }) => {
  return (
    <form className="search__form">
      <input
        className="search__form-input"
        type="text"
        placeholder="Enter topic"
        minLength="1"
        maxLength="30"
        name="topic"
        id="topic-search"
      />
      <button
        className="search__form-button"
        type="button"
        aria-label="search"
        onClick={handleOpenPreloader}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
