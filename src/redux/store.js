import { createStore, combineReducers, applyMiddleware } from "redux";
import { countryReducer } from "./countries/reducer";
import { modalReducer } from "./modal/modalReducer";
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
  modal: modalReducer,
});

// const logger = (store) => (next) => (action) => {
//   // console.log("dispatching", action);
//   let result = next(action);
//   // console.log("next state", store.getState());
//   return result;
// };

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
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
  localStorage.setItem(
    "hiddenColumnsStates",
    JSON.stringify(tempStore.state.hiddenColumns)
  );
  localStorage.setItem(
    "filterValueStates",
    JSON.stringify(tempStore.state.filterValue)
  );
  localStorage.setItem(
    "sortColumnOrderStates",
    JSON.stringify(tempStore.state.sortColumnOrder)
  );
  localStorage.setItem(
    "hiddenColumnsCities",
    JSON.stringify(tempStore.city.hiddenColumns)
  );
  localStorage.setItem(
    "sortColumnOrderCities",
    JSON.stringify(tempStore.city.sortColumnOrder)
  );
  localStorage.setItem(
    "filterValueCities",
    JSON.stringify(tempStore.city.filterValue)
  );
  localStorage.setItem(
    "isAuthenticated",
    JSON.stringify(tempStore.auth.isAuthenticated)
  );
});
