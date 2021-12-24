import { SET_MODAL_OPEN, SET_MODAL_DATA } from "../modal/modalTypes";

const initialState = {
  isModalOpen: false,
  modalData: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    case SET_MODAL_DATA:
      return {
        ...state,
        modalData: action.payload,
      };

    default:
      return state;
  }
};
