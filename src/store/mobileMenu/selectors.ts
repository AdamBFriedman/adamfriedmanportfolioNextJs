import { createSelector } from "reselect";

export const selectMobileMenuReducerState = (state: { mobileMenu: any }) =>
  state.mobileMenu;

export const selectMobileMenu = createSelector(
  selectMobileMenuReducerState,
  (state) => state.isMobileMenuOpen
);
