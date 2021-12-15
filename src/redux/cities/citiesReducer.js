import CitiesColumns from "../../data/columnsCities";

import {
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_ERROR,
  SET_HIDE_COLUMNS_CITIES,
  SET_SORT_CITIES,
  SET_HEADER_DATA_CITIES,
  SET_FILTER_VALUE_CITIES,
  RESET_CITIES,
} from "./citiesTypes.js";

const hiddenColumns = localStorage.getItem("hiddenColumns");
const filterValue = localStorage.getItem("filterValue");
const sortColumnOrder = localStorage.getItem("sortColumnOrder");

const initialState = {
  headerData: CitiesColumns,
  filterValue: JSON.parse(filterValue) || "",
  hiddenColumns: JSON.parse(hiddenColumns) || [],
  cities: [],
  loading: false,
  fetched: false,
  error: null,
  sortColumnOrder: JSON.parse(sortColumnOrder) || {
    order: "asc",
    accessor: null,
  },
  query: 5,
  isModalOpen: false,
  modalData: null,
};

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return {
        ...state,
        loading: true,
        fetched: false,
      };
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
        loading: false,
        fetched: true,
      };
    case FETCH_CITIES_ERROR:
      return {
        ...state,
        cities: [],
        loading: false,
        fetched: false,
        error: action.payload,
      };
    case SET_HEADER_DATA_CITIES:
      return {
        ...state,
        headerData: action.payload,
      };

    case SET_FILTER_VALUE_CITIES:
      return {
        ...state,
        filterValue: action.payload,
      };

    case SET_HIDE_COLUMNS_CITIES:
      return {
        ...state,
        hiddenColumns: action.payload,
      };

    case SET_SORT_CITIES:
      return {
        ...state,
        sortColumnOrder: action.payload,
      };
    case RESET_CITIES:
      return {
        ...state,
        cities: [],
      };
    default:
      return state;
  }
};
