import {
  SET_COUNTRIES,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
} from "./types.js";

const initialState = {
  countries: [],
  loading: false,
  fetched: false,
  error: null,
};

const countryReducer = (state = initialState, action) => {
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
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
};

export default countryReducer;
