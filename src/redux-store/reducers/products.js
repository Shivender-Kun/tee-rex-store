import { createReducer } from "@reduxjs/toolkit";
import APP_ROUTES from "../../constants";

const initialState = { list: [] };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(APP_ROUTES.PRODUCTS_LIST, (state, { payload }) => {
    Object.assign(state, { list: payload });
  });
});

export default reducer;
