import MainSlice from "./MySlices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    mainslice: MainSlice,
  },
});

export default store;
