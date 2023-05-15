import { createSlice } from "@reduxjs/toolkit";

export const selectMobileMenuOpenReducerState = (state: any) =>
  state.isMobileMenuOpen;

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {
    isMobileMenuOpen: false,
  },
  reducers: {
    setMobileMenuOpen: (state) => {
      state.isMobileMenuOpen = true;
    },
    setMobileMenuClose: (state) => {
      state.isMobileMenuOpen = false;
    },
  },
});

// export the action
export const { setMobileMenuOpen, setMobileMenuClose } =
  mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
