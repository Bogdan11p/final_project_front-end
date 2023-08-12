import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import SignInModal from "../SignInModal/SignIn";
import RegisterModal from "../RegistrationModal/RegistrationModal";
import RegSuccesModal from "../RegSuccesModal/RegSuccesModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState({});

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
    handleCloseModal("Registration");
    handleOpenRegSuccesModal();
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div>
      <Header
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
