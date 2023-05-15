import { createSlice } from "@reduxjs/toolkit";

export const selectDarkModeReducerState = (state: any) => state.isDarkMode;

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: true,
  },
  reducers: {
    setDarkMode: (state) => {
      state.isDarkMode = true;
    },
    setLightMode: (state) => {
      state.isDarkMode = false;
    },
  },
});

// export the action
export const { setDarkMode, setLightMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
