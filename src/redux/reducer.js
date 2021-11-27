import { SET_COUNTRIES, SET_QUERY } from "./types.js";

const initialState = {
  countries: [],
  query: "",
};

const countryReducer = (state = initialState, action) => {
  console.log(state, action, "reducer");
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
      break;

    default:
      return state;
  }
};

export default countryReducer;
