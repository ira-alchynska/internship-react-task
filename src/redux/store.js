import { createStore, combineReducers, applyMiddleware } from "redux";
import { countryReducer } from "./countries/reducer";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { statesReducer } from "./states/statesReducer";
import { citiesReducer } from "./cities/citiesReducer";
import { authReducer } from "./auth/authReducer";

const rootReducer = combineReducers({
  country: countryReducer,
  state: statesReducer,
  city: citiesReducer,
  auth: authReducer,
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

  localStorage.setItem(
    "hiddenColumns",
    JSON.stringify(tempStore.country.hiddenColumns)
  );

  localStorage.setItem(
    "filterValue",
    JSON.stringify(tempStore.country.filterValue)
  );

  localStorage.setItem(
    "sortColumnOrder",
    JSON.stringify(tempStore.country.sortColumnOrder)
  );
  // localStorage.setItem(
  //   "hiddenColumnsStates",
  //   JSON.stringify(tempStore.state.hiddenColumnsStates)
  // );
  // localStorage.setItem(
  //   "filterValueStates",
  //   JSON.stringify(tempStore.state.filterValueStates)
  // );
  // localStorage.setItem(
  //   "sortColumnOrderStates",
  //   JSON.stringify(tempStore.state.sortColumnOrderStates)
  // );
  // localStorage.setItem(
  //   "hiddenColumns",
  //   JSON.stringify(tempStore.city.hiddenColumns)
  // );
  // localStorage.setItem(
  //   "sortColumn",
  //   JSON.stringify(tempStore.city.sortColumnOrder)
  // );
  // localStorage.setItem(
  //   "filterValue",
  //   JSON.stringify(tempStore.city.filterValue)
  // );
});
