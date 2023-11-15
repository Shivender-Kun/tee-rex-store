import { createAction } from "@reduxjs/toolkit";

export const ADD_PRODUCT = createAction("ADD_PRODUCT");

export const DELETE_PRODUCT = createAction("DELETE_PRODUCT");

export const INCREASE_QUANTITY = createAction("INCREASE_QUANTITY");

export const FIX_QUANTITY = createAction("FIX_QUANTITY");

export const DECREASE_QUANTITY = createAction("DECREASE_QUANTITY");

export const ADD_FILTER = createAction("ADD_FILTER");

export const DELETE_FILTER = createAction("DELETE_FILTER");

export const SEARCH_FILTER = createAction("SEARCH_FILTER");
