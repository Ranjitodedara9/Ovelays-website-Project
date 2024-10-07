import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  item: [],
  data: "",
  sdata: [],
  Quantity: 0,
  like: 0,
  num: 0,
  qunt: 0,
  userId: localStorage.getItem("username") || "",
  datastore: JSON.parse(localStorage.getItem("datastore")) || [],
  buyproduct: [],
};

const CartItem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Aa Add to cart nu function se
    AddCart: (state, action) => {
      const Idnumber = state.item.findIndex(
        (elem) => elem.title === action.payload.title
      );

      if (Idnumber >= 0) {
        toast.error("Already in Cart");
      } else {
        state.Quantity += action.payload.qunt;

        const newItem = {
          ...action.payload,
          qunt: action.payload.qunt, // Ensure qunt property is initialized
          total: action.payload.price,
        };
        state.item = [...state.item, newItem];
        localStorage.setItem("cart", JSON.stringify(state.item));
        toast.success("Added To Cart");
      }
    },

    // Aa Add to like nu function se
    LikeAdd: (state, action) => {
      const Idnumber = state.sdata.findIndex(
        (elem) => elem.title === action.payload.title
      );

      if (Idnumber >= 0) {
        toast.error("Already Liked");
      } else {
        state.like += 1;
        state.sdata = [...state.sdata, action.payload];
        toast.success("Added to Liked");
      }
    },

    // Aa remove like karvanu function se
    removeLikeFromCart: (state, action) => {
      state.sdata = state.sdata.filter((item) => item.id !== action.payload);
      state.like -= 1;
    },

    // Aa remove to cart karvanu function se
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

    incrementQuantity: (state, action) => {
      const Idnumber = state.item.findIndex(
        (elem) => elem.id === action.payload
      );

      if (Idnumber !== -1) {
        state.item[Idnumber].qunt += 1;
        state.Quantity += 1;
        state.item[Idnumber].total += state.item[Idnumber].price;
      }
    },

    decrementQuantity: (state, action) => {
      const Idnumber = state.item.findIndex(
        (elem) => elem.id === action.payload
      );
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
      state.data = action.payload;
      localStorage.setItem("productdata", action.payload);
    },

    incrementQuantity2: (state, action) => {
      const itemIndex = state.data.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.data[itemIndex].qunt += 1;
      }
    },

    decrementQuantity2: (state, action) => {
      const itemIndex = state.data.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1 && state.data[itemIndex].qunt > 1) {
        state.data[itemIndex].qunt -= 1;
      }
    },

    Logout: (state) => {
      state.userId = "";
      localStorage.removeItem("username");
    },

    loginsubmit: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("username", action.payload);
      console.log(action.payload);
    },

    buynow: (state, action) => {
      state.productid = action.payload;
      localStorage.setItem("productid", action.payload);
    },

    BuyNow: (state, action) => {
      state.buyproduct = action.payload;
    },
  },
});

export const {
  AddCart,
  LikeAdd,
  incrementQuantity,
  decrementQuantity,
  incrementQuantity2,
  decrementQuantity2,
  removeItemFromCart,
  removeLikeFromCart,
  ProductAdd,
  LoginFormslice,
  Logout,
  loginsubmit,
  clearDatastore,
  BuyNow,
} = CartItem.actions;
export default CartItem;
