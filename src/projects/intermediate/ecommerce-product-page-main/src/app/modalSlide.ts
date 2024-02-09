import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMenu: false,
  showLightbox: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openMenu(state) {
      state.showMenu = true;
    },
    closeMenu(state) {
      state.showMenu = false;
    },
    openLightbox(state) {
      state.showLightbox = true;
    },
    closeLightbox(state) {
      state.showLightbox = false;
    },
  },
});

export default modalSlice.reducer;
export const { openMenu, closeMenu, openLightbox, closeLightbox } =
  modalSlice.actions;
