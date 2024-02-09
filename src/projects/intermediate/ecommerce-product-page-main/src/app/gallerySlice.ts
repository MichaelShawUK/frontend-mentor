import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const NUM_IMAGES = 4;

const gallerySlice = createSlice({
  name: "gallery",
  initialState: 0,
  reducers: {
    nextImage(state) {
      return Math.min(++state, NUM_IMAGES - 1);
    },
    previousImage(state) {
      return Math.max(0, --state);
    },
    goToImage(_state, action: PayloadAction<number>) {
      return action.payload;
    },
  },
});

export default gallerySlice.reducer;
export const { nextImage, previousImage, goToImage } = gallerySlice.actions;
export const selectCurrentImage = (state: RootState) => state.gallery;
