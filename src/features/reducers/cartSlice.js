import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    title: "",
    price: 0,
    quantity: 0,
  },
  reducers: {

  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
