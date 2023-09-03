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
    <header className="headerpage">
      <NavBarPage
        handleSavedArticlesButton={handleSavedArticlesButton}
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
        handleOpenMobileMenuNotLoggedIn={handleOpenMobileMenuNotLoggedIn}
      />
      <div className="headerpage__container">
        <div className="headerpage__container-text">
          <h1 className="headerpage__container-title">
            What's going on in the world?
          </h1>
          <h2 className="headerpage__container-subtitle">
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
