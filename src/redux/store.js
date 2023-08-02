import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import thunk from "redux-thunk";
import rootReducer from "../redux/reducers/rootReducer";

// Configure the persist config
const persistConfig = {
  key: "root",
  storage,
  // Optionally, you can whitelist specific reducers to be persisted
  // whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
