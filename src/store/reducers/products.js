import { createReducer } from "@reduxjs/toolkit";
import API from "../../constants";
import {
  ADD_PRODUCT,
  FIX_QUANTITY,
  DELETE_PRODUCT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions";

const initialState = { list: [], cart: 0 };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(API.PRODUCTS_LIST, (state, { payload }) => {
    state.list = payload;
  });

  builder.addCase(ADD_PRODUCT, (state, { payload }) => {
    state.list.map((product) => {
      if (product.id === payload.id) {
        product.addedInCart = true;
        product.quantityInCart = 1;

        return product;
      }
      return product;
    });
    state.cart++;
  });

  builder.addCase(DELETE_PRODUCT, (state, { payload }) => {
    state.list.map((product) => {
      if (product.id === payload.id) {
        product.addedInCart = false;
        delete product.quantityInCart;
        return product;
      }
      return product;
    });
    state.cart--;
  });

  builder.addCase(INCREASE_QUANTITY, (state, { payload }) => {
    state.list.map((product) => {
      if (product.id === payload.id) {
        product.quantityInCart = product.quantityInCart + 1;
        return product;
      }
      return product;
    });
  });

  builder.addCase(DECREASE_QUANTITY, (state, { payload }) => {
    state.list.map((product) => {
      if (product.id === payload.id) {
        product.quantityInCart = product.quantityInCart - 1;
        if (product.quantityInCart === 0) {
          product.addedInCart = false;
          state.cart--;
        }
        return product;
      }
      return product;
    });
  });

  builder.addCase(FIX_QUANTITY, (state, { payload }) => {
    state.list.map((product) => {
      if (product.id === payload.id) {
        product.quantityInCart = payload.quantitySelected;
        return product;
      }
      return product;
    });
  });
});

export default reducer;
