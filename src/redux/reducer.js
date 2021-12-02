import columns from "../data/columns";

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  SET_HIDE_COLUMNS,
  SET_HEADER_DATA,
  SET_FILTER_VALUE,
} from "./types.js";

const initialState = {
  headerData: columns,
  filterValue: "",
  hiddenColumns: [],
  countries: [],
  loading: false,
  fetched: false,
  error: null,
};

export const countryReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
        fetched: false,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        loading: false,
        fetched: true,
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        countries: [],
        loading: false,
        fetched: false,
        error: action.payload,
      };
    case SET_HEADER_DATA:
      return {
        ...state,
        headerData: action.payload,
      };

    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload,
      };

    case SET_HIDE_COLUMNS:
      return {
        ...state,
        hiddenColumns: action.payload,
      };

    default:
      return state;
  }
};
