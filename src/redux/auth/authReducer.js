import { SET_IS_AUTHENTICATED } from "./authTypes";

const isAuthenticated = localStorage.getItem("isAuthenticated");

const initialState = {
  isAuthenticated: JSON.parse(isAuthenticated) || false,
  userId: 1,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};
