import countries from "../data/countries.js";
import { SET_QUERY, SET_COUNTRIES } from "./types.js";

export const setCountries = (countries) => {
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};
