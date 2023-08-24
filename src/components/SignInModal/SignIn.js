import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SignInModal = ({
  onClose,
  handleSignIn,
  handleOpenRegisterModal,

  isLoading,
  isActive,
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
      });
    }
  }, [isActive, setValues]);

  function handleSubmit(e) {
    handleSignIn(values);
    e.preventDefault();
  }

  return (
    <ModalWithForm
      title="Sign in"
      name="Sign in"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Signing in" : "Sign in"}
      orButtonText="or Sign up"
      altButtonClick={handleOpenRegisterModal}
      isFormFilled={isFormValid}
    >
      <div className="modal__label-container">
        <label className="modal__label">Email</label>
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
          value={values.email}
          onChange={handleInputChange}
        />
        {isInvalid.email && (
          <ErrorMessage
            errorMessage={"Invalid email address"}
            className={"error-message error-message__signin-email"}
          />
        )}

        <label className="modal__label">Password</label>
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Enter password"
          required
          id="input-password"
          value={values.password}
          onChange={handleInputChange}
          minLength="4"
          maxLength="35"
        />
        {isInvalid.password && (
          <ErrorMessage
            errorMessage={"Invalid password"}
            className={`error-message error-message__signin-password`}
          />
        )}
      </div>
    </ModalWithForm>
  );
};

export default SignInModal;
