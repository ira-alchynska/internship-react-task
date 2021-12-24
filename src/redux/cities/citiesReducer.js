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
  SET_CITIES_PAGE,
} from "./citiesTypes.js";

const hiddenColumnsCities = localStorage.getItem("hiddenColumns");
const filterValueCities = localStorage.getItem("filterValue");
const sortColumnOrderCities = localStorage.getItem("sortColumnOrder");

const initialState = {
  headerData: CitiesColumns,
  filterValue: JSON.parse(filterValueCities) || "",
  hiddenColumns: JSON.parse(hiddenColumnsCities) || [],
  cities: [],
  loading: false,
  fetched: false,
  error: null,
  sortColumnOrder: JSON.parse(sortColumnOrderCities) || {
    order: "asc",
    accessor: null,
  },
  isModalOpen: false,
  modalData: null,
  page: 1,
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
    case SET_CITIES_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
