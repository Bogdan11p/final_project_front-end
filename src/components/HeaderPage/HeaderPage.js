import "./HeaderPage.css";
import React from "react";
import NavBarPage from "../NavBarPage/NavBarPage";
import SearchForm from "../SearchForm/SearchForm";

const HeaderPage = ({
  handleSavedArticlesButton,
  handleGetArticles,
  handleSignIn,
  handleSignOut,
  handleOpenMobileMenuNotLoggedIn,
}) => {
  return (
    <header className="header__page">
      <NavBarPage
        handleSavedArticlesButton={handleSavedArticlesButton}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
        handleOpenMobileMenuNotLoggedIn={handleOpenMobileMenuNotLoggedIn}
      />
      <div className="header__page-container">
        <div className="header__page-text">
          <h1 className="header__page-title">What's going on in the world?</h1>
          <h2 className="header__page-subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </h2>
        </div>
        <SearchForm handleGetArticles={handleGetArticles} />
      </div>
    </header>
  );
};

export default HeaderPage;
