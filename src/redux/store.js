import { createStore, combineReducers, applyMiddleware } from "redux";
import { countryReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  SET_SORT_COUNTRIES,
  SET_FILTER_VALUE,
  SET_HIDE_COLUMNS,
} from "./types.js";

const rootReducer = combineReducers({
  country: countryReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  let tempStore = store.getState();
  switch (true) {
    case SET_HIDE_COLUMNS === "HIDE_COLUMNS":
      console.log("switch1");
      localStorage.setItem(
        "hiddenColumns",
        JSON.stringify(tempStore.country.hiddenColumns)
      );

    case SET_FILTER_VALUE === "SET_FILTER_VALUE":
      console.log("switch2");
      localStorage.setItem(
        "filterValue",
        JSON.stringify(tempStore.country.filterValue)
      );

    case SET_SORT_COUNTRIES === "SORT_COUNTRIES":
      console.log("switch3");
      localStorage.setItem(
        "sortColumnOrder",
        JSON.stringify(tempStore.country.sortColumnOrder)
      );
  }
});
