import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import React from "react";

import products from "./reducers/products";
import filters from "./reducers/filters";

const store = configureStore({
  reducer: {
    filters,
    products,
  },
});

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
