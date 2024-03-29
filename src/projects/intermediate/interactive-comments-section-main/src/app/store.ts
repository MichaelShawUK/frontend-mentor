import { configureStore } from "@reduxjs/toolkit";

import currentUserReducer from "./currentUserSlice";
import commentsReducer from "./commentsSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    comments: commentsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
