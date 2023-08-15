import React, { useState } from "react";
import "./App.css";

import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import SignInModal from "../SignInModal/SignIn";
import RegisterModal from "../RegistrationModal/RegistrationModal";
import RegSuccesModal from "../RegSuccesModal/RegSuccesModal";
import Main from "../Main/Main";
import About from "../About/About";
import userApi from "../../utils/UserApi";
import getNewsArticles from "../../utils/NewsApi";
import cardApi from "../../utils/CardApi";
import { APIkey } from "../../utils/Constants";
import { useMatch } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");
  const [newsArticles, setNewsArticles] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const match = useMatch("/");

  // useEffect

  React.useEffect(() => {
    if (localStorage.getItem("articles")) {
      setNewsArticles(JSON.parse(localStorage.getItem("articles")));
      setKeyword(localStorage.getItem("keyword"));
    }
  }, []);

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      userApi
        .checkTokenValidity(jwt)
        .then((res) => {
          setCurrentUser(res.data);
          setToken(jwt);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    }
  }, [token]);

  const handleSignIn = ({ email, password }) => {
    userApi
      .signin(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        if (data.token) {
          return userApi.checkTokenValidity(data.token);
        }
      })
      .then((res) => {
        const data = res.data;
        setCurrentUser(res);
        setToken(data.token);

        handleCloseModal();
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  // modals

  const handleOpenSearchLoader = () => {
    setActiveModal("preloader");
  };

  const handleOpenRegsitrationModal = () => {
    setActiveModal("Registration");
  };

  const handleOpenLogInModal = () => {
    setActiveModal("SignIn");
  };

  const handleOpenRegSuccesModal = () => {
    setActiveModal("RegSucces");
  };

  /* const handleOpenToLogInToSaveNews = () => {
    setActiveModal("LogInToSaveNews");
  }; */

  const handleButtonRegClick = () => {
    handleOpenRegSuccesModal();
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div>
      <Main
        isLoggedIn={isLoggedIn}
        handleOpenPreloader={handleOpenSearchLoader}
        handleOpenSignInModal={handleOpenLogInModal}
      />
      {activeModal === "preloader" && <Preloader />}
      <About />
      <Footer />
      {activeModal === "SignIn" && (
        <SignInModal
          onClose={handleCloseModal}
          handleOpenRegisterModal={handleOpenRegsitrationModal}
        />
      )}
      {activeModal === "Registration" && (
        <RegisterModal
          onClose={handleCloseModal}
          handleOpenSignInModal={handleOpenLogInModal}
          handleOpenRegSuccesModal={handleOpenRegSuccesModal}
          handleRegister={handleButtonRegClick}
        />
      )}
      {activeModal === "RegSucces" && (
        <RegSuccesModal
          onClose={handleCloseModal}
          handleOpenSignInModal={handleOpenLogInModal}
        />
      )}
    </div>
  );
}

export default App;
