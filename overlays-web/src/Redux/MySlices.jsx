import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  ItemInDesc: [],
  EditItemArr: [],
  FilterProd: [],
  CartItem: [],
  show: false,
  signUp: false,
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
    AddToCart(state, action) {
      localStorage.setItem("cart", action.payload);
      const check = state.CartItem.filter(
        (val) => val._id === action.payload._id
      );
      console.log(check);
      if (check.length > 0) {
        toast("already added in cart...");
      } else {
        toast("item added succesfuly...");
        state.CartItem.push(action.payload);
      }
    },
    showPopUp(state, action) {
      if (action.payload === "showLogin") {
        state.show = true;
        state.signUp = false;
      }
      state.show = action.payload;
    },
    showSignUp(state, action) {
      if (action.payload === "hidesignup") {
        state.signUp = false;
      } else if (action.payload === "close") {
        state.signUp = false;
        state.show = false;
      } else {
        state.signUp = true;
      }
    },
    removeFromCart(state, action) {
      let data = state.CartItem;
      const removedata = data.filter((val) => val._id !== action.payload);
      state.CartItem = removedata;
    },
  },
});

export default mainSlice.reducer;
export const {
  AddItemInDesc,
  showPopUp,
  showSignUp,
  EditClo,
  Filterr,
  AddToCart,
  removeFromCart,
} = mainSlice.actions;
