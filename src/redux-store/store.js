import { configureStore } from "@reduxjs/toolkit";
import products from "./reducers/products";
import cart from "./reducers/cart";

export const store = configureStore({
  reducer: {
    cart,
    products,
  },
});
