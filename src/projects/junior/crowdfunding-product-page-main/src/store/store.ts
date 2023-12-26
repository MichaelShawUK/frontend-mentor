import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./slices/bookmark";
import deviceReducer from "./slices/device";
import mobileMenuReducer from "./slices/mobileMenu";

const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    device: deviceReducer,
    mobileMenu: mobileMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
