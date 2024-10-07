import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { toast } from "react-toastify";
const initialState = {
  ItemInDesc: [],
  EditItemArr: [],
  FilterProd: [],
  CartItem: [],
  show: false,
  signUp: false,
  item: [],
  data: null,
  sdata: [],
  Quantity: 0,
  like: 0,
  num: 0,
  qunt: 0,
  userId: localStorage.getItem("username") || "",
  datastore: JSON.parse(localStorage.getItem("datastore")) || [],
  buyproduct: [],
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
      console.log(action.payload);
      if (action.payload.mes === "plusqty") {
        state.CartItem.map((val) =>
          action.payload.id === val._id
            ? (val.qty = action.payload.qty)
            : val.qty
        );
      } else if (action.payload.mes === "minqty") {
        state.CartItem.map((val) =>
          action.payload.id === val._id
            ? (val.qty = action.payload.qty)
            : val.qty
        );
      } else {
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

  incrementQuantity: (state, action) => {
    const Idnumber = state.item.findIndex((elem) => elem.id === action.payload);

    if (Idnumber !== -1) {
      state.item[Idnumber].qunt += 1;
      state.Quantity += 1;
      state.item[Idnumber].total += state.item[Idnumber].price;
    }
  },

  decrementQuantity: (state, action) => {
    const Idnumber = state.item.findIndex((elem) => elem.id === action.payload);
    if (Idnumber !== -1) {
      if (state.item[Idnumber].qunt > 1) {
        state.item[Idnumber].qunt -= 1;
        state.Quantity -= 1;
        state.item[Idnumber].total -= state.item[Idnumber].price;
      } else {
        console.error("Quantity cannot be less than 1");
      }
    } else {
      console.error("Item not found");
    }
  },

  // Aa Add to cart nu function se
  ProductAdd: (state, action) => {
    console.log(action.payload);
    state.data = action.payload;
  },
  removeItemFromCart: (state, action) => {
    const itemIndex = state.item.findIndex(
      (item) => item.id === action.payload
    );
    if (itemIndex !== -1) {
      const item = state.item[itemIndex];
      state.item = state.item.filter((item) => item.id !== action.payload);
      state.Quantity -= item.qunt;

      localStorage.setItem("cart", JSON.stringify(state.item));
    }
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
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  ProductAdd,
} = mainSlice.actions;
