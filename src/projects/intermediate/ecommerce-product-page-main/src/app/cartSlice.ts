import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const cartSlice = createSlice({
  name: "cart",
  initialState: 2,
  reducers: {
    addQuantityToCart(state, action: PayloadAction<number>) {
      state += action.payload;
      return Math.min(state, 99);
    },
    removeFromCart(_state) {
      return 0;
    },
  },
});

export default cartSlice.reducer;
export const { addQuantityToCart, removeFromCart } = cartSlice.actions;
export const selectCartQuantity = (state: RootState) => state.cart;
