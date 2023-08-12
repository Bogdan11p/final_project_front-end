import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInModal = ({ onClose, handleSignIn, handleOpenRegisterModal }) => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!emailValue || !passwordValue) {
      return;
    }
    const user = { email: emailValue, password: passwordValue };
    handleSignIn(user);
  };

  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);
  return (
    <ModalWithForm
      title="Sign in"
      name="Sign in"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign in"
      orButtonText="or Sign up"
      altButtonClick={handleOpenRegisterModal}
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
      </div>
    </ModalWithForm>
  );
};

export default SignInModal;
