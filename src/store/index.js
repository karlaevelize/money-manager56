import { combineReducers, createStore } from "redux";
import balanceReducer from "./balance/reducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const store = createStore(
  //always register your reducer here
  combineReducers({
    balance: balanceReducer,
  }),
  enhancer
);

export default store;