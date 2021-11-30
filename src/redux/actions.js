import {
  SET_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_ERROR,
} from "./types.js";

export const setCountries = (countries) => {
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};

export const getCountries = (countries) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
};

export const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  };
};

export const fetchCountriesError = (payload) => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload,
  };
};

export const fetchCountries = () => async (dispatch) => {
  dispatch(fetchCountriesRequest());
  try {
    const BASE_URL = `http://localhost:3030/countries/`;
    const response = await fetch(BASE_URL);
    const data = await response.json();

    dispatch(getCountries(data));
  } catch (e) {
    dispatch(fetchCountriesError(e.message));
  }
};
