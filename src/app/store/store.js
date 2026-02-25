import authReducer from "@features/auth/store";
import cartReducer from "@features/cart/store";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@shared/api";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["users", "currentUser"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const cartPersistConfig = {
  key: "cart",
  storage,
};

const persistCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cart: persistCartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
