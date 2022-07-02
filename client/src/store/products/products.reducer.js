import PRODUCTS_ACTION_TYPES from "./products.types";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsListReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      console.log("recieved from the action")
      return { ...state, error: payload };
    default:
      return state;
  }
};
