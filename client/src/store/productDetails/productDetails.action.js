import axios from "axios";
import PRODUCT_ACTION_TYPES from "./productDetails.types";
import createAction from "../../utils/reducer.utils";

const fetchProductStartAsync = (productId) => async (dispatch) => {
  // dispatch startAction
  dispatch(fetchProductStart());
  try {
    // dispatch success action
    const response = await axios.get(`/v1/products/${productId}`);
    const product = await response.data[0];
    dispatch(fetchProductSuccess(product));
  } catch (error) {
    // dispatch failure action
    dispatch(fetchProductFailure(error.message));
  }
};

/* products loading start action handler */
const fetchProductStart = () =>
  createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START);

/* products loading success action handler */
const fetchProductSuccess = (product) =>
  createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS, product);

/* products loading failure action handler */
const fetchProductFailure = (error) => {
  createAction(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED, error);
};

export default fetchProductStartAsync;
