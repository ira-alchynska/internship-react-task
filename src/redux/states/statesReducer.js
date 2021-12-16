import columnsStates from "../../data/columnsStates";

import {
  FETCH_STATES_SUCCESS,
  FETCH_STATES_REQUEST,
  FETCH_STATES_ERROR,
  SET_HIDE_COLUMNS_STATES,
  SET_SORT_STATES,
  RESET_STATES,
  SET_HEADER_DATA_STATES,
  SET_FILTER_VALUE_STATES,
} from "./types.js";

const hiddenColumnsStates = localStorage.getItem("hiddenColumns");
const filterValueStates = localStorage.getItem("filterValue");
const sortColumnOrderStates = localStorage.getItem("sortColumnOrder");

const initialState = {
  headerData: columnsStates,
  filterValue: JSON.parse(filterValueStates) || "",
  hiddenColumns: JSON.parse(hiddenColumnsStates) || [],
  states: [],
  loading: false,
  fetched: false,
  error: null,
  sortColumnOrder: JSON.parse(sortColumnOrderStates) || {
    order: "asc",
    accessor: null,
  },
  query: 5,
  isModalOpen: false,
  modalData: null,
};

export const statesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATES_REQUEST:
      return {
        ...state,
        loading: true,
        fetched: false,
      };
    case FETCH_STATES_SUCCESS:
      return {
        ...state,
        states: action.payload,
        loading: false,
        fetched: true,
      };
    case FETCH_STATES_ERROR:
      return {
        ...state,
        states: [],
        loading: false,
        fetched: false,
        error: action.payload,
      };
    case SET_HEADER_DATA_STATES:
      return {
        ...state,
        headerData: action.payload,
      };

    case SET_FILTER_VALUE_STATES:
      return {
        ...state,
        filterValue: action.payload,
      };

    case SET_HIDE_COLUMNS_STATES:
      return {
        ...state,
        hiddenColumns: action.payload,
      };

    case SET_SORT_STATES:
      return {
        ...state,
        sortColumnOrder: action.payload,
      };
    case RESET_STATES:
      return {
        ...state,
        states: [],
      };
    default:
      return state;
  }
};
