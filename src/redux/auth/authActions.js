import { SET_IS_AUTHENTICATED, SET_USER_ID } from "./authTypes";

export const setIsAuthenticated = (payload) => ({
  type: SET_IS_AUTHENTICATED,
  payload,
});

export const setUserId = (payload) => ({
  type: SET_USER_ID,
  payload,
});
