import { configureStore } from "@reduxjs/toolkit";
import EditCloth from "./Reducers/EditCloth";

const store = configureStore({
  reducer: {
    edititem: EditCloth,
  },
});

export default store;
