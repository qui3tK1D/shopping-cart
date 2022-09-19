import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((cur) => cur.id !== payload);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((cur) => cur.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((cur) => cur.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      state.amount = state.cartItems.reduce((acc, cur) => acc + cur.amount, 0);
      state.total = state.cartItems.reduce(
        (acc, cur) => acc + cur.amount * cur.price,
        0
      );
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
