import { createReducer } from "@reduxjs/toolkit";
import { ADD_FILTER, DELETE_FILTER, SEARCH_FILTER } from "../actions";

const initialState = { general: [], search: [], price: [] };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(ADD_FILTER, (state, { payload: { name, type } }) => {
    if (type === "Price") {
      const range = name.slice(3).split("-");
      const priceRange = {
        min: range[0],
        max: range[1],
        name,
      };
      state.price = [...state.price, priceRange];
    } else state.general = [...state.general, name];
  });

  builder.addCase(DELETE_FILTER, (state, { payload: { name, type } }) => {
    if (type === "Price")
      state.price = state.price.filter((product) => product.name !== name);
    else state.general = state.general.filter((product) => product !== name);
  });

  builder.addCase(SEARCH_FILTER, (state, { payload }) => {
    if (payload) state.search = payload.split(" ");
    else state.search = [];
  });
});

export default reducer;
