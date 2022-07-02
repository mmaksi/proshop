import { combineReducers } from 'redux';
import { productsListReducer } from './products/products.reducer';
import { productDetailsReducer } from './productDetails/productDetails.reducer';

// the key is the reducer slice and the value is the reducer function
export const rootReducer = combineReducers({
  productsList: productsListReducer,
  productDetails: productDetailsReducer
});
