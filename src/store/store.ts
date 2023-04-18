import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";

export const selectDarkModeReducerState = (state: any) => state.isDarkMode;

// export const darkMode = createSelector(
//   selectDarkModeReducerState,
//   (darkModeReducerState) => darkModeReducerState.isDarkMode
// );

export const store = configureStore({
  reducer: {
    isDarkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
