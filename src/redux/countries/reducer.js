import columns from "../../data/columns";

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  SET_HIDE_COLUMNS,
  SET_SORT_COUNTRIES,
  SET_HEADER_DATA,
  SET_FILTER_VALUE,
  VALIDATE_FORM_ERROR,
  RESET_COUNTRIES,
  SET_COUNTRIES_PAGE,
} from "./types.js";

const hiddenColumns = localStorage.getItem("hiddenColumns");
const filterValue = localStorage.getItem("filterValue");
const sortColumnOrder = localStorage.getItem("sortColumnOrder");

const initialState = {
  headerData: columns,
  filterValue: JSON.parse(filterValue) || "",
  hiddenColumns: JSON.parse(hiddenColumns) || [],
  countries: [],
  loading: false,
  fetched: false,
  error: null,
  sortColumnOrder: JSON.parse(sortColumnOrder) || {
    order: "asc",
    accessor: null,
  },
  query: 5,

  formErrors: {},
  page: 1,
};

export const countryReducer = (state = initialState, action) => {
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

    case SET_SORT_COUNTRIES:
      return {
        ...state,
        sortColumnOrder: action.payload,
      };
    case RESET_COUNTRIES:
      return {
        ...state,
        countries: [],
      };
    case VALIDATE_FORM_ERROR:
      return {
        ...state,
        formErrors: action.payload,
      };
    case SET_COUNTRIES_PAGE:
      return {
        ...state,
        page: state.page +1,
      };

    default:
      return state;
  }
};
