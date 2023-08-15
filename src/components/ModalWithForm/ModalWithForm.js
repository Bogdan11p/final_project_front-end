import "../ModalWithForm/ModalWithForm.css";

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
  return (
    <div className={`modal modal__type_${name}`}>
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
                className="modal__submit"
                type="submit"
                disabled={!isFormFilled}
                style={{
                  backgroundColor: isFormFilled ? "#2F71E5" : "#E6E8EB",
                  color: isFormFilled ? "white" : "#B6BCBF",
                }}
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
