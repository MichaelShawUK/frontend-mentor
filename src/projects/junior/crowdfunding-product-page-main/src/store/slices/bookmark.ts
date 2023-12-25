import { createSlice } from "@reduxjs/toolkit";

interface BookmarkState {
  isBookmarked: boolean;
}

const initialState: BookmarkState = {
  isBookmarked: false,
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isBookmarked = !state.isBookmarked;
    },
  },
});

export const { toggle } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
