import {
  FETCH_STATES_SUCCESS,
  FETCH_STATES_REQUEST,
  FETCH_STATES_ERROR,
  SET_HIDE_COLUMNS_STATES,
  SET_SORT_STATES,
  RESET_STATES,
  SET_HEADER_DATA_STATES,
  SET_FILTER_VALUE_STATES,
  SET_STATES_PAGE,
} from "./types.js";
import StatesSelectors from "./selectors.js";
import { getStates } from "../../api/states.js";
import isLoader from "../../Loader/Loader.jsx";

export const setStatesSuccess = (states) => {
  return {
    type: FETCH_STATES_SUCCESS,
    payload: states,
  };
};

export const setStatesRequest = () => {
  return {
    type: FETCH_STATES_REQUEST,
  };
};

export const setStatesError = (payload) => {
  return {
    type: FETCH_STATES_ERROR,
    payload,
  };
};

export const setHeaderDataStates = (payload) => {
  return {
    type: SET_HEADER_DATA_STATES,
    payload,
  };
};

export const setFilterValueStates = (payload) => {
  return {
    type: SET_FILTER_VALUE_STATES,
    payload,
  };
};
export const setHiddenColumnsStates = (payload) => {
  return {
    type: SET_HIDE_COLUMNS_STATES,
    payload,
  };
};

export const setSortedStates = (payload) => {
  return {
    type: SET_SORT_STATES,
    payload,
  };
};
export const validationFormError = (payload) => {
  return {
    type: VALIDATE_FORM_ERROR,
    payload,
  };
};

export const resetStates = () => {
  return {
    type: RESET_STATES,
  };
};

export const incrementStatesPage = () => {
  return {
    type: SET_STATES_PAGE,
  };
};

export const fetchStates = () => async (dispatch, getState) => {
  dispatch(setStatesRequest());
  dispatch(isLoader());
  try {
    const page = StatesSelectors.selectStatesPage(getState());

    const data = await getStates(page);
    const states = StatesSelectors.selectStatesData(getState());

    dispatch(setStatesSuccess([...states, ...data]));
  } catch (error) {
    dispatch(setStatesError(error.message));
  }
};
