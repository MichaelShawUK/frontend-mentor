import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  selectedReward: number | null;
}

const initialState: ModalState = {
  isOpen: false,
  selectedReward: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    selectReward: (state, action: PayloadAction<number | null>) => {
      state.selectedReward = action.payload;
    },
  },
});

export const { openModal, closeModal, selectReward } = modalSlice.actions;
export default modalSlice.reducer;
