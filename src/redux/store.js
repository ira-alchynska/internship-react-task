import { createStore, combineReducers, applyMiddleware } from "redux";
import { countryReducer, tableReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  country: countryReducer,
  //table: tableReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

store.subscribe(() => {
  localStorage["country"], JSON.stringify(store.getState());
});

const persistedState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state"))
  : {};
