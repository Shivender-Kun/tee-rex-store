import { createReducer } from "@reduxjs/toolkit";
import { ADD_TO_CART } from "../actions";

const initialState = {
  items: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(ADD_TO_CART, (state, { payload }) => {
    Object.assign(state, { items: payload });
  });
});

export default reducer;
