import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Form from "../ModalForm/Form";
import Button from "../Button/Button";
import Images from "../../images";
import "./styles.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({
  currentItem,
  formValues,
  setFormValues,
  onClose,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">
        <Button
          className="button-close"
          type="button"
          icon={Images.close}
          onClick={onClose}
        />

        <Form
          currentItem={currentItem}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </div>
    </div>,
    modalRoot
  );
}
