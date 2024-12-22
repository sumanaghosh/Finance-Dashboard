import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileData";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: 'profileFormData',
  storage,
};

const persistedFormReducer = persistReducer(persistConfig, profileReducer);

const store = configureStore({
  reducer: {
    profileFormData: persistedFormReducer,
  },
});

export const persistor = persistStore(store);
export default store;