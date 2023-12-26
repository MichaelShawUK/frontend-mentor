import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  selectedReward: number | null;
  pledgeAmount: string;
  hasError: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  selectedReward: null,
  pledgeAmount: "",
  hasError: false,
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
      state.hasError = false;
    },
    onChange: (
      state,
      action: PayloadAction<{ value: string; minimum: number }>
    ) => {
      const { value, minimum } = action.payload;
      state.pledgeAmount = value;

      if (!isNaN(+value) && +value >= minimum && state.hasError) {
        state.hasError = false;
      }
    },
    onSubmit: (
      state,
      action: PayloadAction<{ value: string; minimum: number }>
    ) => {
      const { value, minimum } = action.payload;

      if ((isNaN(+value) || +value < minimum) && !state.hasError) {
        state.hasError = true;
      } else {
        console.log("Success");
      }
    },
  },
});

export const { openModal, closeModal, selectReward, onChange, onSubmit } =
  modalSlice.actions;
export default modalSlice.reducer;
