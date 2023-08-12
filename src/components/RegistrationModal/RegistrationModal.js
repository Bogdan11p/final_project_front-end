import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  onClose,
  handleRegister,
  handleOpenSignInModal,
  handleOpenRegSuccesModal,
}) => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [usernameValue, setUsernameValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const user = {
      email: emailValue,
      password: passwordValue,
      username: usernameValue,
    };
    handleRegister(user);
    handleOpenRegSuccesModal();
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const onUsernameChange = (evt) => {
    setUsernameValue(evt.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setUsernameValue("");
  }, []);
  return (
    <ModalWithForm
      title="Sign up"
      name="Sign up"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign up"
      orButtonText="or Sign in"
      altButtonClick={handleOpenSignInModal}
    >
      <div className="modal__label-container">
        <label className="modal__label">
          Email
          <input
            className="modal__input"
            type="email"
            placeholder="Enter email"
            required
            name="email"
            id="input-Email"
            minLength="1"
            maxLength="30"
            value={emailValue}
            onChange={onEmailChange}
          />
        </label>
        <label className="modal__label">
          Password
          <input
            className="modal__input"
            placeholder="Enter password"
            required
            name="password"
            id="input-password"
            value={passwordValue}
            onChange={onPasswordChange}
          />
        </label>
        <label className="modal__label">
          Username
          <input
            className="modal__input"
            placeholder="Enter your username"
            type="text"
            required
            name="name"
            id="input-name"
            minLength="1"
            maxLength="30"
            value={usernameValue}
            onChange={onUsernameChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
