import React from "react";

const RegSuccesModal = ({ onClose, handleOpenSignInModal }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        ></button>
        <h2 className="modal__header">Registration successfully completed!</h2>
        <button
          className="modal__signin-button"
          type="button"
          onClick={handleOpenSignInModal}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default RegSuccesModal;
