import { createSlice } from "@reduxjs/toolkit";

export const selectDarkModeReducerState = (state: any) => state.isDarkMode;

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    setDarkMode: (state) => {
      console.log("dark mode running");
      state.isDarkMode = true;
    },
    setLightMode: (state) => {
      console.log("light mode running");
      state.isDarkMode = false;
    },
  },
});

// export the action
export const { setDarkMode, setLightMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
