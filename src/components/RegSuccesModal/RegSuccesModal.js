import React from "react";

const RegSuccesModal = ({ onClose, handleOpenSignInModal }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <fieldset className="modal__fieldset">
          <button
            className="modal__close"
            type="button"
            onClick={onClose}
            aria-label="Close"
          ></button>
          <h2 className="modal__header">
            Registration successfully completed!
          </h2>
          <button
            className="modal__signin-button"
            type="button"
            onClick={handleOpenSignInModal}
          >
            Sign in
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default RegSuccesModal;
