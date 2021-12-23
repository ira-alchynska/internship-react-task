import { SET_IS_AUTHENTICATED } from "./authTypes";

const isAuth = localStorage.getItem("isAuthenticated");
console.log(isAuth, "login");
const initialState = {
  isAuthenticated: JSON.parse(isAuth) || false,
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
