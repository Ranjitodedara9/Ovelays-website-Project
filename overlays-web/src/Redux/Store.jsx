import MainSlice from "./MySlices";
import CartItem from "./newslice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    mainslice: MainSlice,
    Cart: CartItem,
  },
});

export default store;
