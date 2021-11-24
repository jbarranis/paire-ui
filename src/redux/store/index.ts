import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "../sagas";
import { default as rootReducer } from "../reducers";

const persistConfig = {
  key: "kats-grain",
  blacklist: ["account", "navigation"],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
composeWithDevTools(applyMiddleware(sagaMiddleware));

export const create: any = (configs: any = {}) => {
  const persistedReducer = persistReducer(
    { ...persistConfig, ...configs },
    rootReducer
  );
  const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewares,
  });
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
