import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ItemInDesc: [],
  EditItemArr: [],
  FilterProd: [],
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
    Filterr(state, action) {
      let item = action.payload;
      let rej = item.map((val) => val).map((val) => val);
      console.log(rej);
    },
  },
});

export default mainSlice.reducer;
export const { AddItemInDesc, EditClo, Filterr } = mainSlice.actions;
