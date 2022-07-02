import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const middleWares = [thunk].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// will use redux Dev Tools chrome extension only in development mode
const composeEnhancer =
  (process.env.NODE_ENV !== "production" && composeWithDevTools) || compose;

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
