import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./styles.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose }) {
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
      <div className="Modal__content"></div>
    </div>,
    modalRoot
  );
}
