import React, { useState, useEffect } from "react";
import { Route, Swtich, Redirect, useNavigate } from "react-router-dom";
import "./App.css";

import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import SignInModal from "../SignInModal/SignIn";
import RegisterModal from "../RegistrationModal/RegistrationModal";
import RegSuccesModal from "../RegSuccesModal/RegSuccesModal";
import Page from "../Page/Page";
import userApi from "../../utils/UserApi";
import newsApi from "../../utils/NewsApi";
import cardApi from "../../utils/CardApi";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [activeModal, setActiveModal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showsOnProfile, setShowsOnProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [keyword, setKeyword] = useState(null);
  const [newCards, setNewCards] = useState({});
  const [visible, setVisible] = useState(3);
  const [savedNewsArticles, setSavedNewsArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [authError, setAuthError] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  // useEffect

  useEffect(() => {
    if (token) {
      cardApi
        .getUser(token)
        .then((data) => {
          setCurrentUser(data.data.name);
          getUserArticles(token);
          handleCloseModal();
        })
        .catch((error) => {
          if (String(error).includes("401")) {
            localStorage.removeItem("jwt");
          } else {
            console.error("token check error:", error);
          }
        });
    }
  }, [token]);

  useEffect(() => {
    setVisible(3);
  }, []);

  // api

  const getUserArticles = (token) => {
    cardApi
      .getArticles(token)
      .then((data) => {
        setSavedNewsArticles(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetArticles = (input) => {
    const keyword =
      input.charAt(0).toUpperCase() + input.replace(/ .*/, "").slice(1);
    setKeyword(keyword);
    setIsLoading(true);
    newsApi
      .search({ input })
      .then((data) => {
        setNewCards(data.articles);
        localStorage.setItem("articles", JSON.stringify(data.articles));
        localStorage.setItem("keyword", keyword);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        setVisible(3);
      });
  };

  const handleDeleteArticle = (card) => {
    cardApi.getArticles(token).then((data) => {
      console.log(data);
      console.log(data.data.length);
      const handleGetArticleId = data.data.some((article) => {
        return article.link === card.link;
      });
      const articleDeleted = handleGetArticleId
        ? data.data.find((article) => {
            return article.link === card.link;
          })
        : undefined;

      setSelectedArticleId(articleDeleted._id);
      console.log(articleDeleted._id);
      console.log(selectedArticleId);
      cardApi
        .deleteArticle(articleDeleted._id, token)
        .then(() => {
          const updatedSavedArticles = savedNewsArticles.filter(
            (article) => article._id !== articleDeleted._id
          );
          setSavedNewsArticles([...updatedSavedArticles]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const handleSignIn = (inputValues) => {
    setIsLoading(true);
    console.log("logging in now");
    userApi
      .signin(inputValues)
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          getUserArticles(data.token);
          handleCloseModal();
        } else setAuthError(data.message || "Incorrect email or passowrd");
      })
      .catch((err) => {
        if (String(err).includes("401") || String(err).includes("400")) {
          console.log("Incorrect email or password");
        } else {
          console.log(err);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegister = ({ email, password, name }) => {
    setIsLoading(true);
    userApi
      .signUp({ email, password, name })
      .then((res) => {
        handleCloseModal();
        handleOpenRegSuccesModal();
      })
      .catch((err) => {
        if (String(err).includes("409")) {
          console.log("Email already in use");
        } else {
          console.log(err);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSaveArticle = (card) => {
    cardApi
      .saveArticle(card, token)
      .then((data) => {
        setSavedNewsArticles([...savedNewsArticles, data.data]);
        setSelectedArticleId(data.data._id);
      })
      .catch((err) => {
        console.log(savedNewsArticles);
        console.log(err);
      });
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

  const handleButtonRegClick = () => {
    handleOpenRegSuccesModal();
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSignOut = () => {
    setCurrentUser("");
    localStorage.clear();
    handleProfileLeave();
    navigate("/");
  };

  const handleProfileLeave = () => {
    setShowsOnProfile(false);
    setNewCards({});
    console.log("profile false");
  };

  return (
    <div>
      <Footer />
      {activeModal === "SignIn" && (
        <SignInModal
          onClose={handleCloseModal}
          handleOpenRegisterModal={handleOpenRegsitrationModal}
          handleSignIn={handleSignIn}
          isLoading={isLoading}
          isActive={true}
        />
      )}
      {activeModal === "Registration" && (
        <RegisterModal
          onClose={handleCloseModal}
          handleOpenSignInModal={handleOpenLogInModal}
          handleOpenRegSuccesModal={handleOpenRegSuccesModal}
          handleRegister={handleRegister}
          isActive={true}
          handleOpenRegisterSuccesModal={handleButtonRegClick}
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
