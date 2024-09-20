import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../lib/type";

export interface ShofyState {
  cart: ProductType[];
}

const initialState: ShofyState = {
  cart: [],
};

export const shofySlice = createSlice({
  name: "shofy",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action?.payload?.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action?.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action?.payload
      );
      if (existingProduct) {
        existingProduct.quantity! -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increaseQuantity, decreaseQuantity } =
  shofySlice.actions;

export default shofySlice.reducer;
