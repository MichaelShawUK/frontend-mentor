import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const cartSlice = createSlice({
  name: "cart",
  initialState: 2,
  reducers: {
    addQuantityToCart(state, action: PayloadAction<number>) {
      state += action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { addQuantityToCart } = cartSlice.actions;
export const selectCartQuantity = (state: RootState) => state.cart;
