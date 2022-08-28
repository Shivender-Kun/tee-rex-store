import axios from "axios";
import APP_ROUTES from "../constants";

export const fetchList =
  (endpoint = APP_ROUTES.PRODUCTS_LIST) =>
  (dispatch) =>
    axios
      .get(endpoint)
      .then((response) => dispatch({ type: endpoint, payload: response.data }));
