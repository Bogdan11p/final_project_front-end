import "../Main/Main.css";
import React from "react";
import Header from "../Header/Header";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

const Main = ({
  isLoggedIn,
  handleOpenPreloader,
  handleOpenSignInModal,
  isLoading,
}) => {
  return (
    <div className="main">
      <div className="main__header">
        <Header
          isLoggedIn={isLoggedIn}
          handleOpenPreloader={handleOpenPreloader}
          handleOpenSignInModal={handleOpenSignInModal}
          isLoading={isLoading}
        />
      </div>
      <div className="main__page">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <SearchForm
          handleOpenPreloader={handleOpenPreloader}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Main;
