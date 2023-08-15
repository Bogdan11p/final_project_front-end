import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ onClose, handleRegister, handleOpenSignInModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const isFormFilled =
    formData.email !== "" &&
    formData.password !== "" &&
    formData.username !== "";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const user = {
      email: formData.email,
      password: formData.password,
      username: formData.username,
    };
    handleRegister(user);
  };

  return (
    <ModalWithForm
      title="Sign up"
      name="Sign up"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign up"
      orButtonText="or Sign in"
      altButtonClick={handleOpenSignInModal}
      isFormFilled={isFormFilled}
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
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="modal__label">
          Password
          <input
            className="modal__input"
            placeholder="Enter password"
            required
            name="password"
            type="password"
            id="input-password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label className="modal__label">
          Username
          <input
            className="modal__input"
            placeholder="Enter your username"
            type="text"
            required
            name="username"
            id="input-name"
            minLength="1"
            maxLength="30"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
