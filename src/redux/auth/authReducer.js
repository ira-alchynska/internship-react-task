import { SET_IS_AUTHENTICATED } from "./authTypes";

const isLogin = localStorage.getItem("userId");

const initialState = {
  isAuthenticated: false,
  userId: JSON.parse(isLogin) || "userId",
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
