import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  isNavbarMenuOpen: boolean;
}

const initialState: UIState = {
  isNavbarMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNavbarMenu: (state) => {
      state.isNavbarMenuOpen = !state.isNavbarMenuOpen;
    },
    openNavbarMenu: (state) => {
      state.isNavbarMenuOpen = true;
    },
    closeNavbarMenu: (state) => {
      state.isNavbarMenuOpen = false;
    },
  },
});

export const { toggleNavbarMenu, openNavbarMenu, closeNavbarMenu } =
  uiSlice.actions;

export default uiSlice.reducer;
