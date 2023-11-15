import axios from "axios";
import API from "../constants";

const useFetchProducts =
  (endpoint = API.PRODUCTS_LIST) =>
  async (dispatch) => {
    try {
      const response = await axios.get(endpoint);

      if (response.status === 200)
        dispatch({ type: endpoint, payload: response.data });
      else throw new Error(response);
    } catch (error) {
      console.error(error);
    }
  };

export default useFetchProducts;
