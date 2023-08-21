import "../Main/Main.css";
import React from "react";
import Header from "../HeaderPage/HeaderPage";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

const Main = ({
  isLoggedIn,
  handleGetArticles,
  handleOpenSignInModal,
  isLoading,
  handleOpenProfileArticles,
  handleDeleteArticle,
}) => {
  return (
    <div className="main">
      <div className="main__header">
        <Header
          isLoggedIn={isLoggedIn}
          handleOpenSignInModal={handleOpenSignInModal}
          isLoading={isLoading}
          handleOpenProfileArticles={handleOpenProfileArticles}
        />
      </div>
      <div className="main__page">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <SearchForm handleGetArticles={handleGetArticles} />
      </div>
    </div>
  );
};

export default Main;
