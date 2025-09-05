import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export default configureStore({
  reducer: {
    // this generates the first part of the state eg: state.products
    products: productReducer,
  },
});
