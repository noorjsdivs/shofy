import { configureStore } from "@reduxjs/toolkit";
import shofyReducer from "./shofySlice";

export const store = configureStore({
  reducer: {
    shofy: shofyReducer,
  },
});
