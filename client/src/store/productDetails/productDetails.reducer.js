import PRODUCT_ACTION_TYPES from "./productDetails.types";

export const PRODUCT_INITIAL_STATE = {
  product: { reviews: [] },
  isLoading: false,
  error: null,
};

export const productDetailsReducer = (
  state = PRODUCT_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START:
      return { ...state, isLoading: true };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
      return { ...state, product: payload };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
