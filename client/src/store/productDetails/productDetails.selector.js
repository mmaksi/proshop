import { createSelector } from "reselect";

const selectProductDetailsReducer = (state) => state.productDetails;

export const selectProductDetails = createSelector(
  [selectProductDetailsReducer],
  (productDetailsReducer) => {
    return productDetailsReducer.product;
  }
);

export const selectProductDetailsIsLoading = createSelector(
  [selectProductDetailsReducer],
  (productDetailsReducer) => productDetailsReducer.isLoading
)

export const selectProductDetailsIsLoadingError = createSelector(
  [selectProductDetailsReducer],
  (productDetailsReducer) => productDetailsReducer.error
)
