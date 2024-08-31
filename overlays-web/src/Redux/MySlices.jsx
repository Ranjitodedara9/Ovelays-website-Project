import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ItemInDesc: [],
  EditItemArr: [],
};

const mainSlice = createSlice({
  name: "NameOfslice",
  initialState,
  reducers: {
    AddItemInDesc(state, action) {
      state.ItemInDesc = action.payload;
    },
    EditClo(state, action) {
      state.EditItemArr = action.payload;
    },
  },
});

export default mainSlice.reducer;
export const { AddItemInDesc, EditClo } = mainSlice.actions;
