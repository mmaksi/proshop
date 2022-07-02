import { combineReducers } from 'redux';
import { productsListReducer } from './products/products.reducer';

// the key is the reducer slice and the value is the reducer function
export const rootReducer = combineReducers({
  productsList: productsListReducer
});
