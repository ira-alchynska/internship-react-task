import {
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_ERROR,
  SET_HEADER_DATA,
  SET_SORT_COUNTRIES,
  SET_FILTER_VALUE,
  SET_HIDE_COLUMNS,
  VALIDATE_FORM_ERROR,
  RESET_COUNTRIES,
  SET_COUNTRIES_PAGE,
} from "./types.js";
import CountriesSelectors from "./selectors.js";
import { getCountries } from "../../api/countries";
import isLoader from "../../Loader/Loader.jsx";

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
export const validationFormError = (payload) => {
  return {
    type: VALIDATE_FORM_ERROR,
    payload,
  };
};
export const resetCountries = () => {
  return {
    type: RESET_COUNTRIES,
  };
};

export const incrementCountriesPage = () => {
  return {
    type: SET_COUNTRIES_PAGE,
  };
};

export const fetchCountries = () => async (dispatch, getState) => {
  dispatch(setCountriesRequest());
  dispatch(isLoader());
  try {
    const page = CountriesSelectors.selectCountriesPage(getState());
    const data = await getCountries(page);
    const countries = CountriesSelectors.selectCountriesData(getState());

    dispatch(setCountriesSuccess(data));

    dispatch(setCountriesSuccess([...countries, ...data]));
  } catch (error) {
    dispatch(setCountriesError(error.message));
  }
};
