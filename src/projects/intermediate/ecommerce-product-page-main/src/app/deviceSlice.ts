import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Device = "desktop" | "mobile";

const initialState = "desktop" as Device;

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDevice(_state, action: PayloadAction<Device>) {
      return action.payload;
    },
  },
});

export default deviceSlice.reducer;

export const selectDevice = (state: RootState) => state.device;
export const { setDevice } = deviceSlice.actions;
