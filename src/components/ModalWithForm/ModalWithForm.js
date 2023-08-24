import "../ModalWithForm/ModalWithForm.css";
import { useEffect } from "react";

const ModalWithForm = ({
  children,
  buttonText = "",
  orButtonText = "",
  title,
  onClose,
  name,
  onSubmit,
  altButtonClick,
  isFormFilled,
}) => {
  const buttonClassName = isFormFilled
    ? "modal__submit modal__submit-valid"
    : "modal__submit";

  const handleCloseOnOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={`modal modal__type_${name}`}
      onClick={handleCloseOnOverlayClick}
    >
      <div className="modal__content">
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          <fieldset className="modal__fieldset">
            <button
              className="modal__close"
              type="button"
              onClick={onClose}
              aria-label="Close"
            ></button>
            <h2 className="modal__header">{title}</h2>
            {children}
            <div className="modal__buttons-down">
              <button
                className={buttonClassName}
                type="submit"
                disabled={!isFormFilled}
              >
                {buttonText}
              </button>
              <button
                className="modal__or"
                type="button"
                onClick={altButtonClick}
              >
                {orButtonText}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
