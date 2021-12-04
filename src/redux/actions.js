import axios from "axios";
import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_ERROR,
  SET_HEADER_DATA,
  SET_SORT_COUNTRIES,
  SET_FILTER_VALUE,
  SET_HIDE_COLUMNS,
  SET_SHOW_COLUMNS,
} from "./types.js";

export const setCountriesSuccess = (countries) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
};

export const setCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  };
};

export const setCountriesError = (payload) => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload,
  };
};

export const setHeaderData = (payload) => {
  return {
    type: SET_HEADER_DATA,
    payload,
  };
};

export const setFilterValue = (payload) => {
  return {
    type: SET_FILTER_VALUE,
    payload,
  };
};

export const setHiddenColumns = (payload) => {
  return {
    type: SET_HIDE_COLUMNS,
    payload,
  };
};

export const setSortedCountries = (payload) => {
  return {
    type: SET_SORT_COUNTRIES,
    payload,
  };
};

// export const setSortedCountries = (payload) => {
//   return {
//     type: SET_SHOW_COLUMNS,
//     payload,
//   };
// };

export const fetchCountries = () => async (dispatch) => {
  dispatch(setCountriesRequest());
  try {
    const { data } = await axios.get(`http://localhost:4080/countries/`);
    dispatch(setCountriesSuccess(data));
  } catch (error) {
    dispatch(setCountriesError(error.message));
  }
};
