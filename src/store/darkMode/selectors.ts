import { createSelector } from "reselect";

export const selectDarkModeReducerState = (state: { darkMode: any }) =>
  state.darkMode;

export const selectDarkMode = createSelector(
  selectDarkModeReducerState,
  (state) => state.isDarkMode
);
