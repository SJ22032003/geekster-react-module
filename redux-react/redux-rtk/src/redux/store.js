import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer/counter";
import { pokemonApi } from "./service/pokemon";
import { pokemonReducer } from "./reducer/pokemonR";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterReducer,
    pokemon: pokemonReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
