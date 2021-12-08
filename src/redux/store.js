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

store.subscribe((type) => {
  store.getState();

  switch (type) {
    case SET_HIDE_COLUMNS: {
      localStorage.setItem("hiddenColumns", JSON.stringify([]));
    }
    case SET_FILTER_VALUE: {
      localStorage.setItem("filterValue", JSON.stringify(""));
    }
    case SET_SORT_COUNTRIES: {
      localStorage.setItem("sortColumnOrder", JSON.stringify({}));
    }
  }
});
// function select(state) {
//   return state.some.deep.property
// }

// let currentValue
// function handleChange() {
//   let previousValue = currentValue
//   currentValue = select(store.getState())

//   if (previousValue !== currentValue) {
//     console.log(
//       'Some deep nested property changed from',
//       previousValue,
//       'to',
//       currentValue
//     )
//   }
// }
