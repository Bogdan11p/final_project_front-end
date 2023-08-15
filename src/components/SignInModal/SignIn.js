import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignInModal = ({ onClose, handleSignIn, handleOpenRegisterModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const isFormFilled = formData.email !== "" && formData.password !== "";

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const user = {
      email: formData.email,
      password: formData.password,
    };
    handleSignIn(user);
  };

  /* const { email, password } = formData; */

  /* React.useEffect(() => {
    setFormData[email]("");
    setFormData[password]("");
  }, []); */

  return (
    <ModalWithForm
      title="Sign in"
      name="Sign in"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign in"
      orButtonText="or Sign up"
      altButtonClick={handleOpenRegisterModal}
      isFormFilled={isFormFilled}
    >
      <div className="modal__label-container">
        <label className="modal__label">
          Email
          <input
            className="modal__input"
            type="email"
            name="email"
            pattern="[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}"
            placeholder="Enter email"
            required
            id="input-Email"
            minLength="1"
            maxLength="30"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="modal__label">
          Password
          <input
            type="password"
            name="password"
            className="modal__input"
            placeholder="Enter password"
            required
            id="input-password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default SignInModal;
