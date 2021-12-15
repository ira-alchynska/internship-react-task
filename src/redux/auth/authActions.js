import { SET_IS_AUTHENTICATED } from "./authTypes";

export const setIsAuthenticated = (payload) => ({
  type: SET_IS_AUTHENTICATED,
  payload,
});
