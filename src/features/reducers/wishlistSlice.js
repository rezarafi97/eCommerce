/* eslint-disable no-unused-vars */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const wishlistAdapter = createEntityAdapter();
const initialState = wishlistAdapter.getInitialState();

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    populateWishlist(state, action) {
      if (localStorage.getItem("wishlistItems")) {
        wishlistAdapter.setAll(
          state,
          JSON.parse(localStorage.getItem("wishlistItems"))
        );
      }
    },
    addToWishlist(state, action) {
      const productExist = state.entities[action.payload.id];

      if (!productExist) {
        wishlistAdapter.addOne(state, action.payload);
      } else {
        wishlistAdapter.removeOne(state, action.payload.id);

        localStorage.setItem("wishlistItems", JSON.stringify(state.entities));
      }

      localStorage.setItem("wishlistItems", JSON.stringify(state.entities));
    },
    removeFromWishlist(state, action) {
      wishlistAdapter.removeOne(state, action.payload.id);

      localStorage.setItem("wishlistItems", JSON.stringify(state.entities));
    },
  },
});

export const { selectAll: selectWishlist } = wishlistAdapter.getSelectors(
  (state) => state.wishlist
);

export const { populateWishlist, addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
