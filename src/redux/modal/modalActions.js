import { SET_MODAL_DATA, SET_MODAL_OPEN } from "../modal/modalTypes";

export const setModalOpen = () => {
  return {
    type: SET_MODAL_OPEN,
  };
};

export const setModalData = (payload) => {
  return {
    type: SET_MODAL_DATA,
    payload,
  };
};
