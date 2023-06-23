import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import feedingConfigReducer from "./reducer/feeding-config.reducer";
import tokenReducer from "./reducer/token.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  feeding: feedingConfigReducer,
  token: tokenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
