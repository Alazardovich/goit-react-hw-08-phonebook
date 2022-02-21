import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contacts from "./contacts/contactsSlice";
import auth from "./auth/authSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
export const store = configureStore({
  reducer: {
    contacts,
    auth: persistReducer(authPersistConfig, auth),
  },
  middleware,
});

export const persistor = persistStore(store);
