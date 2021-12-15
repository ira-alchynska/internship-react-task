import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalOpen } from "../../redux/countries/actions";
import CountriesSelectors from "../../redux/countries/selectors";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import Images from "../../images";
import "./styles.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ Form }) {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(CountriesSelectors.selectIsModalOpen);
  const modalData = useSelector(CountriesSelectors.selectModalData);

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
