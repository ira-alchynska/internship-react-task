import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalOpen } from "../../redux/modal/modalActions.js";
import ModalSelectors from "../../redux/modal/modalSelectors.js";
import { createPortal } from "react-dom";
import Button from "../Button/Button.jsx";
import Images from "../../images/index";
import "./styles.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ Form }) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(ModalSelectors.selectIsModalOpen);
  const modalData = useSelector(ModalSelectors.selectModalData);

  const onClose = () => {
    dispatch(setModalOpen());
  };

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

  if (!isModalOpen) return null;

  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">
        <Button
          className="button-close"
          type="button"
          icon={Images.close}
          onClick={onClose}
        />

        <Form currentItem={modalData} />
      </div>
    </div>,
    modalRoot
  );
}
