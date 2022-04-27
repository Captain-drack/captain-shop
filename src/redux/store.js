import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main-root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const Store = createStore(persistedReducer, applyMiddleware());

const Persistor = persistStore(Store);

export { Persistor };

export default Store;
