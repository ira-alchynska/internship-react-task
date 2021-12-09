import { createStore, combineReducers, applyMiddleware } from "redux";
import { countryReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

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
});
