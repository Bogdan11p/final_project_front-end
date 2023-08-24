import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const RegisterModal = ({
  onClose,
  handleRegister,
  handleOpenSignInModal,
  isLoading,
  isActive,
  handleOpenRegisterSuccesModal,
}) => {
  const {
    values,
    handleInputChange,
    setValues,
    isFormValid,
    setIsFormValid,
    isInvalid,
  } = useForm({
    email: "",
    password: "",
    name: "",
  });

  React.useEffect(() => {
    if (Object.values(isInvalid).every((item) => item === false)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isInvalid, setIsFormValid]);

  React.useEffect(() => {
    if (isActive) {
      setValues({
        email: "",
        password: "",
        name: "",
      });
    }
  }, [isActive, setValues]);

  function handleSubmit(e) {
    handleRegister(values);
    handleOpenRegisterSuccesModal();
    e.preventDefault();
  }
  return (
    <ModalWithForm
      title="Sign up"
      name="Sign up"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Registering..." : "Sign up"}
      orButtonText="or Sign in"
      altButtonClick={handleOpenSignInModal}
      isFormFilled={isFormValid}
    >
      <div className="modal__label-container">
        <label className="modal__label">Email</label>
        <input
          className="modal__input"
          type="email"
          placeholder="Enter email"
          required
          name="email"
          id="input-Email"
          minLength="1"
          maxLength="30"
          value={values.email}
          onChange={handleInputChange}
        />
        {isInvalid.email && (
          <ErrorMessage
            errorMessage={"Invalid email address"}
            className={"error-message error-message__register-email"}
          />
        )}
        <label className="modal__label">Password</label>
        <input
          className="modal__input"
          placeholder="Enter password"
          required
          name="password"
          type="password"
          id="input-password"
          value={values.password}
          onChange={handleInputChange}
          minLength="4"
          maxLength="35"
        />
        {isInvalid.password && (
          <ErrorMessage
            errorMessage={"Invalid password"}
            className={"error-message error-message__register-password"}
          />
        )}
        <label className="modal__label">Username</label>
        <input
          className="modal__input"
          placeholder="Enter your username"
          type="text"
          required
          name="name"
          id="input-name"
          minLength="2"
          maxLength="30"
          value={values.username}
          onChange={handleInputChange}
        />
        {isInvalid.name && (
          <ErrorMessage
            errorMessage={"Invalid username"}
            className={"error-message error-message__register-username"}
          />
        )}
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
