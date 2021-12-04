import columns from "../data/columns";

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  SET_HIDE_COLUMNS,
  SET_SORT_COUNTRIES,
  SET_HEADER_DATA,
  SET_FILTER_VALUE,
  SET_SHOW_COLUMNS,
} from "./types.js";

const initialState = {
  headerData: columns,
  filterValue: "",
  hiddenColumns: [],
  countries: [],
  loading: false,
  fetched: false,
  error: null,
  sortColumnOrder: {
    order: "asc",
    accessor: null,
  },
  showAllColumns: columns,
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

    // case SET_SHOW_COLUMNS:
    //   return {
    //     ...state,
    //     showAllColumns: action.payload,
    //   };

    default:
      return state;
  }
};
