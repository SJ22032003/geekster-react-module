import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
