/* eslint-disable no-unused-vars */
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState({
  cartTotalQty: 0,
  cartTotalAmount: 0,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    populateCart(state, action) {
      if (localStorage.getItem("cartItems")) {
        cartAdapter.setAll(
          state,
          JSON.parse(localStorage.getItem("cartItems"))
        );
      }
    },
    addToCart(state, action) {
      const productExist = state.entities[action.payload.id];

      if (productExist) {
        state.entities[action.payload.id].cartQty += 1;
      } else {
        cartAdapter.addOne(state, action.payload);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.entities));
    },
    getTotals(state, action) {
      let { total, qty } = Object.values(state.entities).reduce(
        (cartTotal, cartItem) => {
          const { price, cartQty } = cartItem;
          const itemTotal = price * cartQty;

          cartTotal.total += itemTotal;
          cartTotal.qty += cartQty;

          return cartTotal;
        },
        {
          total: 0,
          qty: 0,
        }
      );
      state.cartTotalQty = qty;
      state.cartTotalAmount = total;
    },
    decreaseCart(state, action) {
      const product = state.entities[action.payload.id];

      if (product.cartQty > 1) {
        product.cartQty -= 1;
      } else if (product.cartQty === 1) {
        cartAdapter.removeOne(state, action.payload.id);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.entities));
    },
    removeFromCart(state, action) {
      cartAdapter.removeOne(state, action.payload.id);

      localStorage.setItem("cartItems", JSON.stringify(state.entities));
    },
  },
});

export const {selectAll, selectById} = cartAdapter.getSelectors(state => state.cart);

export const {
  populateCart,
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;

