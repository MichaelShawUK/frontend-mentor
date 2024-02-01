import { createSlice } from "@reduxjs/toolkit";

import data from "../data.json";
import transformPath from "../util/transformPath";
import { RootState } from "./store";

const initialState = {
  username: data.currentUser.username,
  avatar: transformPath(data.currentUser.image.png),
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
});

export default currentUserSlice.reducer;

export const selectCurrentUsername = (state: RootState) =>
  state.currentUser.username;
export const selectCurrentUserAvatar = (state: RootState) =>
  state.currentUser.avatar;
