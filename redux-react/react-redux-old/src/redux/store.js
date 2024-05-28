import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counter";

const rootReducer = combineReducers({
  counterReducer
});

export const store = createStore(rootReducer);