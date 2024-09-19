import { configureStore } from "@reduxjs/toolkit";
import { MMKV } from "react-native-mmkv";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  type Storage,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";

import accounts from "./slices/accounts";
import pullRequests from "./slices/pull-requests";
import settings from "./slices/settings";

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  storage: reduxStorage,
};

const persistedAccount = persistReducer(persistConfig, accounts);
const persistedSettings = persistReducer(persistConfig, settings);
const persistedPullRequests = persistReducer(persistConfig, pullRequests);

const reducers = {
  accounts: persistedAccount,
  settings: persistedSettings,
  pullRequests: persistedPullRequests,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return middleware;
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
