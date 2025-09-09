import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    // this generates the first part of the state eg: state.products
    products: productReducer,
    users: userReducer,
    cart: cartReducer,
  },
});
