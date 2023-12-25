import { createSlice } from "@reduxjs/toolkit";

interface DeviceState {
  device: "mobile" | "desktop";
}

const initialState: DeviceState = {
  device: "desktop",
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    mobileMode: (state) => {
      state.device = "mobile";
    },
    desktopMode: (state) => {
      state.device = "desktop";
    },
  },
});

export const { mobileMode, desktopMode } = deviceSlice.actions;
export default deviceSlice.reducer;
