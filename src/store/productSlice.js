import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //This one creates the second part of the state eg: state.products.products
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default productSlice.reducer;
