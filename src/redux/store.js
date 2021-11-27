import { createStore, combineReducers } from "redux";
import countryReducer from "./reducer";

const rootReducer = combineReducers({
  country: countryReducer,
});

const store = createStore(rootReducer);
console.log(store);

export default store;
