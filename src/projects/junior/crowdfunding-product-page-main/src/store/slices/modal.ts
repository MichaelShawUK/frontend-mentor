import { createSlice, PayloadAction } from "@reduxjs/toolkit";

function isValidInput(value: string, minimum: number) {
  return !isNaN(+value) && +value >= minimum;
}

interface ModalState {
  isOpen: boolean;
  selectedReward: number | null;
  pledgeAmount: string;
  hasError: boolean;
  isComplete: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  selectedReward: null,
  pledgeAmount: "",
  hasError: false,
  isComplete: false,
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
      if (state.selectedReward !== action.payload) {
        state.selectedReward = action.payload;
        state.pledgeAmount = "";
        state.hasError = false;
      }
    },
    onChange: (
      state,
      action: PayloadAction<{ value: string; minimum: number }>
    ) => {
      const { value, minimum } = action.payload;
      state.pledgeAmount = value;

      if (isValidInput(value, minimum) && state.hasError)
        state.hasError = false;
    },
    onSubmit: (
      state,
      action: PayloadAction<{ id: number; value: string; minimum: number }>
    ) => {
      const { value, minimum } = action.payload;
      console.log("value: ", value, "\nminimum: ", minimum);
      console.log("Is Valid input: ", isValidInput(value, minimum));

      if (!isValidInput(value, minimum)) state.hasError = true;
      else {
        state.isComplete = true;
      }
    },
    closeSuccess: (state) => {
      console.log(state.selectedReward);
      state.isComplete = false;
      modalSlice.caseReducers.closeModal(state);
    },
  },
});

export const {
  openModal,
  closeModal,
  selectReward,
  onChange,
  onSubmit,
  closeSuccess,
} = modalSlice.actions;
export default modalSlice.reducer;
