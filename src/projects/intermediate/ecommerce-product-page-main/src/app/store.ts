import { configureStore } from "@reduxjs/toolkit";

import deviceReducer from "./deviceSlice";
import galleryReducer from "./gallerySlice";

const store = configureStore({
  reducer: {
    device: deviceReducer,
    gallery: galleryReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
