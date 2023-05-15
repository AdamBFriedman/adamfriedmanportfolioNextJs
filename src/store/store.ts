import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import darkModeReducer from "./darkMode/darkModeSlice";
import mobileMenuReducer from "./mobileMenu/mobileMenuSlice";

const rootReducer = combineReducers({
  isDarkMode: darkModeReducer,
  isMobileMenuOpen: mobileMenuReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export default store;
