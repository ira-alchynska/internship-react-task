import {
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_ERROR,
  SET_HIDE_COLUMNS_CITIES,
  SET_SORT_CITIES,
  SET_HEADER_DATA_CITIES,
  SET_FILTER_VALUE_CITIES,
  RESET_CITIES,
  SET_CITIES_PAGE,
} from "./citiesTypes.js";
import CitiesSelectors from "./citiesSelectors";
import { getCities } from "../../api/cities.js";
import isLoader from "../../Loader/Loader.jsx";

export const setCitiesSuccess = (cities) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: cities,
  };
};

export const setCitiesRequest = () => {
  return {
    type: FETCH_CITIES_REQUEST,
  };
};

export const setCitiesError = (payload) => {
  return {
    type: FETCH_CITIES_ERROR,
    payload,
  };
};

export const setCitiesHeaderData = (payload) => {
  return {
    type: SET_HEADER_DATA_CITIES,
    payload,
  };
};

export const setCitiesFilterValue = (payload) => {
  return {
    type: SET_FILTER_VALUE_CITIES,
    payload,
  };
};
export const setCitiesHiddenColumns = (payload) => {
  return {
    type: SET_HIDE_COLUMNS_CITIES,
    payload,
  };
};

export const setSortedCities = (payload) => {
  return {
    type: SET_SORT_CITIES,
    payload,
  };
};

export const resetCities = () => {
  return {
    type: RESET_CITIES,
  };
};
export const incrementCitiesPage = () => {
  return {
    type: SET_CITIES_PAGE,
  };
};

export const fetchCities = () => async (dispatch, getState) => {
  dispatch(setCitiesRequest());
  dispatch(isLoader());
  try {
    const page = CitiesSelectors.selectCitiesPage(getState());

    const data = await getCities(page);
    const states = CitiesSelectors.selectCitiesData(getState());

    dispatch(setCitiesSuccess(data));

    dispatch(setCitiesSuccess([...states, ...data]));
  } catch (error) {
    dispatch(setCitiesError(error.message));
  }
};
